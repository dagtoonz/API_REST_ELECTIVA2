const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const router = require("./routes/apiRoutes");

app.use(express.json());
app.use('/api', router)


// Rutas
app.get('/', (req, res) => {
  res.send('Hello, World!');
});




// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});