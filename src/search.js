import React, {Component} from 'react'
import RecipeComponent from './recipeComponent';


export default class Search extends Component {
    constructor (props) {
        super (props)

        this.state = {
            searchText: ''
        }
    }

    updateSearchText = (text) => {
        this.setState({
            searchText: text.target.value
        })
    }

    render() {

        return (
            <div>
                <RecipeComponent
                    searchText={this.state.searchText}
                    updateSearchText={this.updateSearchText}
                />
            </div>
        )

    }




}
