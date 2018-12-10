import React, { Component } from 'react';
import './App.css';
import facebook from './images/facebook.svg'
import twitter from './images/twitter.svg'
import instagram from './images/instagram.svg'
import google from './images/google.svg'
import pinterest from './images/pinterest.svg'
import Recipehead from './recipeHeader'
import Search from './search'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='headerCont'>
          <Recipehead/> 
          <div className='logoCont'>
            <img className='logos' src={facebook} alt='facebook'/>
            <img className='logos' src={twitter} alt='twitter'/>
            <img className='logos' src={instagram} alt='instagram'/>
            <img className='logos' src={pinterest} alt='pinterest'/>
            <img className='logos' src={google} alt='google'/>
          </div>
        </div>
        <Search/> 
      </div>
    );
  }
}


