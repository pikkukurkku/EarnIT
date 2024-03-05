// src/services/auth.service.js

import axios from "axios";

class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.SERVER_URL || "http://localhost:5005",
    });

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  login = (requestBody) => {
    return this.api.post("/auth/login", requestBody);
  };

  signup = (requestBody, quizInputId) => {
    return this.api.post("/auth/signup/" + quizInputId, requestBody);
  };

  verify = () => {
    return this.api.get("/auth/verify");
  };
}

const authService = new AuthService();

export default authService;
