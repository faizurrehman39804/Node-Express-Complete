const http = require('http');

const server = http.createServer((req, res) => {
  // 1. Sahi URL check karne ke liye (Home Page)
  if (req.url === '/' || req.url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Home Page!');
  } 
  
  // 2. Redirect check karne ke liye (Optional - agar aap redirect karna chahte hain)
  else if (req.url === '/old-about') {
    res.redirect(302, { 'Location': '/about' });
    res.end();
  } 
  
  // 3. Agar user koi bhi galat (Wrong) URL pass kare (e.g., /xyz, /wrong)
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Error 404: Oops! This is a wrong URL. Page not found.');
  }
});

// Server ko port 4000 par run karein
server.listen(4000, () => {
  console.log(`Server running at http://localhost:4000/`);
});
