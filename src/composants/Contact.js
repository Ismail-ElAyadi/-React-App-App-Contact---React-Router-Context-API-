import React, { Component } from "react";
import { Consumer } from "../context";

export class Contact extends Component {
  state = {
    show: false
  };
  montrerContact = () => {
    this.setState({
      // Permet de changer et de mettre l'inverse de l'état actuel.
      show: !this.state.show
    });
  };
    /*
Ancienne Version
  supprimeContact = () => {

   On séléctionne les props pour leur appliquer cette méthode.
    fait référence à supprimeClick  de Liste.js qui va se charger de DElete
     C'est juste pour faire le lien

    #Supprimer pour faire le context => this.props.supprimeClick();
  };*/

  supprimeContact = (id,dispatch) => {
  dispatch({type:'DELETE_CONTACT', payload: id})}

  render() {

return (
<Consumer>
{/*Ne Pas oublier que Value = this.state dans ContextJS  */}
{value =>{

return (

  <div className="card card-body mb-3 text-center">
    <h4>
      {this.props.nom}&nbsp;
      {this.state.show ? (
        // Si state = true => Fleche vers le Haut
        <i
          style={{ cursor: "pointer", alignSelf: "right" }}
          className="fas fa-sort-up"
          onClick={this.montrerContact}
        ></i>
      ) : (
        // Si state = false => Fleche vers le bas
        <i
          style={{ cursor: "pointer" }}
          className="fas fa-sort-down"
          onClick={this.montrerContact}
        ></i>
      )}
      {/*Croix Rouge*/}
      <i
        className="fas fa-times"
        style={{ cursor: "pointer", float: "right", color: "red" }}
        onClick={() => this.supprimeContact(this.props.id,value.dispatch)}
      ></i>
    </h4>
    {/* VERSION TERNAIRE*/}
    {this.state.show ? (
      <ul className="card card-body mb-3">
        <li className="list-group-item">Email:{this.props.email}</li>
        <li className="list-group-item">Téléphone:{this.props.tel}</li>
      </ul>
    ) : null}
  </div>
);
}

}

</Consumer>
)

  }
}

export default Contact;
