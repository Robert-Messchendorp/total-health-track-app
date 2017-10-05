const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


var User = require('../models/user');

router.post('/', function (req, res, next) {
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    });

    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'error fool',
                error: err
            })
        }
        
        res.status(201).json({
            message: 'Saved biatch',
            obj: result
        });
    });
});

// router.get('/', (req, res) => {
//     // res.send('henk en piet eten friet');

//     User.find()
//     .exec(function(err, users) {
//         if (err) {
//             return res.status(500).json({
//                 title: 'Something went wrong in retrieving the users',
//                 error: err
//             });
//         }
//         res.status(200).json({
//             message: 'Success',
//            obj: users 
//         });
//     });
//   });

  router.post('/signin', function(req, res, next) {
        User.findOne({
            email: req.body.email
        }, function(err, user) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }

            if(!user) {
                return res.status(401).json({
                    type: 'User',
                    title: 'Login failed!',
                    error: { message: 'Invalid login credentials' },
                    severity: 'Error'
                });
            }

            if (!bcrypt.compareSync(req.body.password, user.password)) {
                return res.status(401).json({
                    title: 'Login failed!',
                    error: {message: 'Invalid login credentials'}
                });
            }

            var token = jwt.sign({
                payload: user
            }, 'secret', {expiresIn: 3600});


            res.status(200).json({
                message: 'Logged in',
                token: token,
                userId: user._id,
                timeLoggedIn: new Date()
            });
        });
  });

//   router.patch('/:id', function(req, res, next) {
//     console.log('Update');
//     User.findById(req.params.id, function(err, user) {
//         if (err) {
//             return res.status(500).json({
//                 title: "An error occured",
//                 error: err
//             });
//         }

//         if (!user) {
//             return res.status(500).json({
//                 title: 'No user by that id found',
//                 error: {
//                     message: 'That user cannot be found'
//                 }
//             });
//         }

//         user.first_name = req.body.first_name;
//         // etc
//         message.save(function (err, result) {
//             // add same / similar code as in the save method
//         })
//     });
//   });


module.exports = router; 