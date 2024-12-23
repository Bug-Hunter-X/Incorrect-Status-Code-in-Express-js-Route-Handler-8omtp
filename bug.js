const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch user data based on userId ...
  if (!user) {
    return res.status(404).send('User not found'); // Correct way 
  }
  res.send(user);
});

app.get('/users', (req,res)=>{ //this route has a bug
  //.. some database operation to fetch all users ...
  if(users.length === 0){
    return res.status(204).send(); //Buggy part, should return 404
  }
  res.send(users);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));