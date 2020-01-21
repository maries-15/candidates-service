/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var Promise = require("bluebird");

module.exports = {
    login: function (req, res) {
        User.find(req.body)
            .then(data => {
                if (data.length > 0) {
                    res.send(data[0]);
                } else {
                    res.send(false);
                }
            })
            .catch(err => {
                res.serverError();
            });
    },
    vote: function (req, res) {
        User.find({
            user: req.body.user,
            id: req.body.id
        }).then((data) => {
            let user = data[0];
            updateUser(user, req.body.id, req.body.candidateId)
                .then(() => {
                    return updateCandidate(req.body.candidateId, req.body.typeVote);
                })
                .then((response, error) => {
                    res.send(true);
                })
                .catch((error) => {
                    res.send(error);
                });
        })
        .catch(err => {
            res.serverError(err);
        });
    },
    votesPerUser(req, res) {
        Candidate.find({
            id: req.body.candidatesIds
        }).then((response) => {
            res.send(response);
        }).catch(() => {
            res.serverError()
        })
    }
};

function updateCandidate(candidateId, typeVote) {
    return Candidate.findOne({
        id: candidateId
    }).then((candidate) => {
        return Candidate.update({
            id: candidateId
        }).set({
            [typeVote]: candidate[typeVote] + 1
        });
    });
}

function updateUser(user, id, candidateId) {
    if (user) {
        if (user.votes[candidateId]) {
            user.votes[candidateId] = user.votes[candidateId] + 1;
        } else {
            user.votes[candidateId] = 1;
        }

        if (user.votes[candidateId] <= 3) {
            return User.update({
                user: user.user,
                id: id
            }).set({
                votes: user.votes
            });
        }
    }

    return Promise.reject(false);
}
