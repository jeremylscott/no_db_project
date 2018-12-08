import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FavHead from './favoritesHeader';
import Favorites from './favorites'
import UpdateRecipe from './updateRecipe'
import Signature from './signature'

export default class RecipeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            recipes: [],
            favorites: []
        }
    }

    componentDidMount() {
        axios
            .get('/api/recipes')
            .then(results => {
            this.setState({
                recipes: results.data
            })
            })
      }
    
    removeFavorite = (id) => {
        axios
            .delete(`/api/recipes/${id}`)
            .then((response) => {
            this.setState({
                favorites: response.data
            })
            })
    }

    handleUpdate = (id,ingredients) => {
        axios
            .put(`/api/recipes/${id},{text}`)
            .then(results => {
            this.setState({
                recipes: results.data
            })
            })
    }

    addToFaves = (recipe) => {
        axios
            .post('/api/recipes', recipe)
            .then((response) => {
             this.setState({
                favorites: response.data
            })
            })
        }

    render() {
        console.log(this.state.recipes)
        console.log(this.state.favorites);

        let recipeList = this.state.recipes.map((recipe) => {
            return ( 
                <div className='recipeWrapper' key={recipe.id}>
                    <h3 className='recipeTitle'><span>{recipe.title}</span></h3>
                    <img className='recipeImg' src={recipe.thumbnail}/>
                    <div className='recipeText'>
                        <p>Ingredients: {recipe.ingredients}</p>
                        <a href={recipe.href}>Recipe</a>
                        <button className='buttons' onClick={() => this.addToFaves(recipe)}>Add to Favorites</button>
                        <button className='buttons' onClick={ () => this.handleUpdate(    )}>Edit</button>
                    </div>
                </div>
            )
        })

        return (
            <div>
                {recipeList}

                {this.state.favorites.length > 0
                ?
                    <div>
                        <FavHead/> 
                        <Favorites 
                            favorites={this.state.favorites}
                            removeFavorite={this.removeFavorite}
                        />
                    </div>
                :
                    <div></div>
                }
                <Signature/> 
                
            </div>
                

        )
    }
}