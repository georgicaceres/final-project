const service = {};
const axios = require('axios');
const lodash = require('lodash')

const author = {
    name: "Georgina Melisa",
    lastname: "Cáceres"
}

function transform(item) {
    return {
        id: item.id,
        title: item.title,
        price: {
            currency: item.currency_id,
            amount: Math.floor(item.price),
            decimals: parseFloat((item.price % 1).toFixed(2)) * 100
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        location: item.address ? item.address.state_name : ''
    }
};

// Para ser consultado desde /api/items?q=:query
service.getAllItems = function(input_search) {
    return axios
    .get('https://api.mercadolibre.com/sites/MLA/search?q=' + encodeURIComponent(input_search) + '&limit=4')
    .then(function(res) {
        const categoriesArray = res.data.results.map(item => item.category_id);
        if (!categoriesArray.length) return Promise.all([[], []]);
        const categoryId = lodash.head(lodash(categoriesArray).countBy().entries().maxBy('[1]'));
        return Promise.all([
            res.data.results,
            axios.get('https://api.mercadolibre.com/categories/' + categoryId)
        ])
    })
    .then(function([items, category]) {
        return {
            author,
            categories: category.data.path_from_root.map(category => category.name),
            items: items.map(transform)
        }
    })
}

service.getItem = function(id) {
    return Promise.all([
        axios.get('https://api.mercadolibre.com/items/' + id),
        axios.get('https://api.mercadolibre.com/items/' + id + '/description')
    ])
    .then(function([item, description]) {
        return Promise.all([
            item,
            description,
            axios.get('https://api.mercadolibre.com/categories/' + item.data.category_id)
        ])
    })
    .then(function([item, description, category]) {
        return {
            author,
            item: {
                ...transform(item.data),
                sold_quantity: item.data.sold_quantity,
                description: description.data.plain_text.split('\n'),
                picture: item.data.pictures.map(image => image.secure_url),
                category: category.data.path_from_root.map(category => category.name)
            }
        };
    });
}

module.exports = service;
