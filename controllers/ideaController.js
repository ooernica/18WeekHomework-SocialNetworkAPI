const { Idea } = require('../models');

module.exports = {
    createIdea: async (req, res) => {
        const { ideaText, postedAt, handle } = req.body;
        try {
            const newIdea = await Idea.create({
                ideaText,
                postedAt,
                handle,                
            });
            res.json(newIdea);
        } catch (e) {
            res.json(e);
        }
    },

    getAllIdeas: async (req, res) => {
        try {
            const ideas = await Idea.find();
            res.json(ideas);
        } catch (e) {
            res.json(e);
        }
    },

    getIdeaById: async (req, res) => {
        const { ideaId } = req.params;
        try {
            const idea = await Idea.findById(ideaId);
            res.json(idea);
        } catch (e) {
            res.json(e);
        }
    },

    updateIdeaById: async (req, res) => {
        const { ideaId } = req.params;
        try {
            const updatedIdea = await Idea.findIdAndUpdate(
                ideaId,
                {...req.body},
                {
                    new: true
                }
            );
            res.json(updatedIdea)
        } catch(e) {
            res.json(e);
        }
    },

    deleteIdeaById: async (req, res) => {
        const { ideaId } = req.params;
        try {
            const deleteIdea = await Idea.findByIdAndDelete(ideaId);
            res.json(deleteIdea);
        } catch (e) {
            res.json(e);
        }
    },

    addRetweetToIdeaById: async (req, res) => {
        const {ideaId} = req.params;
        const { retweetBody, handle } = req.body;
        try {
            const updatedIdea = await Idea.findByIdandUpdate(ideaId,
                {
                    $push: {
                        interaction: {
                            retweetBody,
                            handle
                        }
                    },
                },
                {
                    new:true, 
                }
            );
            res.json(updatedIdea);
        } catch (e) {
            res.json(e);
        }
    },

    deleteInteractiontoIdeaById: async (req, res) => {
        const { ideaId, interactId } = req.params;
        try {
            const updatedIdea = await Idea.findByAndUpdate(ideaId,
                {
                    $pull: {
                        interactions: {
                            interactId,
                        },
                    },
                },
                {
                    new: true,
                }
            );
            res.json(updatedIdea);
        } catch (e) {
            res.json(e);
        }
    },
}