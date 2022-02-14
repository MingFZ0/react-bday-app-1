import React, { useState } from 'react';
import './App.css';
import data from './data';
import ListComponent from './components/ListComponent'
import MonthDropDown from './components/MonthDropDown'


function App() {
  const currentMonth = new Date();
  const currentYear = currentMonth.toLocaleString('default', { year: 'numeric' });
  const [bdays, setBdays] = useState(0);
  const [month, setMonth] = useState(currentMonth.toLocaleString('default', { month: 'long' }));

  return (
    <main className="App">
      <section>
        <h1>Birthday calendar app</h1>
        <MonthDropDown setMonth={setMonth} setMonthValue={month} setBdays={setBdays} />
        <h3>There are {bdays} birthday the month of {month}</h3>
        <ListComponent data={data} currentYear={currentYear} setMonthValue={month} setBdays={setBdays} />
      </section>
    </main>
  );
}

export default App;
