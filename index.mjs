export const handler = async (event) => {
    // console.log
    console.log('Full Event: ', JSON.stringify(event));

    // handle both AWS Console test and Function URL (Postman)
    let body;
    if (event.body) {
        // called via Function URL / Postman — body is a JSON string
        body = JSON.parse(event.body);
    } else {
        // called via AWS Console test — event is already an object
        body = event;
    };

    const name = body.name;
    console.log(`Hello ${name} from Lambda!`);

    // return response
    const response = {
        statusCode: 200,
        body: JSON.stringify(`Hello ${name} from Lambda!`),
    };
    return response;
};
