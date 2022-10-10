export const validateEmail = (email) => {
    return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};

export const validatePhone = (phone) => {
    return phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
};

export const validateUserName = (userName) => {
    return userName.match(/^[a-z0-9_\.]+$/);
};

export const validatePassword = (password) => {
    return password.match(/^\w{8,15}$/);
};
