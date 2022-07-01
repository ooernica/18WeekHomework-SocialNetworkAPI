const { Schema, model } = require('mongoose');
const moment = require('moment');

const interactSchema = new Schema({
    interactId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    retweetBody: {
        type: String,
        required: true,
        maxlength: 140,
    },
    handle: {
        type: String,
        required: true,
    },
    postTime: {
        type: Date,
        default: Date.now,
        get: (postedAt) => {
            return moment(postedAt).format('MM/DD/YYYY hh:mm a');
        }
    },
},
    {
        toJSON: {
            getters: true,
        },
        id: false,
    });

const ideaSchema = new Schema({
    ideaText: {
        type: String,
        required: true,
        maxLength: 140,
    },
    postTime: {
        type: Date,
        default: Date.now,
        get: (postedAt) => {
            return moment(postedAt).format('MM/DD/YYYY hh:mm a');
        }
    },
    handle: {
        type: String,
        required: true,
    },
    interactions: [interactSchema],
},
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    });

ideaSchema.virtual('interactCount').get(function () {
    return this.interactions.length;
});

const Idea = model('Idea', ideaSchema);

module.exports = Idea;