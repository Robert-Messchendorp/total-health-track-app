const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

var ApplicationComponent = require('../models/application');

router.get('/', (req, res) => {
    ApplicationComponent.find()
    .exec(function(err, applicationComponent) {
        if (err) {
            return res.status(500).json({
                title: 'Something went wrong while trying to retrieve the application fields',
                error: err
            });
        }

        res.status(200).json({
            message: 'Succesfully retrieved the application fields',
            record: applicationComponent
        });
    });
});

// Example for back end router protection, should not be implemented before at least the first get
router.use('/', function (req, res, next) {
    jwt.verify(req.query.token, 'secret', function(err, decodedToken) {
        if (err) {
            return res.status(401).json({
                title: 'Not authorized',
                error: err
            });
        }
        next();
    });
});

module.exports = router; 
