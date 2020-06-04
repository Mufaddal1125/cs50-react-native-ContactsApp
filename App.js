import React from "react";

import {createSwitchNavigator, createAppContainer} from "react-navigation";

import contacts, {compareNames} from "./contacts";
import ContactListScreen from "./Screen/ContactListScreen";
import AddContactScreen from "./Screen/AddContactScreen";

const AppNavigator = createSwitchNavigator(
    {
        AddContact: AddContactScreen,
        Contactlist: ContactListScreen,
    },
    {
        initialRouteName: "Contactlist",
    }
);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
    state = {
        showContacts: false,
        showForm: false,
        contacts: contacts,
    };

    addContact = newContact => {
        this.setState(prevState => ({
            contacts: [...prevState.contacts, newContact]
        }));
    };


    render() {
        return (
            <AppContainer
                screenProps={{
                    contacts: this.state.contacts,
                    addContact: this.addContact,
                }}
            />
        );
    }
}
