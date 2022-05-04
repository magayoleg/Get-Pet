import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import searchACSaga from '../../redux/sagas/searchACSaga';
import searchACThunk from '../../redux/thunk/searchACThunk';

function Search() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(searchACThunk(input));
  };

  useEffect(() => {
    if (input.length > 0) {
      dispatch(searchACSaga(input));
    }
  }, [input, dispatch]);

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  return (// переделать стиль ?
    <form onSubmit={submitHandler} className="d-flex py-4">
      <input
        onChange={inputHandler}
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={input}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
