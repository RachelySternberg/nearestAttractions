import "./CategoriesDropdown.scss";
export default function CategoriesDropdown(props) {
  const selectedCategory = (e) => {
    props.selectedCategory(e.target.value);
  };
  return (
    <div className="select-container">
      <h2 className="select-title">בחר בסוג האטרקציה המועדפת עליך:</h2>
      <div className="select">
        <select className="select-box" onChange={selectedCategory}>
          {props.categories.map((option) => (
            <option className="select-option" key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
