import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-event-booking',
  templateUrl: './event-booking.component.html',
  styleUrls: ['./event-booking.component.sass']
})
export class EventBookingComponent implements OnInit {
  bookingForm: any;
  submitted:boolean = false;
  state:any; 
  isbuttonDisabled:boolean = false;
  seatsOption:any = [
    {id:"1",name:"One"},
    {id:"2",name:"Two"},
    {id:"3",name:"Three"},
    {id:"4",name:"Four"},
    {id:"5",name:"Five"},
    {id:"6",name:"Six"},
  ]
  constructor(private fb: FormBuilder, private route: Router) {
    const navigation = this.route.getCurrentNavigation();
   this.state = navigation &&navigation.extras.state as {
    count: string,
    title:string
  };
   }
  ngOnInit() {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      noofseat: ['', [Validators.required, Validators.maxLength(this.state.count)]],
      attendees:this.fb.array([])
    });
  }
  getAttendees(): FormArray {
    return this.bookingForm.get('attendees') as FormArray;
  }
  newAttendees(): FormGroup {
    return this.fb.group({
      userName:['',[Validators.required]]
    });
  }
  addAttendees() {
    this.getAttendees().push(this.newAttendees());
  }
  //start new function f
  get f() { return this.bookingForm.controls; }

  bookingFunction() {
    this.submitted = true
    if (this.bookingForm.invalid) {
      return;
    }
    else {
      this.isbuttonDisabled = true
    }
    const loginData = this.bookingForm.value;
    console.log(loginData)
  }
  cancel(){
    this.route.navigate(["/events"]);
  }

}
