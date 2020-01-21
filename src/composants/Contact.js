import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div className="card card-body mb-3 text-center">
        <h4>
         {this.props.nom}&nbsp;<i className='fas fa-sort-down'></i>
        </h4>

        <ul className="card card-body mb-3">
          <li className="list-group-item">Email:{this.props.email}</li>
          <li className="list-group-item">Téléphone:{this.props.tel}</li>
          <li className="list-group-item"></li>
        </ul>
      </div>
    );
  }
}

export default Contact;
