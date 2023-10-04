export const Filter = ({ value, onChange }) => (
  <div>
    <h3>Find contacs by name</h3>
    <input type="text" value={value} onChange={onChange} />
  </div>
);
