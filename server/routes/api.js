const express = require('express');
const router = express.Router();
const itemControllers = require('../controllers/itemControllers')

/**
    * @api {get} /api/items?search= Returns a collection of items matching a specific query
    * @apiVersion 1.0.0
    * @apiName Search
    * @apiGroup Search
    *
    * @apiParam {String} query A UTF-8, URL-encoded search query of 500 characters maximum, including operators.
    *
    * @apiExample {js} Example usage:
    * curl http://localhost:3001/api/items?search=pc
    *
    * @apiSuccess {Object}   author                 Author data
    * @apiSuccess {String}   author.name            Author name
    * @apiSuccess {String}   author.lastname        Author lastname
    * @apiSuccess {String[]} categories             List of categories found (Array of String)
    * @apiSuccess {Object[]} items                  List of items (Array of objects)
    * @apiSuccess {Object}   item                   Item Data (example for an object)
    * @apiSuccess {Number}   item.id                The item-ID
    * @apiSuccess {String}   item.title             The item title
    * @apiSuccess {Object}   item.price             The item price data
    * @apiSuccess {String}   item.price.currency    Currency ID in which the monetary amount is specified
    * @apiSuccess {Number}   item.price.amount      The whole part of the price amount
    * @apiSuccess {Number}   item.price.decimals    The decimal part of the price amount
    * @apiSuccess {String}   picture                Gallery version of the primary picture
    * @apiSuccess {String}   condition              Items condition
    * @apiSuccess {Boolean}  free_shipping          Free Shipping
    * @apiSuccess {String}   location               Item location
    *
    * @apiSuccessExample {json} Success response:
    *   HTTPS 200 OK
    *   {
    *       "author": {
    *           "name": "Juan",
    *           "lastname": "Pérez"
    *       },
    *       "categories": [" "," ",...," "]
    *       "items": [
    *           {
    *              "id": "MLA613280730",
    *              "title": "A1 Pc Armada Gamer Amd Apu A4 4000 4gb 1tb",
    *              "price": {
    *                  "currency": "ARS",
    *                  "amount": 9999,
    *                  "decimals": 0.49
    *              },
    *              "picture":  "http://mla-s1-p.mlstatic.com/736900-MLA26777587957_022018-I.jpg",
    *              "condition": "used",
    *              "free_shipping": true,
    *              "location": "Capital Federal"
    *           },
    *           {...},
    *           {...},
    *           {...}
    *       ]
    *   }
    *
*/
router.get('/items', itemControllers.getAllItems);

/**
    * @api {get} /api/items/:id Retrieves the information of an item
    * @apiVersion 1.0.0
    * @apiName GetOne
    * @apiGroup Item
    *
    * @apiParam {String} id The item id
    *
    * @apiExample {js} Example usage:
    * curl -i http://localhost:3001/api/items/MLA692633030
    *
    * @apiSuccess {Object}   author                 Author data
    * @apiSuccess {String}   author.name            Author name
    * @apiSuccess {String}   author.lastname        Author lastname
    * @apiSuccess {Object}   item                   Item Data
    * @apiSuccess {Number}   item.id                The item-ID
    * @apiSuccess {String}   item.title             The item title
    * @apiSuccess {Object}   item.price             The item price data
    * @apiSuccess {String}   item.price.currency    Currency ID in which the monetary amount is specified
    * @apiSuccess {Number}   item.price.amount      The whole part of the price amount
    * @apiSuccess {Number}   item.price.decimals    The decimal part of the price amount
    * @apiSuccess {Array}    picture                Item pictures paths (Array of strings)
    * @apiSuccess {String}   condition              Items condition
    * @apiSuccess {Boolean}  free_shipping          Free Shipping
    * @apiSuccess {String}   location               Item location
    * @apiSuccess {Number}   sold_quantity          The quantity of units already sold
    * @apiSuccess {String}   description            Item description
    * @apiSuccess {Array}   category                Category path (Array of strings)
    *
    * @apiSuccessExample {json} Success response:
    *   HTTPS 200 OK
    *   {
    *       "author": {
    *           "name": "Juan",
    *           "lastname": "Pérez"
    *       },
    *       "item": {
    *           "id": "MLA692633030",
    *           "title": "PC",
    *           "price": {
    *               "currency": "ARS",
    *               "amount": 5999,
    *               "decimals": 0.99
    *           },
    *           "picture": ["http://mla...", "http://mla-s1-3df...", "..."]
    *           "condition": "new",
    *           "free_shipping": true,
    *           "sold_quantity": 500,
    *           "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    *           "category": ["Cocina", "Bazar", "Cubiertos", "Otros"]
    *       }
    *   }
    *
*/
router.get('/items/:id', itemControllers.getItem);

module.exports = router;
