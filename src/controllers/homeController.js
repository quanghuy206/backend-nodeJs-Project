const connection = require('../config/database')

const { getAllUsers, getUserbyId, updateUserById, deleteUserById } = require('../services/CURDService')

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results })
}
const backend = (req, res) => {
    res.send('Back-end Hello ')
}
const postCreateUser = async (req, res) => {
    const { email, name, city } = req.body
    const [results, fields] = await connection.query(
        ` INSERT INTO Users (email,name,city) VALUE (?,?,?)`, [email, name, city]
    );
    // console.log("check results:====>", results)
    res.send("Created User")
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}
const getUpdatePage = async (req, res) => {
    const userId = req.params.id
    const results = await getUserbyId(userId)
    let user = results && results.length > 0 ? results[0] : {};
    res.render('edit.ejs', { user: user })
}

const postUpdateUser = async (req, res) => {
    const { email, userName, city, userId } = req.body;
    const results = updateUserById(email, userName, city, userId);
    // res.send("Updated User")
    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id
    let results = await getUserbyId(userId)
    let user = results && results.length > 0 ? results[0] : {};
    console.log("user", user);

    res.render('delete.ejs', { userEdit: user })
}

const deleteUserComfirmPage = async (req, res) => {
    console.log("delete", req.body.userId);
    const id = req.body.userId;
    await deleteUserById(id);
    res.redirect('/');
    // res.send("Deleted User");
}
module.exports = {
    getHomePage,
    backend,
    postCreateUser, getCreatePage,
    getUpdatePage, postUpdateUser, postDeleteUser, deleteUserComfirmPage


}