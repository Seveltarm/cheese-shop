import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  selector: 'cheese-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public routerLink: string;

  constructor(
    public translate: TranslateService,
    public router: Router
  ) {
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('en');
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      if (event instanceof NavigationEnd){
        this.routerLink = event.url;
      }  
    });
  }

  back(): void {
    this.router.navigateByUrl('/dashboard');
  }
}
