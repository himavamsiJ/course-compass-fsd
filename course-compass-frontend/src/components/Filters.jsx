function Filters({ setLanguage, setPrice, setRating }) {
  return (
    <div className="filters">
      {/* Language */}
      <select onChange={(e) => setLanguage(e.target.value)}>
        <option value="">All Languages</option>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Telugu">Telugu</option>
      </select>

      {/* Price */}
      <select onChange={(e) => setPrice(e.target.value)}>
        <option value="">All</option>
        <option value="Free">Free</option>
        <option value="Paid">Paid</option>
      </select>

      {/* Rating */}
      <select onChange={(e) => setRating(e.target.value)}>
        <option value="">All Ratings</option>
        <option value="4.5">4.5+</option>
        <option value="4.7">4.7+</option>
        <option value="4.9">4.9+</option>
      </select>
    </div>
  );
}

export default Filters;
