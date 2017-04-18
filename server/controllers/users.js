var mongoose = require("mongoose")

var User = mongoose.model("User")

module.exports = {
    get_all_users: function(req, res) {
        User.find({}, function(err, data) {
            if (err) {
                console.log("User find Error", err)
                res.json(err)
            } else {
                res.json(data)
            }
        })
    },
    createUser: function(req, res) {
        console.log(req.body)
        var newUser = new User(req.body)
        newUser.save(function(err, data) {
            if (err) {
                console.log("rat create error", err)
                res.json({ added: false, error: err })
            } else {
                res.json({ added: true })
            }
        })

    },
    // updateUser: function(req, res) {
    //     UserModel.update({ $or: [{name: req.name}, {password: req.password}] }, { $set: { lastfm: req.params } }, { upsert: true }, function(){})
    //     // User.findOne({_id: req.body.id}, function(err){
    //     //     if (err) {
    //     //         console.log("User find error")
    //     //     }
    //     })

    // },
    deleteUser: function(req, res) {
        User.remove({ _id: req.params.id }, function(err) {
            if (err) {
                console.log("User delete error")
            }
            res.json(true)
        })

    }

}