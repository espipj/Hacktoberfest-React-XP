import React from 'react';
import { Component, View, CommonProps, Styles } from 'reactxp';
import {
  VirtualListView,
  VirtualListViewItemInfo,
  VirtualListViewCellRenderDetails,
} from 'reactxp-virtuallistview';
import { Issue } from './Issue';
import { IssueType, Item } from '../types/main';

export interface IssueListItemInfo extends VirtualListViewItemInfo {
  issue: IssueType;
}

export interface IssueProps extends CommonProps {
  issues: IssueType[];
}
export interface IssueListState {
  items: IssueListItemInfo[];
  loading: boolean;
}

const _styles = {
  listView: Styles.createViewStyle({
    backgroundColor: '#add8e6',
    flex: 1,
    width: 390,
  }),
};

export class IssueList extends Component<IssueProps, IssueListState> {
  constructor(props: IssueProps) {
    super(props);
    const processedIssues = props.issues.map((v: Item) => ({
      issue: v,
      key: v.id.toString(),
      height: 100,
      template: 'item',
    }));
    this.state = {
      items: processedIssues,
      loading: false,
    };
  }

  public render() {
    return (
      <View style={_styles.listView}>
        <VirtualListView
          itemList={this.state.items}
          renderItem={this._renderItem}
          animateChanges={true}
          skipRenderIfItemUnchanged={true}
          padding={10}
        />
      </View>
    );
  }

  private _renderItem(
    details: VirtualListViewCellRenderDetails<IssueListItemInfo>
  ) {
    return (
      <View>
        <Issue issue={details.item.issue} />
      </View>
    );
  }
}
