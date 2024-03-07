
import axios from "axios";

class QuizInputService {
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

  createProject = (requestBody) => {
    return this.api.post("/api/quizinput/:quizinputId", requestBody);
  };

  getAllProjects = () => {
    return this.api.get("/api/quizinput/:quizinputId");
  };


  getProject = (id) => {
    return this.api.get(`/api/quizinput/${quizinputId}`);
  };

  updateProject = (id, requestBody) => {
    return this.api.put(`/api//quizinput/${quizinputId}`, requestBody);
  };

  // DELETE /api/projects/:id
  deleteProject = (id) => {
    return this.api.delete(`/api/projects/${id}`);
  };
}

// Create one instance object
const quizInputService = new QuizInputService();

export default quizInputService;
