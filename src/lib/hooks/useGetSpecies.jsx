import { useState } from "react";
import * as endPoints from '../../config/endPoints';

export const useGetSpecies = () => {
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const get = async () => {
    // try {
    //   const url = `http://localhost:3000/users/${id}`;
    //   const r = await fetch(url);
    //   const user = await r.json();
  
    //   setLoading(false);
    //   setUser(user);
    // } catch (err) {
    //   setLoading(false);
    //   setError(err.message);
    // }
  };

  return { species, loading, error };
};
