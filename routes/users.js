var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.json({name: req.params.id + "-name"});
});

router.get('/:id/friends', function(req, res, next) {
  var friendList = [];
  for (var i = 0; i < 5; i++) {
    friendList.push({name: req.params.id + "-friend-" + i});
  }
  res.json(friendList);
});

module.exports = router;
