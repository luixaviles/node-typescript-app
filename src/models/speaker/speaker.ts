import { IdSpeaker } from './id-speaker'
import { Name } from './name'
import { LocationSpeaker } from './location-speaker'
import { PictureSpeaker } from './picture-speaker'

export interface Speaker {
  id: IdSpeaker;
  gender: string;
  name: Name;
  location: LocationSpeaker;
  email: string;
  picture: PictureSpeaker;
  registered: string;
}
