const New = require('../models/New')
const User = require('../models/User')
const mongoose = require('mongoose')

module.exports = {
    async createNew(req, res) {
        const { user_id } = req.headers
        const {
            title,
            subtitle,
            content,
            slug,
            spotlightRank,
            spotlightTitle,
            spotlightImage
        } = req.body

        try {
            //verify ID type
            if (!mongoose.Types.ObjectId.isValid(user_id)) return res.status(400).send('Invalid ID type.')

            //author
            var author

            //verify values
            errors = []
            await User.findById(user_id).then(user => {
                author = user.nickname
            }).catch((e) => {
                errors.push('User does not exist.')
                console.log(e)
            })
            await New.findOne({ slug }) ? errors.push('Slug already exists.') : null
            spotlightRank > 0 && (!spotlightTitle || !spotlightImage) ? errors.push('Spotlight insufficient values.') : null
            if(errors.length > 0) {
                return res.status(400).send({
                    message: 'Error!',
                    data: errors
                })
            }

            //create new
            const createdNew = await New.create({
                author,
                title,
                subtitle,
                content,
                slug,
                spotlightRank,
                spotlightTitle,
                spotlightImage
            })

            //response
            return res.status(200).send({
                message: 'New created successfully!',
                data: createdNew
            })
        } catch(e) {
            console.log(e)
            return res.status(400).send(e)
        }
    },

    async deleteNew(req, res) {
        const { new_id } = req.params
        
        try {
            //verify ID type
            if (!mongoose.Types.ObjectId.isValid(new_id)) return res.status(400).send('Invalid ID type.')
            const findNew = await New.findById(new_id)

            //verify values
            errors = []
            findNew ? null : errors.push('New does not exist.')
            if(errors.length > 0) {
                return res.status(400).send({
                    message: 'Error!',
                    data: errors
                })
            }

            //delete new
            const deletedNew = await New.findByIdAndDelete(new_id)          

            //response
            return res.status(200).send({
                message: 'New deleted successfully!',
                data: deletedNew
            })
        } catch(e) {
            return res.status(400).send(e)
        }
    },

    async editNew(req, res) {
        var { 
            new_id,
            title,
            subtitle,
            content,
            slug,
            spotlightRank,
            spotlightTitle,
            spotlightImage
         } = req.body

        try{
            //verify ID type
            if (!mongoose.Types.ObjectId.isValid(new_id)) return res.status(400).send('Invalid ID type.')
            const findNew = await New.findById(new_id)

            //verify values
            errors = []
            findNew ? null : errors.push('New does not exist.')
            if(errors.length > 0) {
                return res.status(400).send({
                    message: 'Error!',
                    data: errors
                })
            }

            //verify null values
            title == null ? title = findNew.title : null
            subtitle == null ? subtitle = findNew.subtitle : null
            content == null ? content = findNew.content : null
            slug == null ? slug = findNew.slug : null
            spotlightRank == null ? spotlightRank = findNew.spotlightRank : null
            
            //verify spotlight null values
            if(spotlightRank > 0){
                spotlightTitle == null ? spotlightTitle = findNew.spotlightTitle : null
                spotlightImage == null ? spotlightImage = findNew.spotlightImage : null
            }
            
            //verify spotlight
            if(spotlightRank > 0 && (!spotlightTitle || !spotlightImage)) return res.status(400).send('Spotlight insufficient values.')

            //edit new
            const editedNew = await New.findByIdAndUpdate(new_id, {
                title,
                subtitle,
                content,
                slug,
                spotlightRank,
                spotlightTitle,
                spotlightImage
            }, {
                new: true
            })

            //response
            return res.status(200).send({
                message: 'New updated successfully!',
                data: editedNew
            })
        } catch(e) {
            console.log(e)
            return res.status(400).send(e)
        }
    },

    async listNews(req, res) {
        try {
            //find news
            const allNews = await New.find() 

            //response
            return res.status(200).send({
                message: 'All news.',
                data: allNews
            })
        } catch(e) {
            return res.status(400).send(e)
        }
    }
}