import { app } from '../firebase-config';
import { usersAPI } from './user';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const authenticator = getAuth(app);
const auth = {
  authenticate: async (email, password) => {
    let res = await signInWithEmailAndPassword(authenticator, email, password);
    sessionStorage.setItem('AuthToken', res._tokenResponse.refreshToken);
    const user = await usersAPI.get(res.user.uid);
    sessionStorage.setItem(
      'User',
      JSON.stringify({
        ...user,
        id: res.user.uid,
      })
    );
  },
  signup: async (name, email, password) => {
    const createAndGetUser = async (email, password) => {
      return await createUserWithEmailAndPassword(
        authenticator,
        email,
        password
      );
    };
    createAndGetUser(email, password)
      .then(async (res) => {
        console.log(`res: ${JSON.stringify(res)}`);
        await usersAPI.add(name, email, res.user.uid);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  logout: () => {
    sessionStorage.removeItem('AuthToken');
    sessionStorage.removeItem('User');
  },
  getUser: () => {
    const user = JSON.parse(sessionStorage.getItem('User'));
    return user;
  },
};

export default auth;
