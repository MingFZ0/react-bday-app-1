function ListComponent({ data, currentYear, setMonthValue, setBdays }) {
  if(setMonthValue) {
    return (
      <>
        {data
          .filter((person) => {
            return person.month === setMonthValue;
          })
          .map((person, index, array) => {
            setBdays(array.length);
            return (
              <>
              <h3>{person.name}</h3>
              <div>{currentYear - person.age}</div>
              <button onClick={() => window.open('mailto:' + person.email)}>{person.email}</button>
              </>
            )
          })}
      </>
    );
  }
}

export default ListComponent;
