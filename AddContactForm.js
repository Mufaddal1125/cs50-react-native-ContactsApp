import React from "react";
import { TextInput, StyleSheet, Button, View, KeyboardAvoidingView } from "react-native";
import PropTypes from "prop-types";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      justifyContent: 'center'
  },
  input: {
    padding: 5,
    borderColor: "black",
    borderWidth: 2,
    margin: 10,
    borderRadius: 5,
    justifyContent: "center",
  },
});

export default class AddContactForm extends React.Component {
  static propTypes = {
    addContact: PropTypes.func,
  };

  state = {
    name: "",
    phone: "",
    isFormValid: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.name !== prevState.name ||
      this.state.phone !== prevState.phone
    ) {
      this.validateForm();
    }
  }

  getHandler = key => {
    // console.warn(val)
    return val => {
      this.setState({[key]: val})
    }
  }
  handleNameChange = this.getHandler('name')
  // handlePhoneChange = this.getHandler('phone')

  handlePhoneChange = (phone) => {
    if (+phone >= 0 && phone.length <= 10) {
      this.setState({ phone });
    }
  };

  validateForm = () => {
    console.log(this.state)
    const names = this.state.name.split(' ')
    if (
      +this.state.phone >= 0 &&
      this.state.phone.length === 10 &&
      this.state.name.length >= 3 &&
        names.length >= 2 &&
        names[1]
    ) {
      return this.setState({ isFormValid: true });
    } else {
      return this.setState({ isFormValid: false  });
    }
  };

  handleSubmit = () => {
    console.log('clicked on addContacts')
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={this.state.name}
          onChangeText={this.getHandler('name')}
          autoCapitalize="words"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={this.state.phone}
          keyboardType="numeric"
          onChangeText={this.handlePhoneChange}
        />
        <Button
          title="Submit"
          disabled={!this.state.isFormValid}
          onPress={this.handleSubmit}
        />
      </KeyboardAvoidingView>
    );
  }
}
