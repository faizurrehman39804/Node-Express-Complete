const express = require('express');
const server = express();

server.listen(5000, () => {
  console.log("http://localhost:5000");
});

// server.get('/', (req, res) => {
//   res.send("<h1>Hi Bro Welcome to Express JS</h1>");
// });

// server.get('/about/user', (req, res) => {
//   res.send("<h1>This is about page</h1>");
// });

// server.get('/contact', (req, res) => {
//   res.send("<h1>Welome to Contact page</h1> ")
// })

// server.get('/navbar', (req, res) => {
//   res.send("<h1>Welcome to the Navbar page</h1>")
// })

// server.get('/rendom/:id/book', (req, res) => {
//   res.send(req.params)
// })

// Send the Json data to the user
// Send the array

// server.get('/json', (req, res) => {
//   res.send({
//     name: "Faiz ur rehman", 
//     age: 20
//   })
// }
// )

//Send the Object
server.get('/JSON', (req, res) => {
  const users= [
    {
      id: 1,
      name: 'Faiz ur rehman',
    },
    {
      id: 2,
      name: 'Ali',
    },
    {
      id: 3,
      name: 'Ahmed',
    },
    {
      id: 4,
      name: 'Sana Khan',
    }
  ];


  res.json(
    users
    // {
    //   name: 'Fiaz-ur-rehman',
    //   age: 18
    //  }
  )
})