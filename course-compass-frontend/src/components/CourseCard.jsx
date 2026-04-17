function CourseCard({ course }) {
  return (
    <div className="card">
      <h3>{course.title}</h3>
      <p><b>Category:</b> {course.category}</p>
      <p><b>Platform:</b> {course.platform}</p>
      <p><b>Language:</b> {course.language}</p>
      <p className="rating">⭐ {course.rating}</p>
      <p><b>Price:</b> {course.price}</p>

      <a
        href={course.link}
        target="_blank"
        rel="noopener noreferrer"
        className="open-btn"
      >
        Open Course →
      </a>
    </div>
  );
}

export default CourseCard;
