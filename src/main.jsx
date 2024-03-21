import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BrowserRouter from 'react-router-dom';

const Home = () => {
  return <h1>Routing</h1>;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
