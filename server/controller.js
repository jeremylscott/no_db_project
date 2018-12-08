const axios = require('axios')
let recipes = []
let favorites = []

axios.get('http://www.recipepuppy.com/api/')
         .then(response => recipes = response.data.results.map((element,index) => {
             return {
                 id: index,
                 title: element.title,
                 thumbnail: element.thumbnail,
                 ingredients: element.ingredients,
                 href: element.href,
                }
            }))    

getRecipes = (req,res) => {
    res.json(recipes)  
}

addToFavorites = (req,res) => {
    favorites.push(req.body)
    res.json(favorites)
}

deleteRecipe = (req,res) => {
   deleteId = req.params.id
   let index = favorites.findIndex(recipe => +recipe.id === +deleteId)
    favorites.splice(index,1)
    res.json(favorites)
}

updateRecipe = (req,res) => {
    recipes.splice(req.params.id,1,req.body.ingredients)
    res.json(recipes)
}


module.exports = {
    getRecipes,
    addToFavorites,
    deleteRecipe,
    updateRecipe
}