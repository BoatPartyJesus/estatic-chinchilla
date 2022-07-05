import express from 'express';
const app: express.Application = express();
const port = 3000;

app.get('/', (_, response) => response.send("Hello Word"));
app.listen(port, () => console.log(`Listening on ${port}`));