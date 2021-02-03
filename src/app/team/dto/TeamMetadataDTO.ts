import {TeamAttributesDTO} from './TeamAttributesDTO';

export interface TeamMetadataDTO {
  type: 'blocks';
  id: number;
  attributes: TeamAttributesDTO;
}
