import { useEffect, useState } from "react";

export const useGetUser = (id) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser();
  }, [id]);

  const getUser = async () => {
    try {
      const url = `http://localhost:3000/users/${id}`;
      const r = await fetch(url);
      const user = await r.json();
  
      setLoading(false);
      setUser(user);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return { user, loading, error };
};
