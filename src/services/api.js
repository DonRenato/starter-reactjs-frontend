import axios from 'axios';

const api = axios.create(
    {
        baseURL:"https://rocketseat-node.herokuapp.com/api"
        //baseURL:"https://localhost:3333/api"
    }
);

export default api;