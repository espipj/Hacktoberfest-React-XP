import React from 'react';
import RX, { CommonProps, ActivityIndicator } from 'reactxp';
import { IssueList } from './components/IssueList';
import axios from 'axios';
import { Item, Language } from './types/main';
import { FilterForm } from './components/FilterForm';

export interface AppState {
  items: Item[];
  loading: boolean;
  languages: Language[];
  selectedLanguage: number;
}

export class App extends RX.Component<CommonProps, AppState> {
  constructor(props: CommonProps) {
    super(props);
    var languages = require('./data/languages.json');
    this.state = {
      loading: true,
      items: [],
      languages: languages,
      selectedLanguage: 0,
    };
  }

  private onLanguageSelect(language: number) {
    this.setState({ selectedLanguage: language });
    return this.requestLanguageData(language);
  }

  componentWillMount() {
    this.requestLanguageData();
  }

  requestLanguageData(languageIdx?: number) {
    this.setState({ loading: true });
    axios
      .get(
        this.createURL(
          this.state.languages[
            typeof languageIdx !== 'undefined'
              ? languageIdx
              : this.state.selectedLanguage
          ]
        )
      )
      .then(response => {
        const items = response.data.items;
        this.setState({ items: items, loading: false });
      });
  }

  private createURL(language: Language) {
    return `https://api.github.com/search/issues?q=label:hacktoberfest+type:issue+state:open+no:assignee+language:${language.reqName}&per_page=100`;
  }

  private _renderList() {
    return (
      <RX.View style={_styles.root}>
        <RX.View style={_styles.header}>
          <RX.Text style={_styles.title}>
            Welcome to <RX.Text style={_styles.name}>Hacktoberfest</RX.Text>
          </RX.Text>
          <FilterForm
            languages={this.state.languages}
            onLanguageSelect={this.onLanguageSelect.bind(this)}
            selectedLanguage={this.state.selectedLanguage}
          />
        </RX.View>
        <RX.View style={_styles.main}>
          <IssueList
            issues={this.state.items}
            color={this.state.languages[this.state.selectedLanguage].color}
          />
        </RX.View>
      </RX.View>
    );
  }

  private _renderLoading() {
    return (
      <RX.View style={_styles.root}>
        <RX.View style={_styles.header}>
          <RX.Text style={_styles.title}>
            Welcome to <RX.Text style={_styles.name}>Hacktoberfest</RX.Text>
          </RX.Text>
          <FilterForm
            languages={this.state.languages}
            onLanguageSelect={this.onLanguageSelect.bind(this)}
            selectedLanguage={this.state.selectedLanguage}
          />
        </RX.View>
        <RX.View style={_styles.main}>
          <ActivityIndicator
            color={this.state.languages[this.state.selectedLanguage].color}
            size="large"
          />
        </RX.View>
      </RX.View>
    );
  }

  public render() {
    if (!this.state.loading) {
      return this._renderList();
    }
    return this._renderLoading();
  }
}

const _styles = {
  root: RX.Styles.createViewStyle({
    flex: 1,
    flexDirection: 'column',
  }),
  header: RX.Styles.createViewStyle({
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
  }),
  main: RX.Styles.createViewStyle({
    flexBasis: 1,
    flexGrow: 9,
    justifyContent: 'center',
    alignItems: 'center',
  }),

  title: RX.Styles.createTextStyle({
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'center',
  }),

  name: RX.Styles.createTextStyle({
    fontWeight: 'bold',
    fontSize: 36,
    color: '#a11ec6',
  }),
};
