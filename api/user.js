const express = require('express');
const router = express.Router();


//auto incrementor for the array
var incrementor = 0;

// This array acts as a temparoy database to store users.
var users = [];


router.get('/', (req, res, next) => {
    // GET all current users
    res.status(200).json(users);

});


router.post('/', (req, res, next) => {
    //CREATE new users and add to array

    const user = {
        id: incrementor,
        email: req.body.email,
        forename: req.body.foreName,
        surname: req.body.surname,
        created: new Date()
    };

    users.push(user);

    res.status(201).json({
        message: 'POST request',
    });
    incrementor++;

});

router.delete('/', (req, res, next) => {
    //DELETE user from the array using id

   console.log(req.body.id);
      
   users.forEach( function( user, index ){
    if( user.id === req.body.id ){
        users.splice(index, 1);
    }
  } );

  res.status(200).json({
    message: 'User deleted successfully',
    data: req.body.id,
});

    
});


router.patch('/', (req, res, next) => {
    //UPDATE an exsiting user

    var data = req.body;

    var objIndex = users.findIndex((obj => obj.id == req.body.id));
 
    users[objIndex].email = req.body.email;
    users[objIndex].forename = req.body.forename;
    users[objIndex].surname = req.body.surname;
    
    res.status(200).json({
        message: 'UPDATE request',
        id: data.id,
        email: data.email,
        forename: data.forename,
        surename: data.surname
        
    });
    
});



// router.get('/:userID', (req, res, next) => {

//     const userid = req.params.userID;

//     if(userid === 'shaun'){
//         res.status(200).json({
//             message: 'Hello Shaun',
//             id: userid
//         });
//     }else{
//         res.status(200).json({
//             message: 'Hello other',
//             id: userid
//         })
//     }
// });

module.exports = router;