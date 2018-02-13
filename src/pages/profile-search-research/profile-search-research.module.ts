import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileSearchResearchPage } from './profile-search-research';
import  {ComponentsModule} from '../../components/components.module';
@NgModule({
  declarations: [
    ProfileSearchResearchPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileSearchResearchPage),
      ComponentsModule,
  ],
})
export class ProfileSearchResearchPageModule {}
