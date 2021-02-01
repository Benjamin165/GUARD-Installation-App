import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { SixthComponent } from './sixth/sixth.component';
import { SeventhComponent } from './seventh/seventh.component';
import { EigthComponent } from './eigth/eigth.component';
import { NinthComponent } from './ninth/ninth.component';
import { TenthComponent } from './tenth/tenth.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectmetaComponent } from './projectmeta/projectmeta.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { BuildingmetaComponent } from './buildingmeta/buildingmeta.component';
import { GuardsComponent } from './guards/guards.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent }, 
  { path: '1', component: FirstComponent },
  { path: '2', component: SecondComponent },
  { path: '3', component: ThirdComponent },
  { path: '4', component: FourthComponent },
  { path: '5', component: FifthComponent },
  { path: '6', component: SixthComponent },
  { path: '7', component: SeventhComponent },
  { path: '8', component: EigthComponent },
  { path: '9', component: NinthComponent },
  { path: '10', component: TenthComponent },
  { path: '?', component: PagenotfoundComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projectmeta', component: ProjectmetaComponent },
  { path: 'buildings', component: BuildingsComponent },
  { path: 'buildingmeta', component: BuildingmetaComponent },
  { path: 'guards', component: GuardsComponent },
  { path: '**', component: LoginPageComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
