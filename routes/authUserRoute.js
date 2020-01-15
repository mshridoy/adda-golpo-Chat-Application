const express = require('express');

const {
  getSearchUser,
  postSendRequest,
  postCancelRequest,
  getFriendrequest,
  postAcceptRequest,
  postDeleteRequest,
  getUserProfile
} = require('../controllers/authUserController');

const isAuthenticated = require('../middleware/isAuthenticated');

const router = express.Router();

// settings route
router.get('/settings', isAuthenticated, (req, res) => {
  res.send('settings');
});

// user profile route
router.get('/user/:username', isAuthenticated, getUserProfile);

router.get('/search', isAuthenticated, getSearchUser);

// send friend request
router.post('/send-request', isAuthenticated, postSendRequest);

// calcel friend request
router.post('/cancel-request', isAuthenticated, postCancelRequest);

// friend request route
router.get('/friend_request', isAuthenticated, getFriendrequest);

// accept friend request route
router.post('/accept-friend-request', isAuthenticated, postAcceptRequest);

// delete friend request route
router.post('/delete-friend-request', isAuthenticated, postDeleteRequest);

module.exports = router;
