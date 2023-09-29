# Screening Test

Inside this project, there are two folders:

 ## Backend

Made it with javascript, using express.js to handle api calls, mongoose to handle the ORM modeling, and dotenv to fetch all environment variables.


 ## Client

Here i tried to keep it as simple as possible, avoiding the use of non-native dependencies (such as axios or any other), and made a simple client script that will send a request every 1 minute to the gameserver.


## Using the API

 The API has a single REST endpoint:

 `POST - <serveraddress>/compute`

with the following body:

```json
{
    "uptime": String
}
```
With this request, the application will save it to a mongodb database with the current timestamp, as well as the uptime info.


## Web Display

Also the access to the data is using the following url:
`GET - <serveraddress>/requests?skip=[Number]&limit=[Number]`

If no queryparam were provided, the server will return the first 10 requests stored in the server, and the last line will display
lastIndex: [lastDocumentIndex], in that way you could use pagination to return the requests.

Also good to notice that there is no validation to the skip or limit field, more points for improvement below.

## To be improved

There are some considerations that would be nice to take in about this project:
 1 - There is no input validation, that could break the server, or perhaps expose it to some attack.
 2 - There is no unit tests, since the size of the project is really small, it doesnt really matter now, but if the project had to grow, it would be a must.
 3 - Authentication, also i didnt implement authentication, which could be really handy in order to avoid requests from outside of my application, if someone were malintentioned about it, it could overfill my database with requests, or even DDOS the server.
 
I could also implement a docker-compose image to host the server and the mongodb, in that way i could make a production-ready image regardless of the infrastructure.
