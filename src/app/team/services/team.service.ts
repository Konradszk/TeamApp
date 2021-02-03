import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {TeamDTO} from '../dto/TeamDTO';
import {TeamAttributesDTO} from '../dto/TeamAttributesDTO';
import {map, pluck} from 'rxjs/operators';
import {TeamMetadataDTO} from '../dto/TeamMetadataDTO';

@Injectable()
export class TeamService {
  private readonly url: string;

  constructor(private readonly http: HttpClient) {
    this.url = `${environment.urlRoot}/task`;
  }

  public getTeam(): Observable<TeamAttributesDTO[]> {
    const endpoint = `${this.url}/index.json`;
    return this.http.get<TeamDTO>(endpoint, {responseType: 'json'}).pipe(
      pluck('data'),
      map((data: TeamMetadataDTO[]) => data.map(d => d.attributes))
    );
  }
}
