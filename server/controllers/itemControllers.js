const meliService = require ('../services/meli-service');
const self = {};

// Get items by search
self.getAllItems = function(req, res, next) {
    meliService.getAllItems(req.query.search)
    .then(function(items) {
        res.json(items);
    })
    .catch(function(err) {
        res.status(404).send('Sorry, we cannot find that!');
    })
};

// Get an especific item by id
self.getItem = function(req, res, next) {
    meliService.getItem(req.params.id)
    .then(function(item) {
        res.json(item);
    })
    .catch(function(err) {
        res.status(404).send('Sorry, we cannot find that!');
    })
};

module.exports = self;
