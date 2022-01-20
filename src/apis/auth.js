const auth = {
    authenticate : (email, password) => {
        if (email === 'gp@gmail.com' && password === 'qwerty123')
            return true;
        return false;
    },
    signup : (name, email, password) => {
        // as of now allow to create for everyone
        return true;
    }
}

export default auth;