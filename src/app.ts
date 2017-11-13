import 'reflect-metadata'; 
import { createExpressServer } from 'routing-controllers';
import { SpeakerController } from './controller/speaker/speaker.controller';

const app = createExpressServer({
   controllers: [SpeakerController]
});

app.listen(3000);