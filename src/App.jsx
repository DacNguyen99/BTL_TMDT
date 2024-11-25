import UserList from './components/UserList';
import Login from './components/Login';
import Home from './components/home';
import Header from './components/ui/shared/header';  
import TicketDetails from './components/ticket-details';
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
            <Route path="/ticket-details/:id" element={<TicketDetails />} />
            <Route path="/user-list" element={<UserList />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
