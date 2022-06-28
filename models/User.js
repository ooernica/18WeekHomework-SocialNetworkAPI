const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new Schema({
    handle: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: function (value) {
                return isEmail(value);
            },
        }
    },
    idea: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Idea',
        }
    ],
    followers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
},
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
    });

userSchema.virtual('followerCount').get(function() {
    return this.followers.length;
});

const User = model('User', userSchema);

module.exports = User;