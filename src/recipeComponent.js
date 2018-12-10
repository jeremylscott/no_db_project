import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FavHead from './favoritesHeader';
import Favorites from './favorites'
import Signature from './signature'

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
            alert('Item removed from favorites.')
            this.setState({
                favorites: response.data
            })
            })
    }

    handleUpdate = (id,ingredients) => {
        // event.preventDefault()
        axios
            .put(`/api/recipes/${id}`,{ingredients})
            .then(results => {
            alert('Ingredients have been changed')
            this.setState({
                recipes: results.data
            })
            })
    }

    addToFaves = (recipe) => {
        axios
            .post('/api/recipes', recipe)
            .then(response => { 
            alert('Item added to favorites!')
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

    render() {
        let recipeList = this.state.recipes.filter((recipe) => recipe.ingredients.toLowerCase().includes(this.props.searchText)).map((recipe) => {
            return ( 
                <div className='recipeWrapper' key={recipe.id}>
                    <h3 className='recipeTitle'><span>{recipe.title}</span></h3>
                    <img className='recipeImg' src={recipe.thumbnail} alt=''/>
                    <div className='recipeText'>
                        <p className='ingredients'><strong className='ingredients'>Ingredients:</strong> {recipe.ingredients}</p>
                        <a className='link' title='Go to recipe' href={recipe.href}>Get recipe</a>
                        <button className='buttons' title='Add to Favorites' onClick={() => this.addToFaves(recipe)}>Add to Favorites</button>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <div className='searchCont'>
                <input className='search' value={this.props.searchText}
                    onChange={this.props.updateSearchText}
                    placeholder='   Search recipes...'
                />
                </div>

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
