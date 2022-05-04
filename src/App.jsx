import React, { useEffect } from 'react';
import './App.sass';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRouter/PrivateRouter';
import UserDetail from './components/UserDetail/UserDetail';
import UserEdit from './components/UserEdit/UserEdit';
import Header from './components/Header/Header';
import SignUp from './components/Forms/SignUp/SignUp';
import SignIn from './components/Forms/SignIn/SignIn';
import { checkAuth } from './redux/actions/userAction';
import AddAdvertisement from './components/Forms/AddAdvertisement/AddAdvertisement';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import Advertisements from './pages/Advertisements/Advertisements';
import { AboutHelpAdoption } from './pages/AboutHelpAdoption';
import { AllPetCare } from './pages/AllPetCare';
import { CatCare } from './pages/CatCare';
import { DogCare } from './pages/DogCare';
import { HelpingPets } from './pages/HelpingPets';
import { Shelters } from './pages/Shelters';
import { DogBreeds } from './pages/DogBreeds';
import { CatBreeds } from './pages/CatBreeds';
import { Chat } from './pages/Chat';
import { UserProfile } from './pages/UserProfile';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/users/:id"
            element={
              <PrivateRoute>
                <UserDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/edit"
            element={
              <PrivateRoute>
                <UserEdit />
              </PrivateRoute>
            }
          />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/addAdvert" element={<AddAdvertisement />} />
          <Route path="/advertisements" element={<Advertisements />} />
          <Route path="/about-help-adoption" element={<AboutHelpAdoption />} />
          <Route path="/all-pet-care" element={<AllPetCare />} />
          <Route path="/cat-care" element={<CatCare />} />
          <Route path="/dog-care" element={<DogCare />} />
          <Route path="/helping-pets" element={<HelpingPets />} />
          <Route path="/shelters" element={<Shelters />} />
          <Route path="/dog-breeds" element={<DogBreeds />} />
          <Route path="/cat-breeds" element={<CatBreeds />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/userprofile/:id" element={<UserProfile />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
