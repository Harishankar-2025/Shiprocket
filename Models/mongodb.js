const mongoose = require('mongoose');
const {channelSchema, saleSchema, paymentSchema, productSchema, pinCodeschema,masterSaleStatusSchema }= require('./schema');
let config     = require('../config');

const options = {
    // readPreference   : 'secondary',
    w               :'majority',
    maxPoolSize     : 100,
    socketTimeoutMS : 10*1000
};
const connectToDatabase = async (dbName) => {
    try{
        const connectionResult = await new Promise(async (resolve, reject) => {
            try {
                const connection  = await mongoose.createConnection(`${config.mongodb.url}&dbName=${dbName}`,options);
                connection.set('strictQuery', true);
                connection.on('connected', async() => {
                    if(dbName == 'evanik_main'){
                        let pincodeModel            = connection.models.pinCodes?connection.models.pinCodes:connection.model('pinCodes', new mongoose.Schema(pinCodeschema));
                        let masterSaleStatusModel   = connection.models.master_sale_status?connection.models.master_sale_status:connection.model('master_sale_status', new mongoose.Schema(masterSaleStatusSchema));
                        resolve({connection,pincodeModel,masterSaleStatusModel});
                    }else{
                        let channelModel       = connection.models.channels?connection.models.channels:connection.model('channels', new mongoose.Schema(channelSchema));
                        let productModel       = connection.models.products?connection.models.products:connection.model('products', new mongoose.Schema(productSchema));
                        let paymentModel       = connection.models.payments?connection.models.payments:connection.model('payments', new mongoose.Schema(paymentSchema));
                        let saleModel          = connection.models.sales?connection.models.sales:connection.model('sales', new mongoose.Schema(saleSchema));
                        resolve({connection, channelModel, saleModel,productModel,paymentModel});
                    }
                });
                connection.on('error', err => {
                    console.error('Mongoose connection error: ' + err);
                    reject(err);
                });
                connection.on('disconnected', () => {
                    console.log('Mongoose disconnected');
                });
            } catch (err) {
                console.error('Error in promise:', err);
                reject(err);
            }
        });  
        return (dbName == 'evanik_main') ? {
                connection              : connectionResult.connection,
                pincodeModel            : connectionResult.pincodeModel,           
                masterSaleStatusModel   : connectionResult.masterSaleStatusModel          
            } : {
            connection   : connectionResult.connection,
            channelModel : connectionResult.channelModel,      
            saleModel    : connectionResult.saleModel,
            productModel : connectionResult.productModel,      
            paymentModel : connectionResult.paymentModel
        }      
    }catch(error){
        console.error('MongoDB connection error:', error);
    }    
}

//Mongoose set the method.
mongoose.set("bufferCommands", true);
mongoose.set("autoIndex",false);
mongoose.set("debug",false);
mongoose.set("autoCreate",false);
module.exports = {connectToDatabase}
