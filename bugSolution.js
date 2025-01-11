const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const user = req.body;
  // Check if the request body is empty
  if (!user) {
    return res.status(400).json({ error: 'Missing user data' });
  }
  // Check for required fields
  if (!user.name || !user.email) {
    return res.status(400).json({ error: 'Missing name or email' });
  }
  //Further validation as needed
  console.log(user);
  res.status(201).json({ message: 'User created successfully', user });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});