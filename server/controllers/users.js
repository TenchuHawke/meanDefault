var USERS = [
    { name: "Jeff", password: "password0", email: "Bobo@bobob.boo" },
    { name: "Bob", password: "password1", email: "Bobo@bobob.boo" },
    { name: "Sam", password: "password2", email: "Bobo@bobob.boo" },
]

module.exports = {
    get_all_users: function(req, res) {
        res.json(USERS)
    },
    createUser: function(req, res) {
        console.log(req.body)
        USERS.push(req.body)
        res.json(true)

    },
    updateUser: function(req, res) {

    },
    deleteUser: function(req, res) {

    }

}