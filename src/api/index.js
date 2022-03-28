import axios from "axios";


const API = axios.create({baseURL: "https://api.spaceflightnewsapi.net/v3"});

export const LIMIT=8;

export const fetchPosts = (page) => API.get(`/articles?_start=${page}&_limit=${LIMIT}`);

export const fetchPost = (id) => API.get(`/articles/${id}`)

export const fetchPostsCount = () => API.get("/articles/count");