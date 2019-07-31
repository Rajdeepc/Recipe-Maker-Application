import React from 'react';
import './App.css';
import RecipeListContainer from './components/recipe/recipeList'
import  { Container } from 'react-bootstrap';

const App = (props) => {
  return (
    <Container>
     <RecipeListContainer {...props}/>
    </Container>
  );
}

export default App;
