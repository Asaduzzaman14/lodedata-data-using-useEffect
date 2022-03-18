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
  const [posts, setPost] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])
  return (
    <div>
      <h1>post:{posts.length} </h1>
      {
        posts.map(post => <Post body={post.body} title={post.title} ></Post>)
      }
    </div>
  )
}

function Post(props) {
  return (
    <div style={{ backgroundColor: 'skyBlue', padding: '10px', margin: '20px' }}>
      <h4>Body: {props.body}</h4>
      <p>title: {props.title}</p>
    </div>
  )
}

export default App;