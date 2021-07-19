const { body, validationResult } = require('express-validator')
const User = require('../models/User')
const expressValidator = require('express-validator')
const passport = require('passport')

const signup = (
    body('email').isEmail,
    body('password').isLength({ min: 5 }),
    body('passwordConfirmation').custom((value, { req }) => {
        if (value !== req.body.password) {
        throw new Error('Password confirmation does not match password');
        }

        // Indicates the success of this synchronous custom validator
        return true;
    }),
    body('email').custom(value => {
        return User.findUserByEmail(value).then(user => {
        if (user) {
            return Promise.reject('E-mail already in use');
        }
        });
    }),
    async (req, res) => {
        const {email, password, confirmPassword} = req.body
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            res.render('register', { errors, email, password});
        } else {
            res.send('lololol');
        }
    }
)

module.exports = signup