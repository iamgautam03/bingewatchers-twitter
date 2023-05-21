import { db } from './crud';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export const usersAPI = {
  add: async (name, email, id) => {
    await setDoc(doc(db, 'users', id), {
      name: name,
      email: email,
    });
  },
  get: async (id) => {
    const user = await getDoc(doc(db, 'users', id));
    if (user.exists()) return user.data();
    else throw new Error(`No User Exists with id: ${id}`);
  },
};
