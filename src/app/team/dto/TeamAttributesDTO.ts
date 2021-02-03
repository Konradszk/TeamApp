import {TeamMemberDTO} from './TeamMemberDTO';

export interface TeamAttributesDTO {
  title: string;
  memberCards: Record<string, TeamMemberDTO>;
}
