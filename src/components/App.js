import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header'
import PostForm from './PostForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PostForm />
      </div>
    );
  }
}

export default App;
