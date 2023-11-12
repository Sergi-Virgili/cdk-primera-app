
const AWS = require('aws-sdk');


const dynamo = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = process.env.GREETING_TABLE || '';

exports.saveHello = async (event)=> { 
    console.log('saveHello');

    const name = event.queryStringParameters.name;

    const item = {  
        id: name,
        name: name,
        date: Date.now()
    };

      return {
        statusCode: 200,
        body: JSON.stringify(TABLE_NAME),
    };

    // const savedItem = await saveItem(item);
    
    // return {
    //     statusCode: 200,
    //     body: JSON.stringify(savedItem),
    // };
}

async function saveItem(item) {
    console.log('saveItem');

    const params = {
        TableName: TABLE_NAME,
        Item: item
    };

    return await dynamo.put(params).promise().then(() => {
        return item});
}