const Sign = [
    {
    "user": "daniel.10",
    "password":"123456789"
    },
    ]


const SignUps = (request, response)=>{
    response.json(Sign)
}

module.exports = {
    SignUps,
}