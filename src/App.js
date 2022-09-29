import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Activities from './components/Activities';
import Navbar from './components/Navbar';
import Questions from './components/Questions';

function App() {

  return (
    <div className='px-5'>
      <Navbar />
      <div>
        <Activities />
        <Questions />
      </div>





      <ToastContainer />
    </div>
  );
}

export default App;
