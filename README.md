## Important Notes
**A)** App is mobile friendly!

**B)** App is working at live at the link below, but since I am currently using the free version of Twilio, so all non-verified numbers will not receive text notifications.

**C)** If you want to run the app locally you can clone the repo then complete a few steps below.

1. Create a `.env` file in the root directory. 
2. Add a `Secret` variable and give it a value of your choosing.  Example) `Secret=123456`.
3. Get an `accountSid` and `auth_token` from Twilio and add it to the `.env` file.  --> https://www.twilio.com/docs/libraries/node

# What is Shoppit
A web based application that makes shopping easier.  Share your shopping list with your friends, family, and roommates to make sure no one forgets what they are shopping for when they are at the store (we've all done it).  There is also group messaging if you need to add any last minute items to the list and want to communicate it with your group!

## Languages Used
* HTML5/CSS
* Javascript
* Jquery (not currently, but it will be added to complete marking items as purchased)
* Node
* PostgreSQL

## Modules Used
* Sequelize 
* Passport
* Express
* Dotenv
* Twilio (text messaging)
* Pg
* Bcryptjs
* EJS
* Morgan
* Bootstrap

## App is live at https://shoppit-ryan.herokuapp.com/