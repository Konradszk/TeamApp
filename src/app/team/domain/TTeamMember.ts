// TeamMember.ts makes bug on windows10 o.O


import {PicResolution} from './pic-resolution.enum';

export interface TeamMember {
  picUrl: Record<PicResolution, url>;
  name: string;
  email: string;
  phone: string;
  position: string;
}

type url = string;
