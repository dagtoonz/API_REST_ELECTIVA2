const express = require('express')
const router = express.Router();
const { body, validationResult } = require('express-validator');

const { postList } = require( '../controllers/postController')
const { SignUps } = require( '../controllers/signUpController')
const { Followcontroller } = require( '../controllers/FollowController')
const users = [];


router.post('/signup',
  [  
  body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('displayName').notEmpty().withMessage('Display name is required'),
    body('avatarUrl').isURL().withMessage('Avatar URL must be a valid URL'),
    body('bio').optional().isLength({ max: 200 }).withMessage('Bio cannot be longer than 200 characters'),
    body('location').optional().isLength({ max: 100 }).withMessage('Location cannot be longer than 100 characters'),
    body('website').optional().isURL().withMessage('Website must be a valid URL'),
    body('birthdate').notEmpty().withMessage('Birthdate is required').isDate().withMessage('Birthdate must be a valid date')],(req, res) => {
    const errors = validationResult(req)
    console.log(errors)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

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