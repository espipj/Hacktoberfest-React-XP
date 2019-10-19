import React from 'react';
import { Component, View, Text, CommonProps, Styles } from 'reactxp';
import { Language } from '../types/main';

export interface FilterFormProps extends CommonProps {
  languages: Language[];
  onLanguageSelect: Function;
  selectedLanguage: number;
}

const _styles = {
  aroundLang: Styles.createViewStyle({
    padding: 4,
  }),
  aroundLangSelected: Styles.createViewStyle({
    backgroundColor: '#ffff6e',
    borderRadius: 20,
  }),
};
export class FilterForm extends Component<FilterFormProps> {
  render() {
    const languageLabels = this.props.languages.map(({ name }, idx) => (
      <View
        key={idx}
        style={[
          _styles.aroundLang,
          idx === this.props.selectedLanguage
            ? _styles.aroundLangSelected
            : Styles.createViewStyle({}),
        ]}
        onPress={() => this.props.onLanguageSelect(idx)}
      >
        <Text>{name}</Text>
      </View>
    ));
    return (
      <View style={Styles.createViewStyle({ flexDirection: 'row' })}>
        {languageLabels}
      </View>
    );
  }
}
