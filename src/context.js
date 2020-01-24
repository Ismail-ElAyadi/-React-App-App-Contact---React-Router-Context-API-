import React, {
  Component
} from "react";

// Pour créer le context
const Context = React.createContext();
const reducer =(state,action) =>{

switch(action.type) {
  case 'DELETE_CONTACT':
      return{
        infoContacts: state.infoContacts.filter(el =>
        el.id !== action.payload)
        }
default: return state;
}

}

//Provider = celui qui donne en Anglais
export class Provider extends Component {
  // on Recupere le state du component Liste
  state = {
    infoContacts: [{
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
dispatch : action =>{
this.setState(state => reducer(state,action))
}
  };
  render() {
    return (
      //On Prend tout le state
      <Context.Provider value = {
        this.state
      } > {
        this.props.children
      } </Context.Provider>
    );
  }
}
//Consumer = Utilisateur
export const Consumer = Context.Consumer;