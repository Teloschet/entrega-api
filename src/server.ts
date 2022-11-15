import express, { Request, Response } from 'express';

import * as dotenv from 'dotenv';
dotenv.config()

const app = express();
const PORT = process.env.PORT! || 5000;

app.get('/', (req: Request, res: Response) => {
  return res.json({
    message: "Hello world"
  })
})

app.listen(PORT, () => console.log(`API server is running at port ${PORT}`));