import UserList from './components/UserList';
import Login from './components/Login';
import Home from './components/home';
import Header from './components/ui/shared/header';  
import PayPalButton from './components/payment';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className='relative h-full w-full min-h-[100dvh]'>
      <Router>
        <Header />
        <div className='relative w-full'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user-list" element={<UserList />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <PayPalButton total={100000}/>
      </Router>
    </div>
  );
};

export default App;


