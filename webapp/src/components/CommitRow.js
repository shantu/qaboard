import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import styled from "styled-components";
import { format } from "mathjs/number";
import copy from 'copy-to-clipboard';

import {
  Classes,
  Button,
  Icon,
  Intent,
  Tooltip,
  Tag,
  Menu,
  MenuItem,
  Popover,
} from "@blueprintjs/core";

import { updateSelected } from "../actions/selected";

import { Avatar } from "./avatars";
import { DoneAtTag } from "./DoneAtTag";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { shortId, pretty_label, linux_to_windows } from "../utils";

const CommitDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-grow: 1;
  padding-left: 10px;
`;

const Message = styled.span`
  font-weight: 600;
`;

const CommitContent = styled.div`
  padding-right: 10px;
  max-width: 750px;
`;

const CommitRowWrapper = styled.li`
  display: flex;
  border-color: #f0f0f0;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
  padding: 10px 0;
  margin: 0;
`;

const has_outputs_in_batch = label => commit => {
  if (commit.batches[label] === undefined || commit.batches[label] === null)
    return false;
  const { valid_outputs=0, pending_outputs=0, running_outputs=0, failed_outputs=0 } = commit.batches[label];
  let total_outputs = valid_outputs + pending_outputs + running_outputs + failed_outputs;
  return total_outputs > 0;
}


class CommitResults extends React.Component {
  render() {
    const { project, project_data={}, commit, dispatch } = this.props;

    let incomplete_data = commit.message === undefined || commit.message === null;
    if (incomplete_data)
      return <span></span>

    const git = (project_data.data || {}).git || {};
    const gitlab_commit_url = `${git.web_url}/commit/${commit.id}`;
    let batches_with_results = Object.entries(commit.batches)
                               .filter( ([label, batch]) => has_outputs_in_batch(label)(commit) )
                               .map( ([label, batch]) => label )
    let valid_outputs_not_in_default_batch = (!has_outputs_in_batch('default')(commit) && batches_with_results.length>0)
    let ci_batch_label = valid_outputs_not_in_default_batch ? batches_with_results[0] : 'default'
    let ci_batch =  commit.batches[ci_batch_label];

    if (
      ci_batch === undefined ||
      (ci_batch.failed_outputs === 0 &&
        ci_batch.valid_outputs === 0 &&
        ci_batch.pending_outputs === 0)
    )
      return (
        <div>
        <a style={{ color: "grey" }} href={gitlab_commit_url}>
          <Button intent={Intent.WARNING} minimal>
          
            Check the pipeline status..
          </Button>
        </a>
        <Link
          style={{ marginLeft: "10px" }}
          to={`/${project}/commit/${commit.id}${ci_batch_label !== 'default' ? `?batch=${ci_batch_label}` : ''}`}
          onClick={() => dispatch(updateSelected(project, {new_commit_id: commit.id, ref_commit_id: null, selected_batch_new: ci_batch_label, selected_batch_ref: ci_batch_label}))}
        >
          <Button intent={Intent.DANGER} minimal>
            No results
          </Button>
        </Link>
        </div>
      );

    const formatter = v => format(v, {precision: 3})
    let tuning_batches_labels = Object.keys(commit.batches).filter(label => label !== ci_batch_label);

    let has_android_manual_batch = has_outputs_in_batch("manual-android-rt")(commit);
    let has_android_batch = has_outputs_in_batch("ci-android-rt")(commit);

    const { available_metrics={}, default_metric } = (project_data.data || {}).qatools_metrics || {};
    const default_metric_info = available_metrics[default_metric] || {};

    let status_messages = (
      <Fragment>
        {ci_batch.pending_outputs - ci_batch.running_outputs > 0 && (
          <Tag minimal style={{ marginRight: "4px" }}>
            {ci_batch.pending_outputs - ci_batch.running_outputs} pending
          </Tag>
        )}
        {ci_batch.running_outputs > 0 && (
          <Tag
            minimal
            style={{ marginRight: "4px" }}
            intent={Intent.PRIMARY}
          >
            {ci_batch.running_outputs} running
          </Tag>
        )}
        {ci_batch.failed_outputs > 0 && (
          <Link
            style={{ marginLeft: "10px" }}
            to={`/${project}/commit/${commit.id}${ci_batch_label !== 'default' ? `?batch=${ci_batch_label}` : ''}`}
            onClick={() => this.props.dispatch(updateSelected(this.props.project, {new_commit_id: commit.id, ref_commit_id: null, selected_batch_new: ci_batch_label, selected_batch_ref: ci_batch_label}))}
          >
            <Button intent={Intent.DANGER} minimal>
              {ci_batch.failed_outputs} crashed
            </Button>
          </Link>
        )}
        {tuning_batches_labels.length > 0 && (
          <Tooltip inheritDarkTheme={false} hoverCloseDelay={2000}>
            <Tag
              intent={Intent.SUCCESS}
              minimal
              style={{ marginRight: "4px" }}
            >
              {tuning_batches_labels.length} other batch{tuning_batches_labels.length > 1 ? "es" : ""}
            </Tag>
            <div>
              {tuning_batches_labels.map(label => {
                  let batch = commit.batches[label];
                  let status = `${batch.valid_outputs}/${batch.valid_outputs+batch.pending_outputs+batch.failed_outputs} ✅`;
                  let failures = batch.failed_outputs > 0 ? `${batch.failed_outputs}❌` : "";
                  return <Link
                          key={label}
                          to={`/${project}/commit/${commit.id}?batch=${label}`}
                          onClick={() => this.props.dispatch(updateSelected(this.props.project, {new_commit_id: commit.id, ref_commit_id: null, selected_batch_new: label, selected_batch_ref: label}))}
                         >
                    <Button style={{margin: '5px'}}>{pretty_label(batch)} &nbsp;•&nbsp;{status}&nbsp;{failures}</Button>
                  </Link>
              })}
            </div>
          </Tooltip>
        )}
        {has_android_manual_batch && (
          <Tag
            intent={Intent.SUCCESS}
            minimal
            style={{ marginRight: "4px" }}
          >
            {commit.batches["manual-android-rt"].valid_outputs} @android:manual
          </Tag>
        )}
        {has_android_batch && (
          <Tag
            intent={Intent.SUCCESS}
            minimal
            style={{ marginRight: "4px" }}
          >
            {commit.batches["ci-android-rt"].valid_outputs} @android:ci
          </Tag>
        )}
        {ci_batch.valid_outputs === 0 && <Link
          style={{ marginLeft: "10px" }}
          to={`/${project}/commit/${commit.id}${ci_batch_label !== 'default' ? `?batch=${ci_batch_label}` : ''}`}
          onClick={() => this.props.dispatch(updateSelected(this.props.project, {new_commit_id: commit.id, ref_commit_id: null, selected_batch_new: ci_batch_label, selected_batch_ref: ci_batch_label}))}
        >
          <Button intent={Intent.DANGER} minimal>
            No results
          </Button>
        </Link>}
        {ci_batch.valid_outputs > 0 && ci_batch.aggregated_metrics[`${default_metric_info.key}_median`] !== undefined  &&
            <Fragment>
              <Tag minimal style={{ marginRight: "4px" }}>
                <strong>
                  {formatter(
                    default_metric_info.scale *
                      ci_batch.aggregated_metrics[
                        `${default_metric_info.key}_median`
                      ]
                  )}
                  {default_metric_info.suffix}
                </strong>{" "}
                median{" "}
              </Tag>
              <Tag style={{ marginRight: "4px" }} minimal>
                <strong>
                  {formatter(
                    default_metric_info.scale *
                      ci_batch.aggregated_metrics[
                        `${default_metric_info.key}_average`
                      ]
                  )}
                  {default_metric_info.suffix}
                </strong>{" "}
                avg {default_metric_info.short_label}
              </Tag>
              {Object.keys(ci_batch.aggregated_metrics).length > 0 && <Tooltip modifiers>
                <Tag minimal round>...</Tag>
                <ul className={Classes.LIST}>
                  {Object.entries(ci_batch.aggregated_metrics || {}).map(([k, v]) => (
                    <li key={k}>
                      <strong>{k}:</strong> {formatter(v)}
                    </li>
                  ))}
                </ul>
              </Tooltip>}
            </Fragment>}
      </Fragment>
    );
    return (
      <div>
        {status_messages}
        {ci_batch.valid_outputs > 0 && (
          <Link
            onClick={() => this.props.dispatch(updateSelected(this.props.project, {new_commit_id: commit.id, ref_commit_id: null, selected_batch_new: ci_batch_label, selected_batch_ref: ci_batch_label}))}
            style={{ marginLeft: "10px" }}
            to={`/${project}/commit/${commit.id}${ci_batch_label !== 'default' ? `?batch=${ci_batch_label}` : ''}`}
          >
            <Button
              intent={Intent.SUCCESS}
              text={`${ci_batch.valid_outputs} ${pretty_label(ci_batch)} result${ci_batch.valid_outputs > 1 ? 's' : ''}`}
            />
          </Link>
        )}
      </div>
    );
  }
}
const CommitResultsStyled = styled(CommitResults)`
  margin-left: auto;
`;

const CommitShortId = styled.a`
  font-family: "Menlo", "Liberation Mono", "Consolas", "DejaVu Sans Mono",
    "Ubuntu Mono", "Courier New", "andale mono", "lucida console", monospace;
  font-weight: 600;
  color: #1b69b6;
`;

class CommitRow extends React.Component {
  render() {
    const { commit, project, project_data={}, className, tag, toaster, dispatch } = this.props;
    const git = (project_data.data || {}).git || {};
    const commit_url = `${git.web_url}/commit/${commit.id}`
    let maybe_skeletton = !!commit.message ? null : Classes.SKELETON;
    return (
      <CommitRowWrapper className={className}>
        <Avatar
          src={!!commit.committer_avatar_url ? commit.committer_avatar_url : null}
          href={!!commit.committer_name ? `/${project}/committer/${commit.committer_name}` : null}
          onClick={() => dispatch(updateSelected(project, {branch: null, committer: commit.committer_name}))}
          alt={commit.committer_name || commit.id || '?'}
        />

        <CommitDetails>
          <CommitContent style={{ maxWidth: "600px" }}>
            {tag}
            <Message className={maybe_skeletton}>{commit.message || 'xxxxxxxxxx xxxxxx xxxxxxxxx xxxxxxxxxxx'}</Message>
            <div>
              <Tooltip>
                <CommitShortId project={project} href={commit_url}>
                  {shortId(project, commit.id)}
                </CommitShortId>
                <span>View Commit Diff</span>
              </Tooltip>
              <Tooltip>
                <CopyToClipboard
                  text={commit.id}
                  onCopy={() => {
                    toaster.show({
                      message: "Copied to clipboard!",
                      intent: Intent.PRIMARY
                    });
                  }}
                >
                  <Icon
                    style={{marginLeft: '4px', marginRight: '4px'}}
                    title="Copy to clipboard"
                    intent={Intent.PRIMARY}
                    iconSize={Icon.SIZE_SMALL}
                    icon="duplicate"
                  />
                </CopyToClipboard>
                <span>Copy to clipboard</span>
              </Tooltip>

            <Popover position="bottom" hoverCloseDelay={500} interactionKind={"hover"}>
              <Icon icon="menu" style={{marginLeft: '4px', marginRight: '10px', color: "rgba(0,0,0,0.45)"}}/>
              <Menu>
                <MenuItem text="Copy Directory" label={<Tag minimal>windows</Tag>} className={Classes.TEXT_MUTED} minimal icon="duplicate" onClick={() => {toaster.show({message: "Windows path copied to clipboard!", intent: Intent.PRIMARY}); copy(linux_to_windows(commit.commit_dir_url))}} />
                <MenuItem text="Copy Directory" label={<Tag minimal>linux</Tag>} className={Classes.TEXT_MUTED} minimal icon="duplicate" onClick={() => {toaster.show({message: "Linux path copied to clipboard!", intent: Intent.PRIMARY}); copy(decodeURI(commit.commit_dir_url).slice(2))}} />
                <MenuItem text="View files in browser" rel="noopener noreferrer" target="_blank" href={commit.commit_dir_url} className={Classes.TEXT_MUTED} minimal icon="folder-shared-open"/>
              </Menu>
            </Popover>


              <Icon icon="git-branch" />
              <Link
                style={{
                  color: "rgba(0,0,0,0.65)",
                  marginRight: '5px',
                  marginTop: !!commit.message && '4px',
                }}
                to={`/${project}/commits/${(commit.branch || '')}`}
                onClick={() => dispatch(updateSelected(project, {branch: commit.branch, committer: null}))}
              >
                {(commit.branch || '')}
              </Link>
              <DoneAtTag project={project} commit={commit} dispatch={dispatch} />
            </div>
          </CommitContent>

          <CommitResultsStyled project={project} dispatch={dispatch} project_data={project_data} commit={commit} />
        </CommitDetails>
      </CommitRowWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

export default connect(mapStateToProps)(CommitRow);