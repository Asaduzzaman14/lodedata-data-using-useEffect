import React, { useEffect, useState } from 'react';
import './App.css'
import Country from './component/country/Country';

const App = () => {
  return (
    <div>
      <h1>Bd devision</h1>
      <LoadPost></LoadPost>


      <Country name='Chittagong' dist={'khagrachhary'}></Country>
      <Country name={'Chittagong'} dist={'Bandarban'}></Country>
      <Country name={'Chittagong'} dist={'nowakhali'}></Country>
    </div>
  );
};

function LoadPost() {
  const [post, setPost] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])
  return (
    <div>
      <h1>post:</h1>
    </div>
  )
}

export default App;