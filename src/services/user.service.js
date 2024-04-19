import userDao from "../models/persistense/user.dao";

const getUser = (userId) => {
    userDao.get(userId);
}
const updateUser = (userId) => {
    userDao.update(userId);
}
const addUser = (details) => {
    return userDao.insert(details);
}
const removeUser = (userId) => {
    userDao.remove(userId);
}