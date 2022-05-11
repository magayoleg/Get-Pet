import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { checkAuth } from './redux/actions/userAction';

import PrivateRoute from './components/PrivateRouter/PrivateRouter';
import UserDetail from './components/UserDetail/UserDetail';
import UserEdit from './components/UserEdit/UserEdit';
import Header from './components/Header/Header';
import SignUp from './components/Forms/SignUp/SignUp';
import SignIn from './components/Forms/SignIn/SignIn';
import AddAdvertisement from './components/Forms/AddAdvertisement/AddAdvertisement';
import Footer from './components/Footer/Footer';
import { ModalFeedback } from './components/ModalFeedback/ModalFeedback';

import Main from './pages/Main/Main';
import Advertisements from './pages/Advertisements/Advertisements';
import { AboutHelpAdoption } from './pages/AboutHelpAdoption/AboutHelpAdoption';
import { AllPetsCare } from './pages/AllPetsCare/AllPetsCare';
import { CatCare } from './pages/CatCare/CatCare';
import { DogCare } from './pages/DogCare/DogCare';
import { HelpingPets } from './pages/HelpingPets/HelpingPets';
import { Shelters } from './pages/Shelters/Shelters';
import { DogBreeds } from './pages/DogBreeds/DogBreeds';
import { CatBreeds } from './pages/CatBreeds/CatBreeds';
// import { Chat } from './pages/Chat/Chat';
import { UserProfile } from './pages/UserProfile/UserProfile';
import { PetsTips } from './pages/PetsTips/PetsTips';
import { PetsTip } from './pages/PetsTip/PetsTip';
import { DescriptAdvert } from './pages/DescriptAdvert/DescriptAdvert';
import MapPage from './pages/MapPage/MapPage';
import Favourites from './pages/Favourites/Favourites';

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
          {/* <Route path="/chat" element={<Chat />} /> */}
          <Route path="/userprofile/:id" element={<UserProfile />} />
          <Route path="/pets-tips" element={<PetsTips />} />
          <Route path="/pets-tip/:id" element={<PetsTip />} />
          <Route path="/posts/:id" element={<DescriptAdvert />} />
          <Route path="/maps" element={<MapPage />} />
          <Route path="/posts/favourites" element={<Favourites />} />
        </Routes>
      </div>
      <Footer />
      <ModalFeedback />
    </>
  );
}

export default App;
