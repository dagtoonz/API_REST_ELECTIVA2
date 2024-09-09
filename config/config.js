require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',

  server: {
    port: parseInt(process.env.PORT, 10) || 3000,
    host: process.env.HOST || 'localhost',
  },

  mongodb: {
    url: process.env.MONGODB_URL || 'mongodb://mongo:27017/CLON_X_DATABASE',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Add any other MongoDB options you need
    },
  },
}

module.exports =  config ;