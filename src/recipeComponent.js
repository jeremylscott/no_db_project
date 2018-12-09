import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FavHead from './favoritesHeader';
import Favorites from './favorites'
import Signature from './signature'
import Search from './search'

export default class RecipeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            recipes: [],
            favorites: [],
            ingredients: ''
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
        // Event.preventDefault()
        axios
            .put(`/api/recipes/${id}`,{ingredients})
            .then(results => {
            this.setState({
                recipes: results.data
            })
            })
    }

    addToFaves = (recipe) => {
        axios
            .post('/api/recipes', recipe)
            .then(response => { 
             this.setState({
                favorites: response.data
            })
            })
        }

    updateIngredients = (text) => {
        this.setState({
            ingredients: text.target.value
        })
    }

    // searchIngredients = (text) => {
    //     axios
    //         .get(`/api/recipes/${ingredients}`)
    //         .then(response => { 
    //             this.setState({
    //                 recipes: response.data
    //             })
    //         })
    // }

    render() {
        let recipeList = this.state.recipes.filter((recipe) => recipe.ingredients.toLowerCase().includes(this.props.searchText)).map((recipe) => {
            return ( 
                <div className='recipeWrapper' key={recipe.id}>
                    <h3 className='recipeTitle'><span>{recipe.title}</span></h3>
                    <img className='recipeImg' src={recipe.thumbnail}/>
                    <div className='recipeText'>
                        <p>Ingredients: {recipe.ingredients}</p>
                        <a href={recipe.href}>Recipe</a>
                        <button className='buttons' onClick={() => this.addToFaves(recipe)}>Add to Favorites</button>
                    </div>
                </div>
            )
        })

        return (
            <div>
                
                <input value={this.props.searchText}
                    onChange={this.props.updateSearchText}
                    placeholder='Recipe search...'
                />

                {recipeList}
    
                {this.state.favorites.length > 0
                ?
                    <div>
                        <FavHead/> 
                        <Favorites 
                            favorites={this.state.favorites}
                            removeFavorite={this.removeFavorite}
                            updateIngredients={this.updateIngredients}
                            ingredients={this.state.ingredients}
                            handleUpdate={this.handleUpdate}
                        />
                    </div>
                :
                    <div></div>
                }
                <Signature/> 
                
            </div>
        )
    };
}
