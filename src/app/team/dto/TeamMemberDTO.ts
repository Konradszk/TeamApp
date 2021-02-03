import {PicResolution} from '../domain/pic-resolution.enum';
import {BlockDataDTO} from './BlockDataDTO';

export interface TeamMemberDTO {
  imageUrl: Record<PicResolution, imgUrl>;
  block: BlockDataDTO;
}

type imgUrl = string;
