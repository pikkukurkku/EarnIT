// src/services/auth.service.js

import axios from "axios";

class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.SERVER_URL || "https://earnit-server.onrender.com",
    });

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }


  signup = (requestBody, quizInputId) => {
    return this.api.post("/auth/signup/" + quizInputId, requestBody);
  };

  login = (requestBody) => {
    return this.api.post("/auth/login", requestBody);
  };

  verify = () => {
    return this.api.get("/auth/verify");
  };

  deleteUser = () => {
    return this.api.delete("auth/user");
  };
}

const authService = new AuthService();

export default authService;
