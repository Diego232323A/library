const express = require('express');
const app = express();

app.get('/reviews', (req, res) => {
  res.json({
    service: 'Reviews Service',
    data: [
      { bookId: 1, review: 'A thought-provoking novel about a dystopian future.' },
      { bookId: 2, review: 'A powerful story about racial injustice in America.' }
    ]
  });
});

app.listen(3003, () => {
  console.log('Reviews Service running on port 3003');
});
