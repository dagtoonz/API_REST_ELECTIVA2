const express = require('express')
const router = express.Router();

const { postList } = require( '../controllers/postController')

router.get('/post', postList)

module.exports = router;