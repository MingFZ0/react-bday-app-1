let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function MonthDropDown({ setMonth, setBdays }) {
  setBdays(0);
  return (
    <section>
      <label>Select bday month</label>
      <select onChange={(event) => setMonth(event.target.value)}>
        {months.map((monthItem, index) => {
          return (
            <option value={monthItem} key={index}>
              {monthItem}
            </option>
          );
        })}
      </select>
    </section>
  );
}

export default MonthDropDown;
