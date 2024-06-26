import users from "../data/users.data";

const get = (userId) => {
  users.find((user) => {
    if (users.id == userId) {
      return user;
    }
    return null;
  });
  return findUser;
};

const getAll = () => {
  return users;
};

const update = (userId, newDetails) => {
  let existingUser = null;
  let userIndex;

  users.map((user, index) => {
    if (user.id === userId) {
      existingUser = user;
      userIndex = index;
    }
  });
  if (!existingUser) {
    return false;
  }

  const updatedUser = {
    ...existingUser,
    ...newDetails,
  };

  user.splice(userIndex, 1, updatedUser);

  return;
};

const insert = (details) => {
  const newUser = { ...details, id: users.length + 1 };
  users.push(newUser);

  return newUser;
};

const remove = (userId) => {
  const deleteUser = (user, index) => {
    if (user.id === userId) {
      //remove the array element of the found user
      users.splice(index, 1);
      return true;
    }
    return false;
  };
  return users.find(deleteUser);
};

export default {
  get,
  getAll,
  update,
  insert,
  remove,
};
