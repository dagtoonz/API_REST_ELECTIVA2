const express = require('express')
const router = express.Router();

const { postList } = require( '../controllers/postController')
const { SignUps } = require( '../controllers/signUpController')
const { Followcontroller } = require( '../controllers/FollowController')

const users = [];


console.log(Followcontroller)

router.post('/signup', async (req, res) => {
    console.log('Holaaaaa')
    try {
      const { username, email, password, displayName, avatarUrl, bio, location, website, birthdate } = req.body;
  

      const newUser = {
        username,
        email,
        password: password, 
        displayName,
        avatarUrl,
        bio,
        location,
        website,
        birthdate,
        createdAt: new Date().toISOString()
      };
  
      console.log(newUser)

      users.push(newUser);
  

      res.status(201).json({
        userId: newUser.userId,
        username: newUser.username,
        email: newUser.email,
        displayName: newUser.displayName,
        avatarUrl: newUser.avatarUrl,
        bio: newUser.bio,
        location: newUser.location,
        website: newUser.website,
        birthdate: newUser.birthdate,
        createdAt: newUser.createdAt
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
router.get('/post', postList)
router.get('/user', SignUps)
router.get('/follow', Followcontroller)
module.exports = router;