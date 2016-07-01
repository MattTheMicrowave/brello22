var ListModel = require('../models/ListModel.js');
var ItemModel = require('../models/ItemModel.js');
/**
 * ListController.js
 *
 * @description :: Server-side logic for managing Lists.
 */
module.exports = {

    /**
     * ListController.list()
     */
    list: function(req, res) {
        ListModel.find(function(err, lists){
            if(err) {
                return res.json(500, {
                    message: 'Error getting List.'
                });
            }

            lists.forEach(function(list) {
                var id = list._id;
                ItemModel.find({ list : id }).populate('tags').exec(function(err, items) {
                    list.items = items;
                });
            });
            return res.json(lists);
        });
    },

    /**
     * ListController.show()
     */
    show: function(req, res) {
        var id = req.params.id;
        ListModel.findOne({_id: id}, function(err, list){
            if(err) {
                return res.json(500, {
                    message: 'Error getting List.'
                });
            }
            if(!list) {
                return res.json(404, {
                    message: 'No such List'
                });
            }
            ItemModel.find({ list : id }).populate('tags').exec(function(err, items) {
              list.items = items;
              return res.json(list);
            });
        });
    },

    /**
     * ListController.create()
     */
    create: function(req, res) {
        var List = new ListModel({			name : req.body.name,			items : req.body.items
        });

        List.save(function(err, List){
            if(err) {
                return res.json(500, {
                    message: 'Error saving List',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: List._id
            });
        });
    },

    /**
     * ListController.update()
     */
    update: function(req, res) {
        var id = req.params.id;
        ListModel.findOne({_id: id}, function(err, List){
            if(err) {
                return res.json(500, {
                    message: 'Error saving List',
                    error: err
                });
            }
            if(!List) {
                return res.json(404, {
                    message: 'No such List'
                });
            }

            List.name =  req.body.name ? req.body.name : List.name;			List.items =  req.body.items ? req.body.items : List.items;
            List.save(function(err, List){
                if(err) {
                    return res.json(500, {
                        message: 'Error getting List.'
                    });
                }
                if(!List) {
                    return res.json(404, {
                        message: 'No such List'
                    });
                }
                return res.json(List);
            });
        });
    },

    /**
     * ListController.remove()
     */
    remove: function(req, res) {
        var id = req.params.id;
        ListModel.findByIdAndRemove(id, function(err, List){
            if(err) {
                return res.json(500, {
                    message: 'Error getting List.'
                });
            }
            return res.json(List);
        });
    }
};
