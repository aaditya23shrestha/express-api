import { v4 as uuidv4 } from 'uuid';

let users = [{
    "name": "aaditya",
    "age": 19,
    "id": "835edaaf-065e-47b2-b479-a5472d45808e"
},{
    "name": "aman",
    "age": 23,
    "id": "746838de-efc0-4995-949c-9129d480c7ef"
}]

export const getUser = (req, res) => {
    res.send(users);
}

export const createUser = (req,res) => { 
    const user = req.body;
    const userWithId = { ...user, id: uuidv4() };
    users.push(userWithId);
    return res.json({success: true, data: {userWithId}});
}

export const patchUser = (req, res) => {
    const {userId} = req.params;
    let updatedUser;
    users = users.map(user => {
        if(user.id===userId){
            // Replacement
            updatedUser = {...user, ...req.body}
            return updatedUser
        }
        return user
    })
    // map = [{},{}]
    return res.json({success: true, data: {updatedUser}});
}

export const deleteUser = (req, res) => {
    const {userId} = req.params;
    users = users.filter(user => {
        return user.id !== userId
        // [{}]
    })
    return res.json({success: true, data: {userId}});
}
