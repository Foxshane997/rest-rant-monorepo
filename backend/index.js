// // Modules and Globals
// require('dotenv').config()
// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const app = express();
// const cookieSession = require('cookie-session')

// // Express Settings
// app.use(cookieSession({
//     name: 'session',
//     keys: [ process.env.SESSION_SECRET ],
//     maxAge: 24 * 60 * 60 * 1000 // 24 hours
// }))
// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true
// }))
// app.use(express.static('public'))
// app.use(express.urlencoded({ extended: true }))
// app.use(bodyParser.json())

// // Controllers & Routes

// app.use(express.urlencoded({ extended: true }))

// app.use('/places', require('./controllers/places'))
// app.use('/users', require('./controllers/users'))
// app.use('/authentication', require('./controllers/authentication'))

// // serve static front end in production mode
// if (process.env.NODE_ENV === "production") {
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
const path = require('path'); // Add this line
const app = express();
const cookieSession = require('cookie-session');

// Express Settings
app.use(cookieSession({
    name: 'session',
    keys: [process.env.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Controllers & Routes
app.use(express.urlencoded({ extended: true }));
app.use('/places', require('./controllers/places'));
app.use('/users', require('./controllers/users'));
app.use('/authentication', require('./controllers/authentication'));

// Serve static front end in production mode
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '..', 'backend', 'public', 'build')));
}

// Listen for Connections
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
