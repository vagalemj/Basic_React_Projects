import React, { useState } from 'react';

export default function App() {
  //let name = '';
  const [name, setName] = useState('Madhu');
  const handleclick = () => {
    //name = 'Madhu';
    //alert(name);
    setName('Madhu');
  }
  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={handleclick}>Click me</button>
    </div>
  )
}