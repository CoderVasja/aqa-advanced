// ApiController.js
const axios = require("axios");

class ApiController {
  constructor() {
    this.baseUrl = "https://jsonplaceholder.typicode.com";
  }

  async getPosts() {
    return axios.get(`${this.baseUrl}/posts`);
  }

  async getPostById(postId) {
    return axios.get(`${this.baseUrl}/posts/${postId}`);
  }

  async createNewPost(data) {
    return axios.post(`${this.baseUrl}/posts`, data);
  }

  async updatePost(data, postId) {
    return axios.put(`${this.baseUrl}/posts/${postId}`, data);
  }

  async deletePost(postId) {
    return axios.delete(`${this.baseUrl}/posts/${postId}`);
  }
}

module.exports = { ApiController };
