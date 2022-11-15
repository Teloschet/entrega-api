import express, { request, response } from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({
    message: "Hello world"
  })
})

app.listen(5000, () => console.log('API iniciada'));