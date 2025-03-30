import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.serice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dashboard-ng19-hello',
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent implements OnInit {

  constructor(
    private sharedService: SharedService,
		private route: ActivatedRoute,
		private router: Router
  ) { }

  ngOnInit(): void {
      // if (sessionStorage.getItem("auth_token")) {
      //   this.goToDashboard();
      // } 

      this.route.queryParamMap.subscribe({
        next: (res: any) => {
          if (res.params.code) {
            this.sharedService.processAuthCode(res.params.code).subscribe({
              next: (apiResponse: any) => {
                if (apiResponse.token.access_token) {
                  sessionStorage.setItem('auth_token', apiResponse.token.access_token);
                  sessionStorage.setItem('refresh_token', apiResponse.token.refresh_token);
                  this.goToDashboard();
                }
              }
            });
          } else {
            this.sharedService.login();
          }
        },
        error: (err: any) => {
          console.log(err);
        }
      });
  }

  goToDashboard() {
		this.router.navigate(['/']);
  }
}
