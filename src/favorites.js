import React from 'react'

export default function Favorites (props) {

        let favRecipes = props.favorites.map((recipe) => {
            return (
                <div className='recipeWrapper' key={recipe.id}>
                    <h6 className='recipeTitle'><span>{recipe.title}</span></h6>
                    <img className='recipeImg' src={recipe.thumbnail}/>
                    <div className='recipeText'>
                        <p>Ingredients: {recipe.ingredients}</p>
                        <a href={recipe.href}>Recipe</a>
                        <button className='buttons' onClick={() => props.removeFavorite(recipe.id)}>Delete</button>
                    </div>
                </div>
            )
        })

    return (
        <div>
         {favRecipes}
         </div>
        )
}