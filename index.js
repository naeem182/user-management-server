const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Alice', email: 'alice@example.com' },
    { id: 3, name: 'Bob', email: 'bob@example.com' },
    { id: 4, name: 'Eva', email: 'eva@example.com' }
];


app.get('/', (req, res) => {
    res.send('user management server is running')
})
app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})