const axios   = require('axios');
const config  = require('../config');
const {mysqlConn} = require('../Models/mysql');

// get username and password using channel id.
async function getLoginDetails(userId,channelId){
    let sql =  `select user_name,user_password from invento_${userId}.channels where id='${channelId}'`;
    try{
        const userResult = await new Promise((resolve, reject) => {
            mysqlConn.query(sql, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
        if(userResult && userResult.length){
            return {
                status : 200,
                userName : userResult[0]['user_name'],
                password : userResult[0]['user_password'],
            }
        }else{
            return {
                status : 500,
                userName : '',
                password : '',
            }
        }
    }catch(error){
        return {
            status  : 500,
            error   : 'Internal server error',
            message : error.message,
            stack   : process.env.NODE_ENV === 'production' ? undefined : error.stack,
            errorDetails : error
        };
    }
}

// get token.
async function getauthToken(email, password){
    let authUrl = config.api.getauthToken;
    let body    = {
        "email"     : email,
        "password"  : password
    };
    try{
        let response = await axios.post(authUrl,body,{
            'Content-Type' : 'application/json'
        });
        if(response && response.status == 200){
            let responseData = response.data;
            return  {
                status : 200,
                authData : {
                    companyId   : responseData.company_id,
                    created_at  : responseData.created_at,
                    email       : responseData.email,
                    token       : responseData.token
                }
            }
        }else{
            return {
                status  : response.status,
                error   : 'Authentication failed',
                message : error.message,
                // stack   : process.env.NODE_ENV === 'production' ? undefined : error.stack,
                // errorDetails : error
            };
        }
    }catch(error){
        return {
            status  : error.status,
            code    : error.code,
            error   : 'Internal server error',
            message : error.message,
            // stack   : process.env.NODE_ENV === 'production' ? undefined : error.stack,
            // errorDetails : error
        };
    }        
}

module.exports = {
    getauthToken, getLoginDetails
}