const { REACT_APP_HOST: host } = process.env;

export const signUp = () => `${host}/auth/signup`;
export const signIn = () => `${host}/auth/signin`;
export const signOut = () => `${host}/auth/signout`;
export const checkAuth = () => `${host}/auth/check`;

export const getAllUsers = () => `${host}/users`;
export const editUser = (id) => `${host}/users/${id}`;
export const getUser = (id) => `${host}/users/${id}`;

export const addAdvert = () => `${host}/posts`;

export const getAllSpeciesPets = (animal) => `${host}/posts/?species=${animal}`;
export const getImagePet = (img) => `${host}${img}`;
export const getAllPets = () => `${host}/posts/`;

export const getOneAdvert = (id) => `${host}/posts/${id}`;

