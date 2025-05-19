// Use this controller file to grab user data from browser via client - axios & react. 
// So need ability to handel req object & handle mongoDB schema model and send to data base
const { user } = require('../models/userModel.js');

//Use bcrypt to encrypt the password before saving
const bcrypt = require("bcrypt");

// Get registerpage user data from browse as req object
const getRegisterUserData = async function (req, res) {
    const registerData = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        profession: req.body.profession,
        concern: req.body.concern,
        address: req.body.address
    };
    try {
        const existingUser = await user.findOne({ email: req.body.email });

        if (existingUser) {
            // Hash the new password
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            existingUser.password = hashedPassword;

            await existingUser.save(); // Save updated user
            return res.status(200).json({ message: "Password updated. Please log in." });
        } else {
            // Create new user
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            registerData.password = hashedPassword;
            const newUser = new user(registerData);
            await newUser.save();
                return res.status(200).json(newUser);
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Server error. Please try again." });
    }
};

//Handle user login data 
const getLoginUserData = async function (req, res) {
    // Extract login input data from the request body
    const loginData = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    // Destructure fields from loginData
    const { email, password } = loginData;

    try {
        // Find user by email
        const getUser = await user.findOne({ email });

        // If user exists and password matches
        if (getUser) {
            // Compare entered password with stored hashed password
            const isPasswordMatch = await bcrypt.compare(password, getUser.password);

            if (isPasswordMatch) {
                // Store user ID in session
                req.session.userId = getUser._id;

                return res.status(200).json({
                    message: "User successfully logged in",
                    user: getUser
                });
            } else {
                return res.status(401).json({
                    message: "Invalid password"
                });
            }
        } else {
            return res.status(404).json({
                message: "User not found"
            });
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
            message: "Server error. Please try again."
        });
    }
};

module.exports = {
    getRegisterUserData,
    getLoginUserData
};