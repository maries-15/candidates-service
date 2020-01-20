/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    login: function (req, res) {
        User.find(req.body)
            .then(data => {
                if (data.length > 0) {
                    res.send(data[0]);
                } else {
                    res.send(false)
                }
            })
            .catch(err => {
                res.serverError();
            });
    }
};
