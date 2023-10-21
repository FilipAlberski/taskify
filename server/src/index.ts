import Express from 'express';

const app = Express();

app.get('/', (req, res) => {
  res.json({ message: 'ok' });
});

app.listen(3000, () => {
  console.log('Server started');
});
