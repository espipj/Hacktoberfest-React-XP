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
    borderRadius: 20,
  }),
};
export class FilterForm extends Component<FilterFormProps> {
  render() {
    const languageLabels = this.props.languages.map(({ name, color }, idx) => (
      <View
        key={idx}
        style={[
          _styles.aroundLang,
          idx === this.props.selectedLanguage
            ? [
                _styles.aroundLangSelected,
                Styles.createViewStyle({ backgroundColor: color }),
              ]
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
