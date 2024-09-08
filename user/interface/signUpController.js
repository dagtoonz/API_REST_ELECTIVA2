const UserService = require('../application/UserService');
const UserRepository = require('../infrastructure/userRepository');

const userRepository = new UserRepository();
const userService = new UserService(userRepository);



const SignUps = (request, response) => {
  response.json(Sign)
}

createUser = async  (req, res) => {
  req.body;

  const { username, name, lastName, avatarURL, email, password, displayName, avatarUrl, bio, birthdate } = req.body;


  const newUser = {
    username,
    email,
    name,
    lastName,
    avatarURL,
    password: password,
    displayName,
    avatarUrl,
    bio,
    birthdate,
    createdAt: new Date().toISOString()
  };

  userService.createUser(newUser);  

  res.status(201).json(newUser);
};

module.exports = {
  SignUps, createUser
}