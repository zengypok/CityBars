/*
 * File: app/store/BusinessStore.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('CityBars.store.BusinessStore', {
    extend: 'Ext.data.Store',

    requires: [
        'CityBars.model.Business'
    ],

    config: {
        model: 'CityBars.model.Business',
        storeId: 'BusinessStore',
        proxy: {
            type: 'jsonp',
            reader: {
                type: 'json',
                rootProperty: 'businesses'
            }
        }
    }
});