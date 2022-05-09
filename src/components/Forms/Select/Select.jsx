import "./Select.css";

export function Select({ options = [], onChange, name, label }) {
  return (
    <div className="Select__container">
      <label htmlFor={`${label}-select`} className="Select__label">
        {label}
      </label>
      <select id={`${label}-select`} className="Select__select" name={name} onSelect={onChange}>
        {options.map((o) => {
          return (
            <option key={o.id} value={o.species || o.name}>
              {o.species || o.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
