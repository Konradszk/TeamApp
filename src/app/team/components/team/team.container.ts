import {Component} from '@angular/core';
import {TeamService} from '../../services/team.service';
import {Observable} from 'rxjs';
import {TeamAttributesDTO} from '../../dto/TeamAttributesDTO';
import {map, tap} from 'rxjs/operators';
import {Team} from '../../domain/Team';
import {TeamMemberDTO} from '../../dto/TeamMemberDTO';
import {TeamMember} from '../../domain/TTeamMember';

@Component({
  selector: 'cob-team-container',
  template: `
    <cob-team-ui
      [teams]="(teams$ |async) || []"></cob-team-ui>`,
  styleUrls: []
})
export class TeamContainer {

  public teams$: Observable<Team[]> = this.teamService.getTeam().pipe(
    map(teamsAttr => teamsAttr.map(this.teamMapper)),
    tap(t => console.log(t))
  );

  private teamMapper = (ta: TeamAttributesDTO): Team => ({
    name: ta.title,
    members: this.membersMapper(Object.values(ta.memberCards))
  })

  private membersMapper = (members: TeamMemberDTO[]): TeamMember[] => (
    [
      ...members.map(member => ({
        picUrl: member.imageUrl.w400,
        email: member.block.link,
        phone: member.block.text,
        name: member.block.title,
        position: member.block.description
      }))
    ])



  constructor(
    private readonly teamService: TeamService
  ) {
  }
}
