const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlogSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

}
);

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog