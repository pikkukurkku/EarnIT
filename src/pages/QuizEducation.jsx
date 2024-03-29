import { useState, useEffect } from "react";
import styles from "./QuizEducation.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

// const API_URL = "http://localhost:5005";
const API_URL = "https://earnit-server.onrender.com"

function QuizEducation(props) {
  const navigate = useNavigate();
  const { quizinputId } = useParams();

  const [degree, setDegree] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [courses, setCourses] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [softSkills, setSoftSkills] = useState([]);
  const [hardSkills, setHardSkills] = useState([]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


    const handleDegreeChange = (e) => {
      const selectedDegree = e.target.value;
      setDegree(selectedDegree);
    };
  
  const handleSubjectChange = (e) => {
    const selectedSubject = e.target.value;
    if (subjects.includes(selectedSubject)) {
      setSubjects(subjects.filter((subject) => subject !== selectedSubject));
    } else {
      setSubjects([...subjects, selectedSubject]);
    }
  };
  const handleCoursesChange = (e) => {
    const selectedCourse = e.target.value;
    if (courses.includes(selectedCourse)) {
      setCourses(courses.filter((course) => course !== selectedCourse));
    } else {
      setCourses([...courses, selectedCourse]);
    }
  };
  const handleLanguagesChange = (e) => {
    const selectedLanguage = e.target.value;
    if (languages.includes(selectedLanguage)) {
      setLanguages(
        languages.filter((language) => language !== selectedLanguage)
      );
    } else {
      setLanguages([...languages, selectedLanguage]);
    }
  };
  const handleSoftSkillsChange = (e) => {
    const selectedSoftSkill = e.target.value;
    if (softSkills.includes(selectedSoftSkill)) {
      setSoftSkills(softSkills.filter((skill) => skill !== selectedSoftSkill));
    } else {
      setSoftSkills([...softSkills, selectedSoftSkill]);
    }
  };

  const handleHardSkillsChange = (e) => {
    const selectedHardSkill = e.target.value;
    if (hardSkills.includes(selectedHardSkill)) {
      setHardSkills(hardSkills.filter((skill) => skill !== selectedHardSkill));
    } else {
      setHardSkills([...hardSkills, selectedHardSkill]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handling submit...");
    const updatedData = {
      degree,
      subjects,
      courses,
      languages,
      softSkills,
      hardSkills,
    };

    axios
      .put(`${API_URL}/api/quizinput/${quizinputId}/quiz4`, updatedData)
      .then((response) => {
        console.log("Response from backend =>", response.data);
        navigate(`/signup/${quizinputId}`)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };


  return (
    <div className={styles["quiz-desires"]}>
      <Link to="/">
        <button className={styles["back-button"]}>Back to Homepage</button>
      </Link>

      <div className={styles["main-content"]}>
        <div className={styles["content"]}>
          <h1 className={styles["header"]}>Education</h1>

          <form onSubmit={handleSubmit} className={styles["goals"]}>
            <label className={styles["label-education"]}>What is the highest degree you have?</label>
            <select onChange={handleDegreeChange} name="country" id="country">
            <option value="none"></option>
              <option value="master">Master's Degree</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="doctorate">Doctorate</option>
            </select>
            <label className={styles["label-education"]}>
              Which subjects have you studied? (You can choose several options)
            </label>
            <div className={styles["answer-pillars"]}>
              <input
                type="text"
                id="subject1"
                name="subject1"
                value="Engineering"
                readOnly
                onClick={handleSubjectChange}
                className={styles["answer"]}
                style={{
                  backgroundColor: subjects.includes("Engineering")
                    ? "#023047"
                    : "white",
                  color: subjects.includes("Engineering") ? "white" : "#023047",
                }}
              />
              <input
                type="text"
                id="subject2"
                name="subject2"
                value="Computer Science"
                readOnly
                onClick={handleSubjectChange}
                className={styles["answer"]}
                style={{
                  backgroundColor: subjects.includes("Computer Science")
                    ? "#023047"
                    : "white",
                  color: subjects.includes("Computer Science")
                    ? "white"
                    : "#023047",
                }}
              />
              <input
                type="text"
                id="subject3"
                name="subject3"
                value="Data Analytics"
                readOnly
                onClick={handleSubjectChange}
                className={styles["answer"]}
                style={{
                  backgroundColor: subjects.includes("Data Analytics")
                    ? "#023047"
                    : "white",
                  color: subjects.includes("Data Analytics")
                    ? "white"
                    : "#023047",
                }}
              />
            </div>
            <div
  id="addMore"
  className={styles["addMore"]}
  style={{ backgroundColor: "#8ECAE6" }}
>
  Add more
</div>
      
            <label className={styles["label-education"]}>Which courses have you completed?</label>
            <div className={styles["answer-pillars"]}>
              <input
                type="text"
                id="course1"
                name="course1"
                value="Data Analytics Bootcamp"
                readOnly
                onClick={handleCoursesChange}
                className={styles["answer"]}
                style={{
                  backgroundColor: courses.includes("Data Analytics Bootcamp")
                    ? "#023047"
                    : "white",
                  color: courses.includes("Data Analytics Bootcamp")
                    ? "white"
                    : "#023047",
                }}
              />
              <input
                type="text"
                id="course2"
                name="course2"
                value="IELSTS"
                readOnly
                onClick={handleCoursesChange}
                className={styles["answer"]}
                style={{
                  backgroundColor: courses.includes("IELSTS")
                    ? "#023047"
                    : "white",
                  color: courses.includes("IELSTS") ? "white" : "#023047",
                }}
              />
            </div>
            <div
  id="addMore"
  className={styles["addMore"]}
  style={{ backgroundColor: "#8ECAE6" }}
>
  Add more
</div>

            <label className={styles["label-education"]}>Which languages do you speak?</label>
            <div className={styles["answer-pillars"]}>
              <input
                type="text"
                id="language1"
                name="language1"
                value="German"
                readOnly
                onClick={handleLanguagesChange}
                className={styles["answer"]}
                style={{
                  backgroundColor: languages.includes("German")
                    ? "#023047"
                    : "white",
                  color: languages.includes("German") ? "white" : "#023047",
                }}
              />
              <input
                type="text"
                id="language2"
                name="language2"
                value="English"
                readOnly
                onClick={handleLanguagesChange}
                className={styles["answer"]}
                style={{
                  backgroundColor: languages.includes("English")
                    ? "#023047"
                    : "white",
                  color: languages.includes("English") ? "white" : "#023047",
                }}
              />
              <input
                type="text"
                id="language3"
                name="language3"
                value="Spanish"
                readOnly
                onClick={handleLanguagesChange}
                className={styles["answer"]}
                style={{
                  backgroundColor: languages.includes("Spanish")
                    ? "#023047"
                    : "white",
                  color: languages.includes("Spanish") ? "white" : "#023047",
                }}
              />
            </div>

            <div
  id="addMore"
  className={styles["addMore"]}
  style={{ backgroundColor: "#8ECAE6" }}
>
  Add more
</div>
          

            <label className={styles["label-education"]}>What are your soft skills?</label>
            <div className={styles["answer-pillars"]}>
              <input
                type="text"
                id="soft1"
                name="soft1"
                value="Teamwork"
                readOnly
                onClick={handleSoftSkillsChange}
                className={styles["answer"]}
                style={{
                  backgroundColor: softSkills.includes("Teamwork")
                    ? "#023047"
                    : "white",
                  color: softSkills.includes("Teamwork") ? "white" : "#023047",
                }}
              />
              <input
                type="text"
                id="soft2"
                name="soft2"
                value="Communication"
                readOnly
                onClick={handleSoftSkillsChange}
                className={styles["answer"]}
                style={{
                  backgroundColor: softSkills.includes("Communication")
                    ? "#023047"
                    : "white",
                  color: softSkills.includes("Communication")
                    ? "white"
                    : "#023047",
                }}
              />
              <input
                type="text"
                id="soft3"
                name="soft3"
                value="Conflict Resolution"
                readOnly
                onClick={handleSoftSkillsChange}
                className={styles["answer"]}
                style={{
                  backgroundColor: softSkills.includes("Conflict Resolution")
                    ? "#023047"
                    : "white",
                  color: softSkills.includes("Conflict Resolution")
                    ? "white"
                    : "#023047",
                }}
              />
            </div>
            <div
  id="addMore"
  className={styles["addMore"]}
  style={{ backgroundColor: "#8ECAE6" }}
>
  Add more
</div>

            <label className={styles["label-education"]}>What are your hard skills?</label>
            <div className={styles["answer-pillars"]}>
              <input
                type="text"
                id="hard1"
                name="hard1"
                value="Python"
                readOnly
                onClick={handleHardSkillsChange}
                className={styles["answer"]}
                style={{
                  backgroundColor: hardSkills.includes("Python")
                    ? "#023047"
                    : "white",
                  color: hardSkills.includes("Python") ? "white" : "#023047",
                }}
              />
              <input
                type="text"
                id="hard2"
                name="hard2"
                value="SQL"
                readOnly
                onClick={handleHardSkillsChange}
                className={styles["answer"]}
                style={{
                  backgroundColor: hardSkills.includes("SQL")
                    ? "#023047"
                    : "white",
                  color: hardSkills.includes("SQL") ? "white" : "#023047",
                }}
              />
              <input
                type="text"
                id="hard3"
                name="hard3"
                value="Agile"
                readOnly
                onClick={handleHardSkillsChange}
                className={styles["answer"]}
                style={{
                  backgroundColor: hardSkills.includes("Agile")
                    ? "#023047"
                    : "white",
                  color: hardSkills.includes("Agile") ? "white" : "#023047",
                }}
              />
              <input
                type="text"
                id="hard4"
                name="hard4"
                value="CRM"
                readOnly
                onClick={handleHardSkillsChange}
                className={styles["answer"]}
                style={{
                  backgroundColor: hardSkills.includes("CRM")
                    ? "#023047"
                    : "white",
                  color: hardSkills.includes("CRM") ? "white" : "#023047",
                }}
              />
            </div>
            <div
  id="addMore"
  className={styles["addMore"]}
  style={{ backgroundColor: "#8ECAE6" }}
>
  Add more
</div>
          </form>
        </div>

        <div className={styles["right-side"]}>
          <img
            src="../picture-people.png"
            alt="people"
            className={styles["picture2"]}
          />
        </div>
      </div>

      <div className={styles["bottom-div"]}>
        <Link to= {`/quiz3/${quizinputId}`} className={styles["link"]}>
          <button className={styles["step"]}>Previous step</button>
        </Link>
          <button onClick={handleSubmit} className={styles["step"]}>
            Next step
          </button>
      </div>
    </div>
  );
}

export default QuizEducation;
