import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from 'uuid'
/*uuid = pour générer des ids  */
export default class AddContact extends Component {
  state = {
    nom: "",
    email: "",
    tel: ""
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
      /* e.target.name = le name de l'input et on change la state avec la value de l'input .. so Smart :)  */
    });

  onSubmit = (dispatch,e) => {



    e.preventDefault();
    let input = document.getElementsByTagName("input")
if (this.state.nom.trim() === ""){
input[0].style.backgroundColor= "rgba(50,0,0,0.1)"
input[0].placeholder = "Vous avez oubliez d'entrer un nom ! "

}
else if ( this.state.email.trim() === "" ){
    input[1].style.backgroundColor= "rgba(50,0,0,0.1)"
    input[1].placeholder = "Vous avez oubliez d'entrer une adresse mail ! "
}
else if(this.state.tel.trim() === ""  ) {
    input[2].style.backgroundColor= "rgba(50,0,0,0.1)"
    input[2].placeholder = "Vous avez oubliez d'entrer un numéro de tel ! "

}
else {



    input[0].style.backgroundColor= "white"
    input[1].style.backgroundColor= "white"
    input[2].style.backgroundColor= "white"



    const newConctact ={
        id: uuid(),
        nom: this.state.nom ,
        email:this.state.email,
        tel: this.state.tel
}

dispatch({type:'ADD_CONTACT', propReducer : newConctact })

this.setState({
    nom: "",
    email: "",
    tel: ""

})
}





  };
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="card mb-3">
              <div className="card-header">Ajouter un contact</div>

              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this,value.dispatch)}>
                  <div className="from-group">
                    <label htmlFor="nom">Nom</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Entrez un nom"
                      name="nom"
                      value={this.state.nom}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="from-group">
                    <label htmlFor="e-mail">E-mail</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Entrez un e-mail"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="from-group">
                    <label htmlFor="tel">Téléphone</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Entrez un numéro de téléphone"
                      name="tel"
                      value={this.state.tel}
                      onChange={this.onChange}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Ajouter"
                    className="btn btn-block btn-primary mt-3"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
