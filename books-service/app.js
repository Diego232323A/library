const express = require('express');
const app = express();

app.get('/books', (req, res) => {
  res.json({
    service: 'Books Service',
    data: [
      { id: 1, title: '1984', authorId: 1 },
      { id: 2, title: 'To Kill a Mockingbird', authorId: 2 }
    ]
  });
});

app.listen(3001, () => {
  console.log('Books Service running on port 3001');
});
