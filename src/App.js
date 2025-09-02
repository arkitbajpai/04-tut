import Header from "./Header.js";
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import Home from "./Home.js";
import About from "./About.js";
import NewPost from "./NewPost.js";
import PostPage from "./PostPage.js";
import Missing from "./Missing.js";
import{Route,Routes} from 'react-router-dom';
//import { useState, useEffect } from "react";
import './App.css';

function App() {
  return (
    <div className="App">
     <Header title="Reeact Js Blog"/>
      <Nav />
      <Routes>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route exact path="/post">
        <NewPost/>
        </Route>
        <Route path="/post/:id">
        <PostPage/>
        </Route>
        <Route path="/about" Component={About} />
        <Route path="*" Component={Missing} />
      </Routes>
     <Footer />


      
        
    </div>
  );
}

export default App;
 