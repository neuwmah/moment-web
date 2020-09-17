const User = require('../models/User')
const mongoose = require('mongoose')

module.exports = {
    async createUser(req, res) {
        const {
            username,
            password,
            email,
            nickname,
            admin
        } = req.body

        try {
            //verify values
            errors = []
            if(username && password && email && nickname){
                await User.findOne({ username }) ? errors.push('Username already exists.') : null
                await User.findOne({ email }) ? errors.push('Email already exists.') : null
                await User.findOne({ nickname }) ? errors.push('Nickname already exists.') : null
            } else {
                errors.push('Insufficient values.')
            }
            if(errors.length > 0) {
                return res.status(400).send({
                    message: 'Error!',
                    data: errors
                })
            }

            //create user
            const createdUser = await User.create({
                username,
                password,
                email,
                nickname,
                admin
            })

            //response
            return res.status(200).send({
                message: 'User created successfully!',
                data: createdUser
            })
        } catch(e) {
            return res.status(400).send(e)
        }
    },

    async deleteUser(req, res) {
        const { user_id } = req.params
        
        try {
            //verify ID type
            if (!mongoose.Types.ObjectId.isValid(user_id)) return res.status(400).send('Invalid ID type.')
            const findUser = await User.findById(user_id)
            
            //verify values
            errors = []
            if(findUser) {
                findUser.admin == 1 ? errors.push('Admin users cannot be deleted.') : null
            } else {
                errors.push('User does not exist.')
            }
            if(errors.length > 0) {
                return res.status(400).send({
                    message: 'Error!',
                    data: errors
                })
            }

            //delete user
            const deletedUser = await User.findByIdAndDelete(user_id)          

            //response
            return res.status(200).send({
                message: 'User deleted successfully!',
                data: deletedUser
            })
        } catch(e) {
            return res.status(400).send(e)
        }
    },

    async editUser(req, res) {
        var {
            user_id,
            username,
            password,
            email,
            nickname,
            admin
        } = req.body

        try{
            //verify ID type
            if (!mongoose.Types.ObjectId.isValid(user_id)) return res.status(400).send('Invalid ID type.')
            const findUser = await User.findById(user_id)

            //verify values
            errors = []
            findUser ? null : errors.push('User does not exist.')

            //autocomplete null values
            username == null ? username = findUser.username : null
            password == null ? password = findUser.password : null
            email == null ? email = findUser.email : null
            nickname == null ? nickname = findUser.nickname : null
            admin == null ? admin = findUser.admin : null

            //edit user
            const editedUser = await User.findByIdAndUpdate(user_id, {
                username,
                password,
                email,
                nickname,
                admin
            }, {
                new: true
            })

            //response
            return res.status(200).send({
                message: 'User updated successfully!',
                data: editedUser
            })
        } catch(e) {
            return res.status(400).send(e)
        }
    },

    async listUsers(req, res) {
        try {
            //find users
            const allUsers = await User.find()

            //response
            return res.status(200).send({
                message: 'All users.',
                data: allUsers
            })
        } catch(e) {
            return res.status(400).send(e)
        }
    }
}