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
})
