import { Injectable } from 'injection-js';

@Injectable()
export class SlideRepository {

    getAll(idSpeaker: string) {
        return 'Returns all slides';
    }

    get(idSpeaker: string, id: string) {
        return 'Returns slide #' + id;
    }

    save(idSpeaker: string, slide: any) {
        return 'Saving slide';
    }
}