var ApiException = require('../../libs/core/ApiException');
var api_errors = require('../../assets/api_errors');
var magentoObj = require('../../assets/magentoobj');
var util = require('util');
var magento = magentoObj.magento;

/**
 * Defines a Magento login class
 * @constructor
 */
function Product() {

}

// Inherits from Object
util.inherits(Product, Object);

/**
 * MagentoLogin class.
 * @type {MagentoLogin}
 */
module.exports = Product;

Product.addProduct = function(store_id, cart_id, products, callback) {
  //console.log("products are     ",products);
  magento.checkoutCartProduct.add({
    quoteId: cart_id,
    products: products,
    storeView: store_id,
  }, callback);
};

Product.removeCartProduct = function(store_id, cart_id, products, callback) {
  magento.checkoutCartProduct.remove({
    quoteId: cart_id,
    productsData: products,
    storeView: store_id,
  }, callback);
};


Product.updateCartProduct = function(store_id, cart_id, products, callback) {
  magento.checkoutCartProduct.update({
    quoteId: cart_id,
    productsData: products,
    storeView: store_id,
  }, callback);
};

Product.addCommentProduct = function(order_id, order_status, comment_text, callback) {
  magento.salesOrder.addComment({
    orderIncrementId: order_id,
    status: order_status,
    comment: comment_text,
    notify: null,
  }, callback);
};
