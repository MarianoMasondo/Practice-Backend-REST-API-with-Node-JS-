import users from "../data/users.data";


const get = (userId) => {
    const findUser = users.find((user) => {
        if(users.id == userId) {
            return user;
        }
        return null;
    });
    return findUser;
}

const update = (userId) => {
    const newUser = { ...details, id: users.length+1 };
    users.push(newUser);
    
    return true;
}

const insert = (details) => {
    const newUser = { ...details, id: users.length+1 };
    users.push(newUser);

    return newUser;
}

const remove = (userId) => {
    const deleteUser = (user, index) => {
        if(user.id === userId){
            //remove the array element of the found user
            users.splice(index, 1);
            return true;
        }
        return false;
    }
    return users.find(deleteUser);    
}

export default {
    get,
    update,
    insert,
    remove,
}