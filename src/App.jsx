import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Home from './components/Pages/Home';
import Settings from './components/Pages/Settings/Settingss';
import NotFound from './components/Pages/404/NotFound';
import Notification from './components/Pages/Notification/Notification';
import Settingss from './components/Pages/Settings/Settingss';
import Logout from './components/Pages/Logout/Logout';

function App() {
  return (
    <div className="App">
        <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/settings' element={<Settings/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/notification' element={<Notification/>} />
        <Route path='/settingss' element={<Settingss/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}



export default App;
