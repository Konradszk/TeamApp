import {Component, Inject} from '@angular/core';
import {Observable} from 'rxjs';
import {TeamAttributesDTO} from '../../dto/TeamAttributesDTO';
import {map} from 'rxjs/operators';
import {Team} from '../../domain/Team';
import {TeamMemberDTO} from '../../dto/TeamMemberDTO';
import {TeamMember} from '../../domain/TTeamMember';
import {GET_TEAMS, GetTeams} from '../../interfaces/get-teams';

@Component({
  selector: 'cob-team-container',
  template: `
    <cob-team-ui
      [teams]="(teams$ |async) || []"></cob-team-ui>`,
  styleUrls: []
})
export class TeamContainer {

  public teams$: Observable<Team[]> = this.teamService.getTeams().pipe(
    map(teamsAttr => teamsAttr.map(this.teamMapper))
  );

  private teamMapper = (ta: TeamAttributesDTO): Team => ({
    name: ta.title,
    members: this.membersMapper(Object.values(ta.memberCards))
  })

  private membersMapper = (members: TeamMemberDTO[]): TeamMember[] => (
    [
      ...members.map(member => ({
        picUrl: member.imageUrl,
        email: member.block.link,
        phone: member.block.text,
        name: member.block.title,
        position: member.block.description
      }))
    ])

  constructor(
    @Inject(GET_TEAMS) private readonly teamService: GetTeams
  ) {
  }
}
