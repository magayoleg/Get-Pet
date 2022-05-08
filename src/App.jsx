import React, { useEffect } from 'react';
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
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';

import Advertisements from './pages/Advertisements/Advertisements';
import { AboutHelpAdoption } from './pages/AboutHelpAdoption/AboutHelpAdoption';
import { AllPetsCare } from './pages/AllPetsCare/AllPetsCare';
import { CatCare } from './pages/CatCare/CatCare';
import { DogCare } from './pages/DogCare/DogCare';
import { HelpingPets } from './pages/HelpingPets/HelpingPets';
import { Shelters } from './pages/Shelters/Shelters';
import { DogBreeds } from './pages/DogBreeds/DogBreeds';
import { CatBreeds } from './pages/CatBreeds/CatBreeds';
import { Chat } from './pages/Chat/Chat';
import { UserProfile } from './pages/UserProfile/UserProfile';
import { PetsTips } from './pages/PetsTips/PetsTips';
import DescriptAdvert from './pages/DescriptAdvert/DescriptAdvert';

import './App.sass';

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
          <Route path="/all-pets-care" element={<AllPetsCare />} />
          <Route path="/cat-care" element={<CatCare />} />
          <Route path="/dog-care" element={<DogCare />} />
          <Route path="/helping-pets" element={<HelpingPets />} />
          <Route path="/shelters" element={<Shelters />} />
          <Route path="/dog-breeds" element={<DogBreeds />} />
          <Route path="/cat-breeds" element={<CatBreeds />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/pets-tips" element={<PetsTips />} />
          <Route path="/posts/:id" element={<DescriptAdvert />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
