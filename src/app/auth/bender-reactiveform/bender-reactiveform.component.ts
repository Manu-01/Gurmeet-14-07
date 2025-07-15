import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountryServiceService } from '../../shared/country-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { debug } from 'console';

@Component({
  selector: 'app-bender-reactiveform',
  templateUrl: './bender-reactiveform.component.html',
  styleUrl: './bender-reactiveform.component.scss',
})
export class BenderReactiveformComponent implements OnInit {
  country: any=null;
  state: any;
  city: any;
  stateCode: any;
  countryCode: any;
  constructor(private service: CountryServiceService) {}

  myForm = new FormGroup({
    country: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl(''),
  });

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry() {
    this.service.getCountry().subscribe((country) => {
      this.country = country;
    });
  }

  onSelectedChangeCountry(event: any) {
    this.service.getStatedata(event.target.value).subscribe((stateData) => {
      this.state = stateData;
      this.stateCode = this.state.stateCode;
      this.countryCode = event.target.value;
    });
  }
  onSelectedChangeState(event: any) {
    this.service
      .getCity(this.countryCode, event.target.value)
      .subscribe((citydata) => {
        this.city = citydata;
        console.log(this.city);
      });
  }
}
