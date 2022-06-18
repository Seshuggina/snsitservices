import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { DevopsComponent } from './devops/devops.component';
import { AzureComponent } from './azure/azure.component';
import { AngularComponent } from './angular/angular.component';
import { MsbiComponent } from './msbi/msbi.component';
import { ReactComponent } from './react/react.component';
import { SqlServerComponent } from './sql-server/sql-server.component';
import { PythonComponent } from './python/python.component';
import { OracleComponent } from './oracle/oracle.component';
import { LinuxComponent } from './linux/linux.component';
import { CoreJavaComponent } from './core-java/core-java.component';
import { CsharpDotnetComponent } from './csharp-dotnet/csharp-dotnet.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailsComponent,
    AllCoursesComponent,
    DevopsComponent,
    AzureComponent,
    AngularComponent,
    MsbiComponent,
    ReactComponent,
    SqlServerComponent,
    PythonComponent,
    OracleComponent,
    LinuxComponent,
    CoreJavaComponent,
    CsharpDotnetComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
