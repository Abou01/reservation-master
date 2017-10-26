var express     = require('express');           // ExperssJS Framework
var router      = express.Router();             // var global route

var User        = require('../models/user');    // import data models



//GET a list of user from the db
router.get('/register', function (req, res) {
    res.render('register');
   // res.send({type: 'GET'});
});

// add a new user to the db
router.post('/register', function (req, res, next) {
    console.log(req.body);
    var user = new User();

        user.lastname = req.body.lastname;
        user.firstname = req.body.firstname;
        user.email = req.body.email;
        user.username = req.body.username;
        user.password = req.body.password;
        user.birthDate = req.body.birthDate;
        user.save();

});






// update a user in the db
router.put('/user/:id', function (req, res, next) {  // : change id item
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function () {  // update user selon son id




        // trouver apres method=findByIdAndUpdate, rechercher a nouveau user selon son id
        User.findOne({_id: req.params.id}).then(function (user) {
            res.send(user);
        });



    });
});


// delete a user from the db
router.delete('/user/:id', function (req, res, next) { // : change id item
    User.findByIdAndRemove({_id: req.params.id}).then(function (user) {  // supprime user selon son id
        res.send(user);
    });
});


module.exports = router;  // import routes CRUD into a another file


/* POST   http://localhost:3000/crudusers/register

 {
 "lastname": "frfr",
 "firstname": "frfr",
 "email": "fr@.fr",
 "username": "frfr",
 "password": "frfr",
 "birthDate": "01/01/2000"
 }

*/


/*  PUT  http://localhost:3000/crudusers/user/59ef7e8766fa9f0218c4fc0c

 {
 "lastname": "frfr1",
 "firstname": "frfr1",
 "email": "fr@.fr1",
 "username": "frfr1",
 "password": "frfr1",
 "birthDate": "01/01/2001"
 }

 */


// delete   http://localhost:3000/crudusers/user/:id <- à mettre