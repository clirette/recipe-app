import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.food2fork.com/api',
  params: {
    key: process.env.REACT_APP_F2F_API_KEY
  }
})