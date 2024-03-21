import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const Home = () => {
  return <h1>Home Page</h1>;
}

const About = () => {
  return <h1>About page</h1>;
}

const Profil = () => {
  return <h1>Profile page</h1>;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="account">
          <Route path="/profil" element = {<Profil/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
