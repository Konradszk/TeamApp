import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamUiComponent} from './components/team/team-ui/team-ui.component';
import {TeamContainer} from './components/team/team.container';
import {HttpTeamService} from './services/http-team.service';
import { TeamMemberUiComponent } from './components/team/team-ui/team-member-ui/team-member-ui.component';
import {GET_TEAMS} from './interfaces/get-teams';


@NgModule({
  declarations: [TeamUiComponent, TeamContainer, TeamMemberUiComponent],
  imports: [
    CommonModule
  ],
  exports: [TeamContainer],
  providers: [{
    provide: GET_TEAMS,
    useClass: HttpTeamService
  }]
})
export class TeamModule {
}
