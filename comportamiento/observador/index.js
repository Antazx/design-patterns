class User {};
const user = new User();

const init = () => {
    user.on('login', userLoggedIn);
}

const userLoggedIn = () => {console.log('El usuario ha iniciado sesión');};

init();

const login = () => {
    //...........
    user.trigger('login');
}

login();