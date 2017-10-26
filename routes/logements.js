var express     = require('express');           // ExperssJS Framework
var router      = express.Router();             // var global route

var Logement        = require('../models/logement');    // import data models



//GET a list of user from the db
router.get('/register', function (req, res) {
    res.render('register');
   // res.send({type: 'GET'});
});

// add a new user to the db
router.post('/register', function (req, res, next) {
    console.log(req.body);
    var logement = new Logement();

        logement.userId = req.body.userId;
        logement.type = req.body.type;
        logement.nbRoom = req.body.nbRoom;
        logement.prix = req.body.prix;
        logement.country = req.body.country;
        logement.city = req.body.city;
        logement.address = req.body.address;
        logement.description = req.body.description;
        logement.save();
});






// update a user in the db
router.put('/logement/:id', function (req, res, next) {  // : change id item
    Logement.findByIdAndUpdate({_id: req.params.id}, req.body).then(function () {  // update user selon son id




        // trouver apres method=findByIdAndUpdate, rechercher a nouveau user selon son id
        Logement.findOne({_id: req.params.id}).then(function (logement) {
            res.send(user);
        });



    });
});







// delete a user from the db
router.delete('/logement/:id', function (req, res, next) { // : change id item
    Logement.findByIdAndRemove({_id: req.params.id}).then(function (logement) {  // supprime user selon son id
        res.send(logement);
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