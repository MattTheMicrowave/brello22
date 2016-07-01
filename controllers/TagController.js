var TagModel = require('../models/TagModel.js');

/**
 * TagController.js
 *
 * @description :: Server-side logic for managing Tags.
 */
module.exports = {

    /**
     * TagController.list()
     */
    list: function(req, res) {
        TagModel.find(function(err, Tags){
            if(err) {
                return res.json(500, {
                    message: 'Error getting Tag.'
                });
            }
            return res.json(Tags);
        });
    },

    /**
     * TagController.show()
     */
    show: function(req, res) {
        var id = req.params.id;
        TagModel.findOne({_id: id}, function(err, Tag){
            if(err) {
                return res.json(500, {
                    message: 'Error getting Tag.'
                });
            }
            if(!Tag) {
                return res.json(404, {
                    message: 'No such Tag'
                });
            }
            return res.json(Tag);
        });
    },

    /**
     * TagController.create()
     */
    create: function(req, res) {
        var Tag = new TagModel({			label : req.body.label
        });

        Tag.save(function(err, Tag){
            if(err) {
                return res.json(500, {
                    message: 'Error saving Tag',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: Tag._id
            });
        });
    },

    /**
     * TagController.update()
     */
    update: function(req, res) {
        var id = req.params.id;
        TagModel.findOne({_id: id}, function(err, Tag){
            if(err) {
                return res.json(500, {
                    message: 'Error saving Tag',
                    error: err
                });
            }
            if(!Tag) {
                return res.json(404, {
                    message: 'No such Tag'
                });
            }

            Tag.label =  req.body.label ? req.body.label : Tag.label;			
            Tag.save(function(err, Tag){
                if(err) {
                    return res.json(500, {
                        message: 'Error getting Tag.'
                    });
                }
                if(!Tag) {
                    return res.json(404, {
                        message: 'No such Tag'
                    });
                }
                return res.json(Tag);
            });
        });
    },

    /**
     * TagController.remove()
     */
    remove: function(req, res) {
        var id = req.params.id;
        TagModel.findByIdAndRemove(id, function(err, Tag){
            if(err) {
                return res.json(500, {
                    message: 'Error getting Tag.'
                });
            }
            return res.json(Tag);
        });
    }
};