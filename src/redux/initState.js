const initState = {
  user: null,
  loader: false,
};

const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem('redux'));
  return stateFromLS || initState;
};

export default getInitState;
