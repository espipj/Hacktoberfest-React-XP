import React from 'react';
import {
  Component,
  View,
  Text,
  Clipboard,
  CommonProps,
  Stateless,
  Styles,
  Linking,
  Image,
} from 'reactxp';
import { IssueType } from '../types/main';

export interface IssueProps extends CommonProps {
  issue: IssueType;
}
const _style = {
  surface: Styles.createViewStyle({
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: { width: 1.5, height: 2.5 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 6,
    width: 350,
    height: 90,
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 5,
  }),
  title: Styles.createTextStyle({
    fontWeight: 'bold',
  }),
  link: Styles.createLinkStyle({}),
  todoImage: Styles.createImageStyle({
    height: 20,
  }),
};

export class Issue extends Component<IssueProps, Stateless> {
  public render() {
    const { html_url, title, comments } = this.props.issue;
    return (
      <View
        style={_style.surface}
        onPress={e => {
          //   e.preventDefault();
          Linking.openUrl(html_url);
        }}
      >
        <Text style={_style.title}>{title} </Text>
        <Text>Issue Comment Count: {comments} </Text>
        <View
          onPress={e => {
            e.stopPropagation();
            Clipboard.setText(html_url);
          }}
        >
          <Image
            style={_style.todoImage}
            source="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-clipboard-512.png"
          />
        </View>
      </View>
    );
  }
}
