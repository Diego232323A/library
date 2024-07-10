const express = require('express');
const app = express();

app.get('/authors', (req, res) => {
  res.json({
    service: 'Authors Service',
    data: [
      { id: 1, name: 'George Orwell' },
      { id: 2, name: 'Harper Lee' }
    ]
  });
});

app.listen(3002, () => {
  console.log('Authors Service running on port 3002');
});
