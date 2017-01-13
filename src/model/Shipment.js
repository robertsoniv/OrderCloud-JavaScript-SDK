/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ShipmentItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ShipmentItem'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Shipment = factory(root.OrderCloud.ApiClient, root.OrderCloud.ShipmentItem);
  }
}(this, function(ApiClient, ShipmentItem) {
  'use strict';




  /**
   * The Shipment model module.
   * @module model/Shipment
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Shipment</code>.
   * @alias module:model/Shipment
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Shipment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Shipment} obj Optional instance to populate.
   * @return {module:model/Shipment} The populated <code>Shipment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Shipper')) {
        obj['Shipper'] = ApiClient.convertToType(data['Shipper'], 'String');
      }
      if (data.hasOwnProperty('DateShipped')) {
        obj['DateShipped'] = ApiClient.convertToType(data['DateShipped'], 'String');
      }
      if (data.hasOwnProperty('DateDelivered')) {
        obj['DateDelivered'] = ApiClient.convertToType(data['DateDelivered'], 'String');
      }
      if (data.hasOwnProperty('TrackingNumber')) {
        obj['TrackingNumber'] = ApiClient.convertToType(data['TrackingNumber'], 'String');
      }
      if (data.hasOwnProperty('Cost')) {
        obj['Cost'] = ApiClient.convertToType(data['Cost'], 'Number');
      }
      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [ShipmentItem]);
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Shipper
   */
  exports.prototype['Shipper'] = undefined;
  /**
   * @member {String} DateShipped
   */
  exports.prototype['DateShipped'] = undefined;
  /**
   * @member {String} DateDelivered
   */
  exports.prototype['DateDelivered'] = undefined;
  /**
   * @member {String} TrackingNumber
   */
  exports.prototype['TrackingNumber'] = undefined;
  /**
   * @member {Number} Cost
   */
  exports.prototype['Cost'] = undefined;
  /**
   * @member {Array.<module:model/ShipmentItem>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));

