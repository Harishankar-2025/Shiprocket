//default moduls.
const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');
const session       = require("express-session");
const config        = require('./config');

// Include all files.
const salesController       = require('./Controller/sales');
// const paymentsController = require('./Controller/payments');


//Javascript Page embeding.. 
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// define session
app.use(session({
    secret: "shiprocket_integration@2025-05-08",
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
}));


// get sales Orders.
app.get('/api/shopify/salesOrders', async (req,res) => {
    try{
        let userId     = req.query.userId;
        let channel_id = req.query.chanenl_id;  
        if(userId != ''){
            if(channel_id != ''){
                let startDate   = req.query.startDate != '' ? req.query.startDate : config.date.startDate;
                let endDate     = req.query.endDate != '' ? req.query.endDate : config.date.endDate;
                let salesObj    = new salesController(userId, channel_id);
                await salesObj.getSalesOrders(startDate, endDate);
            }else{
                res.status(500).json({
                    'status' : 500,
                    error    : 'Parameters required',
                    message  : 'Pleased provide channel Id',
                });
            }
        }else{
            res.status(500).json({
                'status' : 500,
                error    : 'Parameters required',
                message  : 'Pleased provide userid',
            });
        }
    }catch(error){

    }
});