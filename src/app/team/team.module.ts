import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamUiComponent} from './components/team/team-ui/team-ui.component';
import {TeamContainer} from './components/team/team.container';
import {TeamService} from './services/team.service';
import { TeamMemberUiComponent } from './components/team/team-ui/team-member-ui/team-member-ui.component';


@NgModule({
  declarations: [TeamUiComponent, TeamContainer, TeamMemberUiComponent],
  imports: [
    CommonModule
  ],
  exports: [TeamContainer],
  providers: [TeamService]
})
export class TeamModule {
}
