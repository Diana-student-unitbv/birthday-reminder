import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BirthdayService } from '../services/birthday.service';
import { BirthDay } from '../birthday';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userId: number;
  bds: BirthDay[];

  constructor(private route: ActivatedRoute, private bdService: BirthdayService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.userId = id;
      this.bdService.getForUser(this.userId).subscribe((bds) => {
        this.bds = bds;
      })
    });
  }
}