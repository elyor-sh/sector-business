import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {Posts} from "./pages/Posts";

function App() {
  return (
    <Routes>
      <Route path='/posts' element={<Posts />} />
      <Route path='*' element={<Navigate to={'/posts'} />} />
    </Routes>
  );
}

export default App;
