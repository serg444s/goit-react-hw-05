import css from "./SelectTime.module.css";

const SelectTime = ({ value, handleChangeTime }) => {
  return (
    <select
      value={value}
      onChange={(e) => handleChangeTime(e.target.value)}
      className={css.select}
    >
      <option value="day">Day</option>
      <option value="week">Week</option>
    </select>
  );
};

export default SelectTime;
