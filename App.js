import React from "react";
import {
  FlatList,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Constants } from "expo";

import Row from "./row";
import contacts, { compareNames } from "./contacts";

export default class App extends React.Component {
  state = {
    showContacts: true,
  };

  toggleContacts = () => {
    this.setState((prevState) => ({ showContacts: !prevState.showContacts }));
  };

  renderItem = (obj) => <Row {...obj.item} />;
  
  sort = () => {
    this.setState((prevState) => {
      contacts: [...prevState.contacts].sort(compareNames);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <h1>Hello World!!!!</h1>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="sort" onPress={this.sort} />

        {this.state.showContacts ? (
          <FlatList data={this.state.contacts} renderItem={this.renderItem} />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: Constants.statusBarHeight,
  },
});
