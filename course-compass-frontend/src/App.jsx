import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import CourseCard from "./components/CourseCard";
import "./App.css";

function App() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");


  useEffect(() => {
    fetchCourses();
  }, [search, language, price, rating]);


  const fetchCourses = async () => {
    let url = `http://localhost:5000/api/courses?`;

    if (search) url += `query=${search}&`;
    if (language) url += `language=${language}&`;
    if (price) url += `price=${price}&`;
    if (rating) url += `rating=${rating}&`;
    

    const res = await fetch(url);
    const data = await res.json();
    setCourses(data);
  };

  return (
    <div className="container">
      <h1>📍 Course Compass</h1>

      <SearchBar setSearch={setSearch} />

      <Filters
        setLanguage={setLanguage}
        setPrice={setPrice}
        setRating={setRating}
      />

      <div className="course-list">
        {courses.length === 0 ? (
          <p>No courses found.</p>
        ) : (
          courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
