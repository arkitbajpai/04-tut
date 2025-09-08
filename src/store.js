import{createStore, action,thunk, computed}from"easy-peasy";
import axios from"axios";
import api from"./api/posts";
export default createStore({
    post:[],
    setPost: action((state, payload) => {
        state.post = payload;
    }),
      postTitle: '',
    setPostTitle: action((state, payload) => {
        state.postTitle = payload;
    }),
    postBody: '',
    setPostBody: action((state, payload) => {
        state.postBody = payload;
    }),
    editTitle: '',
    setEditTitle: action((state, payload) => {
        state.editTitle = payload;
    }),
    editBody: '',
    setEditBody: action((state, payload) => {
        state.editBody = payload;
    }),
    search: '',
    setSearch: action((state, payload) => {
        state.search = payload;
    }),
    searchResults: [],
    setSearchResults: action((state, payload) => {
        state.searchResults = payload;
    }),
    postCount: computed((state) => state.post.length),
    getPostById: computed((state) => {
        return (id) => state.post.find((post) => (post.id).toString() === id);
    }),
    savePost:thunk(async(actions, newPost,helpers) => {
        const { post } = helpers.getState();
        try{
            const response = await api.put(`/posts`,newPost);
            actions.setPosts([...post, response.data]);
            actions.setPostTitle('');
            actions.setPostBody('');
          } 
          catch(err){console.log(err);
        }
    }),
    deletePost: thunk(async(actions, id,helpers) => {
        const { post } = helpers.getState();
        try{
            await api.delete(`/posts/${id}`);
            const postsList = post.filter(post => post.id !== id);
            actions.setPost(postsList);
          }
            catch(err){console.log(err);
        }
    }),
    editPost: thunk(async(actions, updatePost,helpers) => {
        const { post } = helpers.getState();
        try{
            const response = await api.put(`/posts/${updatePost.id}`,updatePost);
            actions.setPost(post.map(post=>post.id===updatePost.id ?{...response.data}:post));
            actions.setEditTitle('');
            actions.setEditBody('');
          }
            catch(err){console.log(err);
        }
    }),
})
