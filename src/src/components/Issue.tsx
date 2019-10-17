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
    flex: 1,
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
    borderRadius: 5,
    flexDirection: 'row',
  }),
  title: Styles.createTextStyle({
    fontWeight: 'bold',
  }),
  link: Styles.createLinkStyle({}),
  commentImage: Styles.createImageStyle({
    width: 25,
  }),
  clipImage: Styles.createImageStyle({
    height: 25,
  }),
};

export class Issue extends Component<IssueProps, Stateless> {
  private _commentIcon(comments: number) {
    if (comments > 0) {
      return (
        <Image
          style={_style.commentImage}
          source="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_message_48px-512.png"
        />
      );
    } else {
      return (
        <Image
          style={_style.commentImage}
          source="https://cdn1.iconfinder.com/data/icons/feather-2/24/message-square-512.png"
        />
      );
    }
  }
  public render() {
    const { html_url, title, comments } = this.props.issue;
    return (
      <View
        style={_style.surface}
        onPress={() => {
          Linking.openUrl(html_url);
        }}
      >
        <View
          style={Styles.createViewStyle({
            flexBasis: 6,
            flexGrow: 6,
            justifyContent: 'space-around',
          })}
        >
          <Text style={_style.title}>{title} </Text>
          <View
            style={Styles.createViewStyle({
              flexDirection: 'row',
              justifyContent: 'flex-start',
            })}
          >
            <Text>{comments}</Text>
            {this._commentIcon(comments)}
          </View>
        </View>
        <View
          style={Styles.createViewStyle({
            flex: 1,
            justifyContent: 'center',
          })}
          onPress={e => {
            e.stopPropagation();
            Clipboard.setText(html_url);
          }}
        >
          <Image
            style={_style.clipImage}
            source="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-clipboard-512.png"
          />
        </View>
      </View>
    );
  }
}
