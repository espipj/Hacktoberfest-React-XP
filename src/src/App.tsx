import React from 'react';
import RX from 'reactxp';

const _styles = {
  main: RX.Styles.createViewStyle({
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }),

  title: RX.Styles.createTextStyle({
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'center',
  }),

  label: RX.Styles.createTextStyle({
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
  }),

  name: RX.Styles.createTextStyle({
    fontWeight: 'bold',
    fontSize: 36,
    color: '#a11ec6',
  }),

  links: RX.Styles.createViewStyle({
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  }),

  link: RX.Styles.createLinkStyle({
    marginRight: 5,
    marginLeft: 5,
    color: '#0070E0',
  }),
};

export class App extends RX.Component {
  public render() {
    return (
      <RX.View style={_styles.main}>
        <RX.View>
          <RX.Text style={_styles.title}>
            Welcome to <RX.Text style={_styles.name}>Hacktoberfest</RX.Text>
          </RX.Text>
        </RX.View>
      </RX.View>
    );
  }
}
