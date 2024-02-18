const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlogSchema = new Schema({
    
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    data:{
        type: String,
        required:true
    }
    

}
);

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog