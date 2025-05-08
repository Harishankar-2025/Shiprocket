const config = require('../config');
const axios  = require('axios');
const {mysqlConn}  = require('../Models/mysql');
const {getauthToken, getLoginDetails }     = require('./authentication');

class salesOrders {
    constructor(userid, channelId) {
        this.userid     = userid;
        this.channelId  = channelId;
    }

    // get sales orders.
    async getSalesOrders(startDate,endDate){
        let loginResult = await getLoginDetails(this.userid,this.channelId);
        if(loginResult.status == 200){
            let tokenResult = await getauthToken(loginResult.userName, loginResult.password);
            if(tokenResult.status == 200){
                let token           = tokenResult.authData.token;
                let orderApi        = config.api.salesOrders;
                try {
                    const salePayload = {
                        method: 'get',
                        maxBodyLength: Infinity,
                        url: orderApi,
                        headers: { 
                            'Content-Type': 'application/json', 
                            'Authorization': `Bearer ${token}`
                        }
                    };            
                    const saleResponse = await axios.request(salePayload);            
                    if (saleResponse.status === 200) {
                        return {
                            status : 200,
                            data   : saleResponse.data.data,
                            records: saleResponse.data.meta,
                            nextlinks : saleResponse.data.meta.pagination.links
                        };
                    } else {
                        return {
                            status: saleResponse.data.status_code || saleResponse.status,
                            error: saleResponse.data.message || 'Unknown error'
                        };
                    }
                } catch (error) {
                    return {
                        status: error.response?.status || 500,
                        error: error.response?.data?.message || error.message || 'Request failed'
                    };
                }
            }else{
                return tokenResult;
            }            
        }else{
            return loginResult;
        }
    }
}

async function main(){
    let salesObj    = new salesOrders('103246', '4');
    let saleOrders = await salesObj.getSalesOrders('2024-04-01', '2024-04-30');
    console.log(saleOrders)
}
main();

module.exports = salesOrders;


// scp -r -i "C:/Users/hp/Desktop/Server Auth File/evanik_india.pem" /C:/Users/hp/Desktop/Nodejs_projects/shiprocket ubuntu@13.203.96.98:/home/ubuntu/


// scp -r -i "C:/Users/hp/Desktop/Server Auth File/evanik_india.pem" "/C:/Users/hp/Desktop/shiprocket" ubuntu@13.203.96.98:/home/ubuntu/
