const mongoose=require('mongoose');

const PostScema=new mongoose.Schema({

    content:{
        type:String,
        required:true
    },
    user:{
      type: mongoose.Schema.Types.ObjectId,
      //SchemaType.Types.ObjectId,
      ref:'users'
    },
},{
    timeseries:true
})

const Post=mongoose.model('Post',PostScema);

module.exports=Post;