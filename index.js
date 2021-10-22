const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

const port = process.env.port || 5000;

const users = [
    { name: 'Rahim', id: 0, email: 'rahim@gmail.com', phone: '014442263' },
    { name: 'Rahima', id: 1, email: 'Rahima@gmail.com', phone: '014442263' },
    { name: 'Rahim uddin', id: 2, email: 'rahim@gmail.com', phone: '01444226' },
    { name: 'Rasel', id: 3, email: 'Rasel@gmail.com', phone: '014442263' },
    { name: 'Rakhal', id: 4, email: 'Rakhal@gmail.com', phone: '014442263' },
    { name: 'Jamiul', id: 5, email: 'Jamiul@gmail.com', phone: '014442263' }
]
// const handle = (req, res) => {
//     res.send(users)
// }
// app.get('/users', (req, res) => {
// res.send(users)
// });
app.get('/users', (req, res) => {
    const search = (req.query.search)
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
})
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// // app.get('/users/:id', (req, res) => {
// const id = req.params.id;
// const user = users[id]
// res.send(user)
// })


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
