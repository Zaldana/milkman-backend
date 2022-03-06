const express = require('express');
const { UserModel } = require('./controller/userController');
const userRouter = express.Router();

userRouter.post('/create-user', (req, res) => {

    const user = req.body.user;

    const newUser = new UserModel({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
    });

    newUser.save().then((savedUser) => {
        console.log('savedUser: ', savedUser);

        const cleanSavedUser = {
            id: savedUser.id,
            firstName: savedUser.firstName,
            lastName: savedUser.lastName,
            email: savedUser.email,
        }
        res.send(cleanSavedUser);
    });
});

userRouter.post('/sign-in', async (req, res) => {

    const userCredentials = req.body.userCredentials;
    const foundUser = await UserModel.findOne({ email: userCredentials.email, password: userCredentials.password })
    const cleanFoundUser = {
        id: foundUser.id,
        firstName: foundUser.firstName,
        lastName: foundUser.lastName,
        email: foundUser.email,
    }
    res.send(cleanFoundUser);
});

module.exports = userRouter;