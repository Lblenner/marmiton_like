import React from 'react'
import TextArea from './TextArea';
import Ingredients from './Ingredients';
import Router from 'next/router'

type MyProps = {};
type MyState = {};

export default class AddForm extends React.Component<MyProps, MyState>  {

  textarea

  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.textarea = ""
  }

  async addRecette(recette) {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json');

    var myInit = {
      method: 'POST',
      headers: requestHeaders,
      mode: 'cors' as RequestMode,
      cache: 'default' as RequestCache,
      credentials: 'include' as RequestCredentials,
      body: JSON.stringify(recette)
    };
    var response = await fetch("http://134.122.90.48/api/v1/recettes", myInit)
    var json = await response.json()

    console.log("Voici la réponse: "+JSON.stringify(json))
    Router.push('/')
  }

  handleSubmit(event) {
    event.preventDefault();
    let recette = this.createBody(event.target)
    this.addRecette(recette)
  }

  createBody(listeData) {
    let n = listeData.length
    let recette = new Recette(listeData[0].value, listeData[1].value, listeData[n - 2].value)
    recette.elements.push({ ingredient: { nom: listeData[4].value }, quantite: { nombre: listeData[2].value, unite: listeData[3].value } })
    for (let i = 5; i < n - 5; i += 4) {
      let nombre = listeData[i].value
      let unite = listeData[i + 1].value
      let nom = listeData[i + 2].value

      recette.elements.push({ ingredient: { nom: nom }, quantite: { nombre: nombre, unite: unite } })
    }
    return recette
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="form">

        <div className="form-group">
          <label htmlFor="titre">Titre</label>
          <input required type="text" className="form-control" id="titre" placeholder="Brownie au curry" />
          <div className="invalid-feedback">
            {"err"}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input required type="text" className="form-control" id="description" placeholder="Une recette original pour les friands de nouvelles expériences" />
        </div>

        <div className="form-group">
          <label htmlFor="">Ingrédients</label>
          <Ingredients />
        </div>

        <div className="form-group">
          <label htmlFor="area">Recette</label>
          <TextArea id="area" placeHolder={["Etape 1:", "Préparer le chou...", "Etape 2:", "Videz un bol de curry..."]} />
        </div>

        <button type="submit" className="btn btn-primary">Créer la recette</button>

        <style jsx>{`
        #form {
          margin-top: 20px
        }
        `}</style>

      </form>
    );
  }
}

class Recette {
  nom: string;
  //description: string;
  elements: Array<object>;
  //recette: string;

  constructor(nom, description, recette) {
    this.nom = nom
    //this.description = description
    //this.recette = recette
    this.elements = []
  }


}