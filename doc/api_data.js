define({ "api": [
  {
    "type": "get",
    "url": "/api/items/:id",
    "title": "Retrieves the information of an item",
    "version": "1.0.0",
    "name": "GetOne",
    "group": "Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The item id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/api/items/MLA692633030",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "author",
            "description": "<p>Author data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author.name",
            "description": "<p>Author name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author.lastname",
            "description": "<p>Author lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "item",
            "description": "<p>Item Data</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "item.id",
            "description": "<p>The item-ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "item.title",
            "description": "<p>The item title</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "item.price",
            "description": "<p>The item price data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "item.price.currency",
            "description": "<p>Currency ID in which the monetary amount is specified</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "item.price.amount",
            "description": "<p>The whole part of the price amount</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "item.price.decimals",
            "description": "<p>The decimal part of the price amount</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "picture",
            "description": "<p>Item pictures paths (Array of strings)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "condition",
            "description": "<p>Items condition</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "free_shipping",
            "description": "<p>Free Shipping</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Item location</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sold_quantity",
            "description": "<p>The quantity of units already sold</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Item description</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "category",
            "description": "<p>Category path (Array of strings)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"author\": {\n        \"name\": \"Juan\",\n        \"lastname\": \"Pérez\"\n    },\n    \"item\": {\n        \"id\": \"MLA692633030\",\n        \"title\": \"PC\",\n        \"price\": {\n            \"currency\": \"ARS\",\n            \"amount\": 5999,\n            \"decimals\": 0.99\n        },\n        \"picture\": [\"http://mla...\", \"http://mla-s1-3df...\", \"...\"]\n        \"condition\": \"new\",\n        \"free_shipping\": true,\n        \"sold_quantity\": 500,\n        \"description\": \"Lorem ipsum dolor sit amet, consectetur adipisicing elit.\"\n        \"category\": [\"Cocina\", \"Bazar\", \"Cubiertos\", \"Otros\"]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/routes/api.js",
    "groupTitle": "Item"
  },
  {
    "type": "get",
    "url": "/api/items?search=",
    "title": "Returns a collection of items matching a specific query",
    "version": "1.0.0",
    "name": "Search",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>A UTF-8, URL-encoded search query of 500 characters maximum, including operators.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl http://localhost:3001/api/items?search=pc",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "author",
            "description": "<p>Author data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author.name",
            "description": "<p>Author name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author.lastname",
            "description": "<p>Author lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "categories",
            "description": "<p>List of categories found (Array of String)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "items",
            "description": "<p>List of items (Array of objects)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "item",
            "description": "<p>Item Data (example for an object)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "item.id",
            "description": "<p>The item-ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "item.title",
            "description": "<p>The item title</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "item.price",
            "description": "<p>The item price data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "item.price.currency",
            "description": "<p>Currency ID in which the monetary amount is specified</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "item.price.amount",
            "description": "<p>The whole part of the price amount</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "item.price.decimals",
            "description": "<p>The decimal part of the price amount</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Gallery version of the primary picture</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "condition",
            "description": "<p>Items condition</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "free_shipping",
            "description": "<p>Free Shipping</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Item location</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n    \"author\": {\n        \"name\": \"Juan\",\n        \"lastname\": \"Pérez\"\n    },\n    \"categories\": [\" \",\" \",...,\" \"]\n    \"items\": [\n        {\n           \"id\": \"MLA613280730\",\n           \"title\": \"A1 Pc Armada Gamer Amd Apu A4 4000 4gb 1tb\",\n           \"price\": {\n               \"currency\": \"ARS\",\n               \"amount\": 9999,\n               \"decimals\": 0.49\n           },\n           \"picture\":  \"http://mla-s1-p.mlstatic.com/736900-MLA26777587957_022018-I.jpg\",\n           \"condition\": \"used\",\n           \"free_shipping\": true,\n           \"location\": \"Capital Federal\"\n        },\n        {...},\n        {...},\n        {...}\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/routes/api.js",
    "groupTitle": "Search"
  }
] });
