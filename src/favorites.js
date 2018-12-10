import React from 'react'

export default function Favorites (props) {

        let favRecipes = props.favorites.map((recipe) => {
            return (
                <div className='recipeWrapper' key={recipe.id}>
                    <h3 className='recipeTitle'><span>{recipe.title}</span></h3>
                    <img className='recipeImg' src={recipe.thumbnail} alt=''/>
                    <div className='recipeText'>
                        <p className='ingredients'><strong className='ingredients'>Ingredients: </strong> {recipe.ingredients}</p>
                        <a title='Go to recipe' href={recipe.href}>Get recipe</a>
                        <form action='' onSubmit={(event) => props.handleUpdate(recipe.id,props.ingredients,event)}>
                            <input className='favInput' title='Change the ingredients' type='text' onChange={props.updateIngredients}
                                placeholder='Add new ingredients...'/>
                        </form>
                        <button className='buttDelet' title='Remove from Favorites' onClick={() => props.removeFavorite(recipe.id)}>Delete</button>
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