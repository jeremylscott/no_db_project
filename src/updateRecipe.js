import React, {Component} from 'react'
import './App.css';
import RecipeComponent from './recipeComponent';

export default class UpdateRecipe extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        ingredients: ''
      }

    }

    render() {
        return (
            <RecipeComponent ingredients={this.state.ingredients}/>
        )
    }




}  