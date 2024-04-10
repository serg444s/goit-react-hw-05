import css from "./SelectTime.module.css";

const SelectTime = ({ handleChangeTime }) => {
  return (
    <select
      onChange={(e) => handleChangeTime(e.target.value)}
      className={css.select}
    >
      <option value="day">Day</option>
      <option value="week">Week</option>
    </select>
  );
};

export default SelectTime;
