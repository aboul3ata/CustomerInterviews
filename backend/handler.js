'use strict';

module.exports.hello = async (event) => {
  
    if (event.path === '/whoami/' ||event.path === '/whoami'  ){
      return {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'da335',
            input: event,
          },
          null,
          2
        ),
      };
    } else {
      return {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'some other URL',
            input: event,
          },
          null,
          2
        ),
      };
    }



  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
