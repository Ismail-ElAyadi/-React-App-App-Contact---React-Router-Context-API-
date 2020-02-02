import React, { Component } from "react";

// Pour créer le context
// le Context est un objet avec qui possede entre autre
// la propriété Consumer et Provider
const Context = React.createContext();


// reducer exectute l'action que j'envoi  = LEVIER

const reducer = (state, action) => {

//action.type = case
  switch (action.type) {
    case "DELETE_CONTACT":

      return {
        infoContacts: state.infoContacts.filter(
          el => el.id !== action.propReducer
        )
      };

    case "ADD_CONTACT" :
    return {

infoContacts:[action.propReducer, ...state.infoContacts]


    }
    default:
      return state;
  }
};

//Provider = celui qui donne en Anglais , donc c'est lui qui va fournir le state
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
      //On Prend tout le state on appel la variable Con et PRovider = propriété de context qui permet de faire hériter les propriété au composant

      <Context.Provider value={this.state}>
        {
          this.props.children // contenu qui est dans le composant au moment de l'initialisation entre les balises : <Consumer></Consumer>
        }
      </Context.Provider>
    );
  }
}
//Consumer = Utilisateur et  Consumer= propriété de l'objet contexte et ce qui va permettre d'utiliser le state.
// <Consumer></Consumer>
export const Consumer = Context.Consumer;
