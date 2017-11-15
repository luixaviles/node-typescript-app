import { default as SPEAKERS } from './db';
import { Speakers, Speaker } from '../models/speaker';

export class SpeakerRepository {
    speakers: Speakers = SPEAKERS;

    getAll(): Speakers {
        return this.speakers;
    }

    get(id: number | string): Speaker {
        const array = this.speakers.results.filter(s => s.id.value === id);

        return array[0];
    }

    save(speaker: Speaker): Speaker {
        speaker.id.value = 'ramdomid';
        this.speakers.results.push(speaker);

        return speaker;
    }

    update(id: string, speaker: Speaker): Speaker {
        const index = this.speakers.results.findIndex((s:Speaker) => s.id.value === id);
        this.speakers.results[index] = speaker;

        return speaker;
    }


}