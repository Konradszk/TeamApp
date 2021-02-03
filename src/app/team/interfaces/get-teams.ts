import {Observable} from 'rxjs';
import {TeamAttributesDTO} from '../dto/TeamAttributesDTO';
import {InjectionToken} from '@angular/core';

export interface GetTeams {
  getTeams(): Observable<TeamAttributesDTO[]>;
}

export const GET_TEAMS = new InjectionToken('GetTeams');
