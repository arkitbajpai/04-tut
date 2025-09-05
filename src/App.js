import Header from "./Header.js";
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import Home from "./Home.js";
import About from "./About.js";
import NewPost from "./NewPost.js";
import PostPage from "./PostPage.js";
import Missing from "./Missing.js";
import { Route, Routes, useNavigate } from 'react-router-dom';  // ✅ useNavigate instead of useHistory
import { useState, useEffect } from "react";
import { format } from "date-fns";
import EditPost from "./EditPost.js";
import './App.css';
import api from "./api/post.js";

function App() {
  const [posts, setPosts] = useState([
    
  ]);

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');

  useEffect(()=>
  {
    const fetchPosts = async () =>{
      try{
      const response= await api.get('/posts');
      if(response && response.data){
        setPosts(response.data);
      }
      
    }
    catch(err){console.log(err);}
    }
    fetchPosts();
  },[])
  useEffect(()=>{
    const filteredResults = posts.filter((post)=>
      ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
      ((post.title).toLowerCase()).includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  },[posts, search]);

  const handleSubmit = async (e) => {
  e.preventDefault();
  const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
  const datetime = format(new Date(), 'MMMM dd, yyyy pp');
  const newPost = { id, title: postTitle, datetime, body: postBody };

  try {
    const response = await api.post('/posts', newPost); // ✅ await here
    const allPosts = [...posts, response.data];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate('/');
  } catch (err) {
    console.log(err);
  }
};
const handleEdit= async (id) => {

 const datetime = format(new Date(), 'MMMM dd, yyyy pp');
  const updatePost = { id, title: postTitle, datetime, body: editBody };
  try{
    const response = await api.put(`/posts/${id}`,updatePost);
    setPosts(posts.map(post=>post.id===id ?{...response.data}:post));
    setEditTitle('');
    setEditBody('');
    navigate.push('/');
  } 
  catch(err){console.log(err);
}

}

  const navigate = useNavigate();  // ✅ new hook
  const handleDelete = async(id) => {
    await api.delete(`/posts/${id}`);
    try{
      const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    navigate('/');  }
    catch(err){console.log(err);}
    // ✅ replaces history.push('/')
  };

 return (
  <div className="App">
    <Header title="React Js Blog" />
    <Nav search={search} setSearch={setSearch} />
    <Routes>
      <Route path="/" element={<Home posts={searchResults} />} />
      <Route
        path="/post"
        element={
          <NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
          />
        }
      />
      <Route
        path="/edit/:id"
        element={
          <EditPost
            posts={posts}
            handleEdit={handleEdit}
            editBody={editBody}
            setEditBody={setEditBody}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
          />
        }
      />
      <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Missing />} />
    </Routes>
    <Footer />
  </div>
);
}

export default App;
