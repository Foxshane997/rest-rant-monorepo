// middleware/defineCurrentUser.js

module.exports = (req, res, next) => {
    // Check if a user is logged in (you can adjust this based on your session management)
    if (req.session && req.session.user) {
        // Attach the user object to the request for further use in routes
        req.currentUser = req.session.user;
    } else {
        // No user is logged in, set currentUser to null
        req.currentUser = null;
    }
    
    // Call next to proceed to the next middleware or route handler
    next();
};
