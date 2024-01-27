import express, { Express } from 'express';
import vapiWebhook from './webhooks/vapi.webhook';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? parseInt(process.env.PORT) : 8000;

const app: Express = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.use('/vapi/webhook', vapiWebhook);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
