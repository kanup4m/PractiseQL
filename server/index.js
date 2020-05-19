const express = require('express')
const app = express()
const graphqlHTTP = require('express-graphql')
const schema = require('./schemas/schema')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Graphql', { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => { console.log('Db connected') },
    err => { console.log('DB not connected') }
)
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))
app.listen(4000, () => {
    console.log('Listeninig on port 4000')
})