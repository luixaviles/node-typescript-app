import { Injectable } from 'injection-js';
import { SpeakerRepository } from './speaker/speaker.repository';
import { SlideRepository } from './slide/slide.repository';

@Injectable()
export class DataSource {

    constructor(private speakerRepository: SpeakerRepository,
                private slideRepository: SlideRepository) {}

    getSpeakerRepository(): SpeakerRepository {
        return this.speakerRepository;
    }

    getSlideRepository(): SlideRepository {
        return this.slideRepository;
    }
}