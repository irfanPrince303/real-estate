import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Banner from './components/Banner';
import Header from './components/Header';
import Footer from './components/Footer';
import New from './components/new/New'
import PropertyDetails from './Pages/PropertyDetail/PropertyDetails';
import RegistrationForm from './components/Registration';
import LoginPage from './components/Login';
import Admin from './Pages/Admin';
 
 
 

function App() {
  return (
    <Router>
      <div className='max-w-[1420px] mx-auto bg-white'>
        <Header />
        <Routes>
             
          <Route path='/' element={<LoginPage/>}></Route>
          <Route path='/Registration' element={<RegistrationForm/>}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/Banner" element={<Banner />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path='/new' element={<New/>}/>
          {/* Add more routes here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
