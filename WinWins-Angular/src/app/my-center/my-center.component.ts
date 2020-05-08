import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UyeService} from '../uye.service';

@Component({
  selector: 'app-my-center',
  templateUrl: './my-center.component.html',
  styleUrls: ['./my-center.component.css']
})
export class MyCenterComponent implements OnInit {

  constructor(private router: Router, private uyeService: UyeService) {
  }

  public uyeList: any;

  ngOnInit() {
  }


  onClickSubmit(formData) {
    const serviceReqObj = {
      username: formData.name,
      surname: formData.surname,
      email: formData.email,
      password: formData.password
    };

    this.uyeService.postPerson(serviceReqObj)
      .subscribe(postResponse => {
          this.uyeList = postResponse;
        }
      );

    this.router.navigate(['login']);
  }
}
