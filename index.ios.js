'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');
var FBLogin    = require('./fb_login');

var styles = React.StyleSheet.create({
  container: {
    flex: 1
  }
});

class YesNo extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'YesNo',
          component: FBLogin,
        }}/>
    );
  }
}

class HelloWorld extends React.Component {
  render() {
    return <React.Text style={styles.text}>Hello World (Again)</React.Text>;
  }
}

React.AppRegistry.registerComponent('YesNo',
  function() { return YesNo });
