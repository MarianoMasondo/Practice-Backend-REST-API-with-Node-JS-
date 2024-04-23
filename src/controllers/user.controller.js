import { StatusCodes } from "http-status-codes";
import pino from "pino"

const logger = pino();

import userService from "../services/user.service"

const Status = {
    seccess: true,
    failure: false
};

const getAllUsers = (req, res) => {
    const users = userService.getAllUsers();

    if(users.length){
        return res.status(StatusCodes.OK).send(users);
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status: Status.failure,
        message: "No users found",
    })

}

    const getUser = (req, res) => {
        const id = paserInt(req.params.id, 10);
        const user = userService.getUser(id);

        if(user) {
            logger.info(`Retrieviing userid ${id}`);

            return res.status(StatusCodes.OK).send(user)
        }

        return res.status(StatusCodes.NOT_FOUND).send({
            status: Status.failure,
            message: `User ${id} is not found`,
        });
    };

    const addUser = (req, res) => {
        const {body:user} = req;

        const addedUser = userService.addUser(user)

        logger.info("Creating a user");

        return res.status(StatusCodes.CREATED).send({
            status: Status.seccess,
            user: addedUser,
        });
    };

    const updateUser = (req, res) => {
        const {body:user} = req;

        const id = parseInt(req.params.id, 10);

        const updateUser = userService.updateUser(id, user)

        if(updateUser) {
            logger.info(`Updating user ID ${id}`);

            return res.status(StatusCodes.OK).send({
                status: STATUS.success,
                user: updateUser,
            });
        }else{
            return res.status(StatusCodes.NOT_FOUND).send({
                status: STATUS.failure,
                message: `User ${id} is not found.`,
            });
        }
    };

    const removeUser = (req, res) => {
        const {params} = req;

        const id = parseInt(params.id);
        const user = userService.getUser(id);
        if(user){
            userService.removeUser(id);

            logger.info(`Removing user ID ${id}`);

            return res.status(StatusCodes.OK).send({
                status: STATUS.success,
                message: `User ${id} hasn´t been found`,
            });
        }
    }


export default {
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    removeUser
}

