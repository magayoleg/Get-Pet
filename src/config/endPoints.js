const { REACT_APP_HOST: host } = process.env;
const { REACT_APP_SOCET: socet } = process.env;
export const signUp = () => `${host}/auth/signup`;
export const signIn = () => `${host}/auth/signin`;
export const signOut = () => `${host}/auth/signout`;
export const checkAuth = () => `${host}/auth/check`;

export const getAllUsers = () => `${host}/users`;
export const editUser = (id) => `${host}/users/${id}`;
export const getUser = (id) => `${host}/users/${id}`;

export const addAdvert = () => `${host}/posts`;

export const getAllSpeciesPets = (species, city) =>
  `${host}/posts/?species=${species}&city=${city}`;
export const getImagePet = (img) => `${host}${img}`;
export const getAllPets = () => `${host}/posts/`;
export const getAllSpeciesForMap = () => `${host}/posts/species`;
// export const getAllSpeciesPetsCity = ({species, city}) => `${host}/posts/?species=${species}&city=${city}`;

export const getAllFavourites = () => `${host}/posts/favorites`;

export const getAllTips = () => `${host}/tips/`;

export const getOneAdvert = (id) => `${host}/posts/${id}`;

export const ws = () => `${socet}`;
export const chatReceiver = (userId) => `${host}/messages?receiverId=${userId}`;
