const connection = require("../config/database")

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from Users')
    return results
}
const getUserbyId = async (userId) => {
    let [results, fields] = await connection.query('select * from Users where id = ? ', [userId])
    return results;
}

const updateUserById = async (email, userName, city, userId) => {
    let [results, fields] = await connection.query(` UPDATE Users 
        SET email = ?, name = ?, city = ?
        WHERE id = ? ;`,
        [email, userName, city, userId])
    return results;
}

const deleteUserById = async (userId) => {
    let [results, fields] = await connection.query('DELETE FROM Users WHERE id = ?', [userId])
    return results;
}


module.exports = {
    getAllUsers, getUserbyId, updateUserById, deleteUserById
}