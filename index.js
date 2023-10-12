const express = require('express');
//fetch fix
const cors = require('cors');


const app = express();
const port = process.env.PORT || 5000;

//fetch fix
//midleware
app.use(cors());

const users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Alice', email: 'alice@example.com' },
    { id: 3, name: 'Bob', email: 'bob@example.com' },

];


app.get('/', (req, res) => {
    res.send('user management server is running')
})

app.get('/users', (req, res) => {
    res.send(users)
})
app.post('/users', (req, res) => {
    console.log('post api hittng')
    console.log(req.body)
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})