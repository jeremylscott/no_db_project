import React from 'react'

export default function Favorites (props) {

        let favRecipes = props.favorites.map((recipe) => {
            return (
                <div className='recipeWrapper' key={recipe.id}>
                    <h3 className='recipeTitle'><span>{recipe.title}</span></h3>
                    <img className='recipeImg' src={recipe.thumbnail}/>
                    <div className='recipeText'>
                        <p className='ingredients'><strong className='ingredients'>Ingredients: </strong> {recipe.ingredients}</p>
                        <a href={recipe.href}>Get recipe</a>
                        <form action='' onSubmit={(event) => props.handleUpdate(recipe.id,props.ingredients,event)}>
                            <input className='favInput' type='text' onChange={props.updateIngredients}
                                placeholder='Add new ingredients...'/>
                        </form>
                        <button className='buttDelet' onClick={() => props.removeFavorite(recipe.id)}>Delete</button>
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