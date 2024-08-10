
const Sign = []
    
const SignUps = (request, response)=>{
    response.json(Sign)
}
    createUser = (req, res) => {
    req.body;

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
    Sign.push(newUser);

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
};

module.exports = {
    SignUps,createUser
}