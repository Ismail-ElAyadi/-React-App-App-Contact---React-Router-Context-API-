import React, { Component } from "react";

// Pour créer le context
const Context = React.createContext();


// reducer fexectute l'action que j'envoi LEVIER

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        infoContacts: state.infoContacts.filter(
          el => el.id !== action.propReducer
        )
      };
    default:
      return state;
  }
};

//Provider = celui qui donne en Anglais
export class Provider extends Component {
  // on Recupere le state du component Liste
  state = {
    infoContacts: [
      {
        id: 1,
        nom: "René Doe",
        email: "jhi@gmail.com",
        tel: "655-555-555"
      },
      {
        id: 2,
        nom: "Legende Doe",
        email: "jhi@gmail.com",
        tel: "655-555-555"
      },
      {
        id: 3,
        nom: "Isma",
        email: "jhi@gmail.com",
        tel: "655-555-555"
      }
    ],
    //dispatch = envoyer en Anglais
    //REcupere les actions et les envois
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      //On Prend tout le state on appel la variable Conxt et PRovider = propriété de context qui permet de faire hériter les propriété au composant

      <Context.Provider value={this.state}>
        {" "}
        {
          this.props.children // contenuqui est dans le composant au moment de l'initialisation <Consumer></Consumer>
        }{" "}
      </Context.Provider>
    );
  }
}
//Consumer = Utilisateur
export const Consumer = Context.Consumer;
