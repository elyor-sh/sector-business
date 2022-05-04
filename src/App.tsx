import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {Posts} from "./pages/Posts";
import {Layout} from "./components/Layout";

function App() {
  return (
    <Routes>
        <Route element={<Layout />}>
            <Route path='posts' element={<Posts />} />
        </Route>
      <Route path='*' element={<Navigate to={'/posts'} />} />
    </Routes>
  );
}

export default App;
