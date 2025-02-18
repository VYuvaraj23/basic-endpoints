const express = require('express');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT ||8000;
const USERS = [
  {
    id: 1,
    name: "Naga",
    email: "naga@gmail.com",
  },
  {
    id: 2,
    name: "Raj",
    email: "raj@gmail.com",
  },
  {
    id: 3,
    name: "Vinoth",
    email: "vinoth@gmail.com",
  },
  {
    id: 4,
    name: "Cibi",
    email: "cibi@gmail.com",
  },
];


// middleware - its a function that will be used within req,res cycle

app.use(cors())
app.use(express.json())



app.get('/', (req, res) => {
  // res.send('')
  res.end('<h1>welcome to express</h1>')
})
  

app.get('/users', (req, res) => {
  res.send(USERS)
})

app.get('/users/:id', (req, res) => {
console.log(parseInt(req.params.id))
  // res.send(USERS[req.params.id -1])
  // res.send(USERS.find((user)=>user.id === +req.params.id))

  const { id } = req.params;
  let index = -1
  
  for (let i = 0; i < USERS.length; i++){
    if (USERS[i].id == id) {
      index = i
    }
  }
  if (index !== -1) {
    res.send(USERS[index])
  } else {
    res.send(
      {message:'Invalid ID'}
    )
  }
})

// post method

app.post('/users', (req, res) => {
  console.log(req.body)

  const id = USERS.length ? USERS[USERS.length - 1].id + 1 : 1
  USERS.push({id,...req.body})
  res.send({message:'user created successfully'})
})


app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  let index = -1
  
  for (let i = 0; i < USERS.length; i++){
    if (USERS[i].id == id) {
      index = i
    }
  }
  if (index !== -1) {
    USERS.splice(index, 1, { id, name, email })
    res.send("alter the user data successfully")
  } else {
    res.send(
      {message:'Invalid ID'}
    )
  }

})
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  let index = -1
  
  for (let i = 0; i < USERS.length; i++){
    if (USERS[i].id == id) {
      index = i
    }
  }
  if (index !== -1) {
    USERS.splice(index, 1)
    res.send("delete the user data successfully")
  } else {
    res.send(
      {message:'Invalid ID'}
    )
  }

})

app.listen(PORT, () => {
  console.log('hello work');
  
})