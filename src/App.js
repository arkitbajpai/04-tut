import Header from "./Header.js";
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import Home from "./Home.js";
import About from "./About.js";
import NewPost from "./NewPost.js";
import PostPage from "./PostPage.js";
import Missing from "./Missing.js";
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [posts, setPosts] = useState([
     {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ])
  const[search,setSearch]= useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleDelete = (id) => {}
  return (
    <div className="App">
      <Header title="React Js Blog"/>
      <Nav search={search}  setSearch={setSearch}/>
      <Routes>
        <Route path="/" element={<Home posts={posts}/>} />
        <Route path="/post" element={<NewPost />} />
        <Route path="/post/:id" element={<PostPage posts={posts}  handleDelete={handleDelete} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
