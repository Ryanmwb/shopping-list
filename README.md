## Important Notes
**A)** All of the functionality has been created on the backend, there are just a few features I need to move to the view.  Like clicking items to mark them purchased.  Custom error messages for trying to sign-up under an email or username that is already in use. etc.

**B)** The app is live at a link below, but currently some of the bootstrap buttons aren't working on the production side at the host site.  There are no issues with it locally however, so if you close this repo you will need to complete a couple steps. 
1. Create a `.env` file in the root directory. 
2. Add a `Secret` variable and give it a value of your choosing.  Example) `Secret=123456`.
3. Get an `accountSid` and `auth_token` from Twilio and add it to the `.env` file.  --> https://www.twilio.com/docs/libraries/node

# What is Shoppit
A web based application that makes shopping easier.  Share your shopping list with your friends, family, and roommates to make sure no one forgets what they are shopping for when they are at the store (we've all done it).  There is also group messaging if you need to add any last minute items to the list and want to communicate it with your group!

##Languates Used
* HTML5/CSS
* Javascript
* Jquery (not currently, but it will be added to complete marking items as purchased)
* Node
* PostgreSQL
* Bootstrap (kinda it's own language)

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

## App is live at https://shoppit-ryan.herokuapp.com/