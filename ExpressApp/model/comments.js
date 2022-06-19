const mongoose=require('mongoose');

const commentSchma=new mongoose.Schema({

    content: {
        type: String,
        required: true
    },
    user: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User'

    },
    post: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Post'

    }
},{
    timestamps: true
});

const comment = mongoose.model('comment', commentSchma);
module.exports = comment;