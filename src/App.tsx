import React, { useState } from 'react';
import './App.css';
import Person from './Person';

function App() {
  const [showPerson, setShowPerson] = useState<boolean>(false);
  const [myAgeInput, setMyAgeInput] = useState(0);

  type Countries = {
    nameOfCountry: string;
    people: number;
    continent?: string
  }
  const _myArr: Countries[] = [
    {nameOfCountry: 'Iceland', people: 350, continent: 'Europe'},
    {nameOfCountry: 'Japan', people: 4000}
  ];

  return (
    <div className="App">
      <header className="App-header">
        {_myArr.map(d => <>
        <p>{d.nameOfCountry}</p>
        <p>{d.people}</p>
        <p>{d?.continent}</p>
        </>)}
        {showPerson ?
        <>
          <Person name="Hjalti" benchpress={100} deadlift={200}/>
          <Person name="Jon Pall"  benchpress={140}/>
        </> 
        : null}
        <button onClick={() => 
          !showPerson ? setShowPerson(true) : setShowPerson(false)}
        >
            {!showPerson ? 'Show Persons' : 'Hide Persons'}
        </button>
        <input onChange={(e) => {
          console.log(e);
          console.log(e?.target?.value);
          if(!isNaN(parseInt(e?.target?.value))){
            setMyAgeInput(parseInt(e?.target?.value));
          }
        }
        
        } ></input>
       
      <>My age: {myAgeInput}</>
      </header>
    </div>
  );
}

export default App;
