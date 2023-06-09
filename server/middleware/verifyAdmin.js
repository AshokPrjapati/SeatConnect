require("dotenv").config();

exports.verifyAdmin = (req, res, next) => {
    let adminCode = req.headers?.admin_code;
    console.log(adminCode)

    if (adminCode && adminCode === process.env.ADMIN_CODE) {
        // User is an admin, proceed to the  route handler
        next();
    } else {
        // User is not an admin, send a forbidden response
        res.status(403).json({ message: 'Unauthorized' });
    }
};