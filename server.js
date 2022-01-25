const cors = require('cors')
const db = require('./models')
const express = require('express');
const app = express();
const welcomeRoute = require('./routes/api/welcomeRoutes')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use('/', welcomeRoute)
db.sequelize.sync().then(() => {
    app.listen(4000, () => console.warn("Server started on port 4000"));
})