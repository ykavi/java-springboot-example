import {Component, OnInit} from '@angular/core';
import {UyeService} from '../uye.service';

@Component({
    selector: 'app-my-home-page',
    templateUrl: './my-home-page.component.html',
    styleUrls: ['./my-home-page.component.css']
})
export class MyHomePageComponent implements OnInit {
    public uyeList: any;

    constructor(private uyeService: UyeService) {
    }

    ngOnInit() {
        this.uyeService.getAllUye()
            .subscribe(data => {
                this.uyeList = data;
            });
    }

}
