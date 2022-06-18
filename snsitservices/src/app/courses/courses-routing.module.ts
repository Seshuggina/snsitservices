import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { AngularComponent } from './angular/angular.component';
import { AzureComponent } from './azure/azure.component';
import { CoreJavaComponent } from './core-java/core-java.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesComponent } from './courses.component';
import { CsharpDotnetComponent } from './csharp-dotnet/csharp-dotnet.component';
import { DevopsComponent } from './devops/devops.component';
import { LinuxComponent } from './linux/linux.component';
import { MsbiComponent } from './msbi/msbi.component';
import { OracleComponent } from './oracle/oracle.component';
import { PythonComponent } from './python/python.component';
import { ReactComponent } from './react/react.component';
import { SqlServerComponent } from './sql-server/sql-server.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      {
        path: 'allCourses',
        component: AllCoursesComponent
      },
      // {
      //   path: ':name',
      //   component: CourseDetailsComponent
      // },
      {
        path: 'devops',
        component: DevopsComponent
      },
      {
        path: 'azure',
        component: AzureComponent
      },
      {
        path: 'angular',
        component: AngularComponent
      },
      {
        path: 'msbi',
        component: MsbiComponent
      },
      {
        path: 'react',
        component: ReactComponent
      },
      {
        path: 'sql-server',
        component: SqlServerComponent
      },
      {
        path: 'python',
        component: PythonComponent
      },
      {
        path: 'oracle',
        component: OracleComponent
      },
      {
        path: 'linux',
        component: LinuxComponent
      },
      {
        path: 'corejava',
        component: CoreJavaComponent
      },
      {
        path: 'csharpdotnet',
        component: CsharpDotnetComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
