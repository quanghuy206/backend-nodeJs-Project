const getHomePage = (req, res) => {
    res.send('Hello World! Home PAge')
}
const backend = (req, res) => {
    res.send('Back-end Hello ')
}

module.exports = {
    getHomePage,
    backend
}