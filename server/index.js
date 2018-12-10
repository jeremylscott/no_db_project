const express = require('express')
const {json} = require('body-parser')
const app = express()
const port = 4001
app.use(json())

const {getRecipes,addToFavorites,deleteRecipe,updateRecipe} = require('./controller')

//requests for the data to populate the back end server.
app.get('/api/recipes', getRecipes)
app.post('/api/recipes', addToFavorites)
app.delete('/api/recipes/:id', deleteRecipe)
app.put('/api/recipes/:id', updateRecipe)


app.listen(port, () => console.log(`Listening to port: ${port}`))