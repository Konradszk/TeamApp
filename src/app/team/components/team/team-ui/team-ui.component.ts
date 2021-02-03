import {Component, Input} from '@angular/core';
import {Team} from '../../../domain/Team';
import {TeamMember} from '../../../domain/TTeamMember';

@Component({
  selector: 'cob-team-ui',
  templateUrl: './team-ui.component.html',
  styleUrls: ['./team-ui.component.scss']
})
export class TeamUiComponent {

  @Input()
  public teams: Team[] = [];

  public trackByTeam(index: number, item: Team): string {
    return item.name;
  }

  public trackByMember(index: number, item: TeamMember): string {
    return item.name;
  }
}
