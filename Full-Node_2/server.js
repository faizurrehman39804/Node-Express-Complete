const express = require('express');
const app = express();

app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

const about = [];

app.get('/about', (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => {
  console.log("okk server is running is Good");
  
  console.log('Server is running on port 3000');
});
