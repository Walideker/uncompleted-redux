import React from 'react'
import { Store } from './store.js';




function App() {

  return (
    <div className="App-header">
      <h1>to do list with redux  </h1>
      <form className=''>
        <input placeholder='enter what to do ' style={{ width: 300, padding: 10, borderRadius: 10, fontSize: 19 }} />
        <button type='submit' style={{ padding: 20, borderRadius: 25, fontSize: 10, marginLeft: 20, cursor: 'pointer' }}>go</button>
      </form>
      <ul className='allTodos'>
        <li className='singleTodos'>
          <span className='todoText'>first todo </span>
          <button style={{ color: 'red', border: 'solid 2px white', borderRadius: 25, backgroundColor: 'black' }}>delete</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
