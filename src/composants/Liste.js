import React, { Component, Fragment } from "react";
import Contact from "./Contact";

export class Liste extends Component {

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
    ]
  };
  supprime = id => {
    // On Filtre l'id séléctionné
    const nvContacts = this.state.infoContacts.filter(elem => elem.id !== id);
    // On recré le tableau sans l'élément qui possédait l'id séléctionné
    this.setState({
      infoContacts: nvContacts
    });
  };

  render() {
    return (
      <Fragment>
        {this.state.infoContacts.map(elem => (
          <Contact
            key={elem.id}
            nom={elem.nom}
            email={elem.email}
            tel={elem.tel}
            //On l'appel depuis Contact.js
            supprimeClick={() => this.supprime(elem.id)}
          />
        ))}
      </Fragment>
      
    );
  }
}

export default Liste;
