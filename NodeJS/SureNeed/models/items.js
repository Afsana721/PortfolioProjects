// attached mongoos object to use its properites
const mongoose = require('mongoose');

/* Create a model of itemScema*/
/* To create mode of itemScema, need mongoose instance where we get the 
    Schema() method, who can create new model of items data or products info.*/

const itemSchema = new mongoose.Schema( {
    name: { type: String, required: true},
    catagories: { type: String, required:true},
    description: { type: String},
    price: { type: Number, required: true}
});

//create a schema model like my one 
const Item = mongoose.model('Item', itemSchema);

//create a model of shopping cart items 
const items = [
    {
        name : 'laptop bags',
        catagories: 'men',
        description: 'Bullcaptain men genuine cow leather business laptop shoulder bag',
        price: 44.90
    },
    {
        name : 'travel bag',
        catagories: 'men',
        description: 'Bullcaptain men genuine cow leather, travel messenger cross body bag',
        price: 34.50
    },
    {
        name : 'business bag',
        catagories: 'both',
        description: 'Bull Captain fashionable Genuine leather men massenger business and travel bag',
        price: 37.50
    },
    {
        name : 'Smartwatch Bluetooth',
        catagories: 'iPhone Samsung',
        description: '2024 Smart Watch Men/Women, Waterproof Smartwatch Bluetooth for iPhone Samsung',
        price: 29.99
    },
    {
        name: 'Mug Vacuum Cup',
        catagories: 'Thermos StainLess',
        description: 'Smart Insulated Mug Stainless Steel Vacuum Cup Thermos Bottle LED Display 500ML',
        price:12.50
    },
    {
        name: 'Women Jewelry',
        catagories: 'Wedding Jewelry sets',
        description: 'Multicolor Necklace and Earrings Bridal Wedding Luxury Jewelry Sets',
        price:15.50
    },
    {
        name: 'Prayer Rug',
        catagories: 'Mat carpet Jainamaz',
        description: '2024 New design Islamic Prayer Rug Musallah Muslim Prayer Mat carpet Jainamaz',
        price:17.90
    },
    {
        name: 'Ladies bag',
        catagories: 'Wedding bag',
        description: 'Luxury Cristal Rhinestone Clutch Evening Hand Bag Pouch/Purse for Wedding',
        price:34.90
    },
    {
        name: 'canvas shoes',
        catagories: 'Women canvas shoes',
        description: 'Women canvas shoes breathable, casual sneakers flat rainbow us size 5 fashion',
        price:14.90
    },
    {
        name: 'Shirt Ladies',
        catagories: 'Ladies Casual Blouse Tops Shirts',
        description: 'Women Print Bow Knot Long Sleeve Shirt Ladies Casual Blouse Tops Shirts Size L',
        price:12.90
    }
]

//export item schema model and array of items data 
module.exports = {
    Item, items  // schem model and arra as an object where it holds two properties. 
}