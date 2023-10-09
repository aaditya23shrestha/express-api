import express from 'express';

import { createUser, getUser, patchUser, deleteUser } from '../controllers/user.js';

const router = express.Router();
router.get('/',getUser);
router.post('/', createUser);
router.patch("/:userId", patchUser);
router.delete("/:userId", deleteUser);
export default router

// Employee
// Id: primary key
// Name: string
// Position: string
// No_of_years: number

// let users = [];
// all routes in here are starting with /users


   // users.push();

    // stringify => convert js object JSON (JSON is format for data exchange)


    // const {name, position, no_of_years} = req.body;
    // if (!name){
    //     return res.send("Error validating name")
    // }
    // console.log(`Saving data to database as ${name} | ${position} | ${no_of_years}`)
    // console.log(name)
    // res.send("Success")
     
// router.get('/:id',(req, res) => {
//     const { id }= req.paramps;
    
//     const foundUser = users.find((user)=> user.id == id);

//     res.send(foundUser);
// });

// router.delete('/:id', (req, res) => {
//     const { id } = req.params;

//     users = users.filter((user) => user.id !== id);

//     res.send(`User with the id ${id} deleted from the database.`);

// });

// router.patch('/:id', (req,res) => {
//     const { id } = req.params;
//     const { firstName, lastName, age} = req.body;
    
//     const user = users.find((user) => user.id == id);

//     if(firstName) user.firstName = firstName;
//     if(lastName) user.lastName = lastName;
//     if(age) user.age = age;

//     res.send(`User with the id ${id} has been updated`);


// });

// export default router; 