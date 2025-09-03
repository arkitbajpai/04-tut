import Header from "./Header.js";
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import Home from "./Home.js";
import About from "./About.js";
import NewPost from "./NewPost.js";
import PostPage from "./PostPage.js";
import Missing from "./Missing.js";
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="React Js Blog"/>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<NewPost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
