# api_mongodb_jwt_auth

## Setup
This project needs mongodb running:
```
$ mongod --config /usr/local/etc/mongod.conf
```

You can see db operations happen with:
```
$ mongo
```

And then use all sort of mongo commands while you update the database, such as:
```
show dbs

use ....

db.users.find().pretty()

```

With mongo up and running serve this app with `nodemon app.js` or `npm start dev`.

## Example of usage:

POST at api/users/register with this json format on the body:
```
{
	"username": "Hakuna",
	"password": "123456",
	"confirm_password": "123456",
	"email": "123@software.com",
	"name": "hakuna matata"
}
```

Then, login by POST at api/users/login with a JSON like:
{
	"username": "Hakuna",
	"password": "123456",
}

You should get a response with a token! Keep it!

Finally, access a protected route such as a GET to api/users/profile, using Authorization key in header with value equal to your kept token on last step.


