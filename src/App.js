import React, { Component } from 'react';
import './App.css';
import facebook from './images/facebook.svg'
import twitter from './images/twitter.svg'
import instagram from './images/instagram.svg'
import google from './images/google.svg'
import pinterest from './images/pinterest.svg'
import Recipehead from './recipeHeader'
import RecipeComponent from './recipeComponent'
import Search from './search'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='headerCont'>
          <Recipehead/> 
          <div className='logoCont'>
            <img className='logos' src={facebook}/>
            <img className='logos' src={twitter}/>
            <img className='logos' src={instagram}/>
            <img className='logos' src={pinterest}/>
            <img className='logos' src={google}/>
          </div>
        </div>
        {/* <RecipeComponent/> */}
        <Search/>
      </div>
    );
  }
}


