import React from "react";
import { TextInput, StyleSheet, Button, View } from "react-native";
import PropTypes from "prop-types";
import Constants from "expo-constants";
const styles = StyleSheet.create({
  input: {
    padding: 5,
    borderColor: "black",
    borderWidth: 2,
    margin: 10,
    borderRadius: 5,
  },
});

export default class AddContactForm extends React.Component {
  static propTypes = {
    addContact: PropTypes.func,
  };

  state = {
    name: "",
    phone: "",
  };

  handleNameChange = (name) => {
    this.setState({
      name: name,
    });
  };

  handlePhoneChange = (phone) => {
    if (+phone >= 0 && phone.length <= 10) {
      this.setState({
        phone: phone,
      });
    }
  };

  handleSubmit = () => {
    if (+this.state.phone >= 0 && this.state.phone.length <= 10 && this.state.name.length == 10) {

    this.props.onSubmit(this.state);
    }
  };

  render() {
    return (
      <View style={{ paddingTop: Constants.statusBarHeight + 10 }}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={this.state.name}
          onChangeText={this.handleNameChange}
          autoCapitalize="words"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={this.state.phone}
          keyboardType="numeric"
          onChangeText={this.handlePhoneChange}
        />
        <Button title="Submit" disabled={true}onPress={this.handleSubmit} />
      </View>
    );
  }
}
