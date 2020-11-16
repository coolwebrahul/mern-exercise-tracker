import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import ExerciseList from "./components/ExerciseList.component";
import CreateExercise from './components/CreateExercise.component';
import EditExercise from './components/EditExercise.component';
import CreateUser from  './components/CreateUser.component';
import NavBar from './components/NavBar.component'; 

function App() {
  return (
    <Router>
      <NavBar/>
      <br/>
      <Route path="/" exact component={ExerciseList}/>
     {/* <Route path="/about" exact component={About}/>
      <Route path="/contact" exact component={Contact}/>
  */}
      <Route path="/edit/:id" exact component={EditExercise}/>
      <Route path="/create" exact component={CreateExercise}/>
      <Route path="/user" exact component={CreateUser}/>
      
      
    </Router>
    );
}

export default App;
