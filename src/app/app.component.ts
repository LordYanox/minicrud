import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { LoaderService } from './loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-router-sample';
  showSpinner = false;

  constructor(private breakpointObserver: BreakpointObserver,
    public loaderService:LoaderService){
    
  }
}
