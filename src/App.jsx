import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRouter/PrivateRouter';
import UserList from './components/UserList/UserList';
import UserDetail from './components/UserDetail/UserDetail';
import UserEdit from './components/UserEdit/UserEdit';
import Header from './components/Header/Header';
import SignUp from './components/Forms/SignUp/SignUp';
import SignIn from './components/Forms/SignIn/SignIn';
import { checkAuth } from './redux/actions/userAction';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.sass';
import AddAdvertisement from './components/Forms/AddAdvertisement/AddAdvertisement';
import Advertisements from './pages/Advertisements/Advertisements';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <>
      <Header />
      <div className="container py-5">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/users/:id" element={<PrivateRoute><UserDetail /></PrivateRoute>} />
          <Route path="/user/edit" element={<PrivateRoute><UserEdit /></PrivateRoute>} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path='/addAdvert' element={<AddAdvertisement />} />
          <Route path='/advertisements' element={<Advertisements />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
