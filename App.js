import React from "react";
import {
  // FlatList,
  Button,
  // ScrollView,
  StyleSheet,
  // Text,
  View,
  // SectionList,
} from "react-native";
import Constants from "expo-constants";

// import Row from "./Row";
import contacts, { compareNames } from "./contacts";
import Contactslist from "./Contactslist";
import AddContactForm from './AddContactForm'
export default class App extends React.Component {
  state = {
    showContacts: false,
    showForm: false,
    contacts: contacts,
  };

  addContact = (newContact) => {
    console.log("added")
    this.setState(prevState => ({showForm: false, contacts: [...prevState.contacts, newContact] }))
  }

  toggleContacts = () => {
    this.setState((prevState) => ({ showContacts: !prevState.showContacts }));
  };

  toggleForm = () => {
    this.setState((prevState) => ({ showForm: !prevState.showForm }));
  };

  sort = () => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts].sort(compareNames),
    }));
  };

  render() {

    if(this.state.showForm) return <AddContactForm onSubmit={this.addContact} />

    return (
      <View style={styles.container}>
        <Button style={styles.button} title="toggle contacts" onPress={this.toggleContacts} />
        <Button style={styles.button} title="Add Contact" onPress={this.toggleForm} />
        {this.state.showContacts ? (
          <Contactslist contacts={this.state.contacts} />
        ) : null}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight + 10,
    margin: 10,
  },
  button: {
    padding: 10,
    margin: 10,
    color: 'blue',
  }
});
