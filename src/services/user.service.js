import userDao from "../models/persistense/user.dao";

const getUser = (userId) => {
    userDao.get(userId);
}
const updateUser = (userId, details) => {

    return userDao.update(userId, details);
}
const addUser = (details) => {

    return userDao.insert(details);
}
const removeUser = (userId) => {
    
    userDao.remove(userId);
}

module.exports = {
    getUser,
    updateUser,
    addUser,
    removeUser,
}