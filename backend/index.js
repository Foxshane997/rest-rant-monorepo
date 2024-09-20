// // Modules and Globals
// require('dotenv').config()
// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors');
// const app = express();
// const defineCurrentUser = require('./middleware/defineCurrentUser')
// const path = require('path')

// // Express Settings
// app.use(cors())
// app.use(express.static('public'))
// app.use(express.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// app.use(defineCurrentUser)

// // Controllers & Routes

// app.use(express.urlencoded({ extended: true }))

// app.use('/places', require('./controllers/places'))
// app.use('/users', require('./controllers/users'))
// app.use('/authentication', require('./controllers/authentication'))

// //serve static front end in production mode
// if (process.env.NODE_ENV === "production"){
//     app.use(express.static(path.join(__dirname, 'client', 'build')));
// }
// // Listen for Connections
// app.listen(process.env.PORT, () => {
//     console.log(`Listening on ${process.env.PORT}`)
// })


// Modules and Globals
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const defineCurrentUser = require('./middleware/defineCurrentUser');
const path = require('path');

// Express Settings
app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(defineCurrentUser);

// Controllers & Routes
app.use('/places', require('./controllers/places'));
app.use('/users', require('./controllers/users'));
app.use('/authentication', require('./controllers/authentication'));

// Serve static front end in production mode
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
}

// Listen for Connections
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
