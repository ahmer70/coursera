
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import MenuComponent from './components/MenuComponent';

import { DISHES } from './shared/Dishes';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
    }
  }
  render() {
    return (
      <div>
          <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href='/'>ConFusion</NavbarBrand>
        </div>
      </Navbar>
      <MenuComponent dishes={this.state.dishes}/>
      </div>
    )
  }
}

