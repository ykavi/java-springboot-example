import {Component, OnInit} from '@angular/core';
import {UyeService} from '../uye.service';

@Component({
  selector: 'app-my-footer',
  templateUrl: './my-footer.component.html',
  styleUrls: ['./my-footer.component.css']
})
export class MyFooterComponent implements OnInit {
  public uyeList: any;

  constructor(private uyeService: UyeService) {
  }

  ngOnInit() {

  }

}
