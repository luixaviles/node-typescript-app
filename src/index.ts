import 'reflect-metadata'; 
import { createExpressServer } from 'routing-controllers';
import { SpeakerController } from './controllers/speaker.controller';

const app = createExpressServer({
   controllers: [SpeakerController]
});

const PORT = 3000;

app.listen(PORT);
console.log('Running local server on port ', PORT);