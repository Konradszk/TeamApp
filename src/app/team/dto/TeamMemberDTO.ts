import {PicResolution} from './pic-resolution.enum';
import {BlockData} from './BlockData';

export interface TeamMemberDTO {
  imageUrl: Record<PicResolution, imgUrl>;
  block: BlockData;
}

type imgUrl = string;
