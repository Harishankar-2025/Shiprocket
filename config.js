const {formatDateToYMD} = require('./Helper/helper');

const currentDate   = new Date();
let startDateObj    = new Date(currentDate);
startDateObj.setDate(currentDate.getDate() - 30);
startDateObj        = new Date(startDateObj.getFullYear(), startDateObj.getMonth(), 1);
const startDate     = formatDateToYMD(startDateObj);
const endDate       = formatDateToYMD(new Date());

// define base url:
let base_url        = 'https://apiv2.shiprocket.in';

module.exports = {
    // Database configuration
    mysql: {
        username: "root",
        password: "evanik@2019",
        hostname: "3.6.244.157",
        port: 3306,
        namePrefix: "invento_",
        encoding: "utf8"
    },
    
    // MongoDB configuration
    mongodb: {
        url: "mongodb://43.205.77.189:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.15",
        dbName: "evanik_103148",
        collection: "sales_lock_sap_status"
    },

    // Default date : 
    date : {
        startDate : startDate,
        endDate   :  endDate  
    },

    // Api List.
    api : {        
        getauthToken : `${base_url}/v1/external/auth/login`,  
        salesOrders  : `${base_url}/v1/external/orders`,
    }
}; 