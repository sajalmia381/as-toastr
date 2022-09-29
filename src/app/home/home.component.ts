import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button"
import { AsToastrService } from 'as-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private toastr: AsToastrService) { }

  ngOnInit(): void {
  }

  openToastr(type: string): void {
    let icon: string = "success";
    let title: string = "Success"
    let msg: string = "Hi, This is success!"
    switch (type) {
      case "error": {
        icon = "error"
        title = "Failed"
        msg = "Hi, This is Error!"
        break
      }
      case "warn": {
        title = "Warn"
        icon = "warn"
        msg = "Hi, This is warn!"
        break
      }
      case "notification": {
        icon = "notification"
        title = "Notification"
        msg = "Hi, This is notification!"
        break
      }
    }
    this.toastr.open(
      { title, icon, message: msg }
    )
  }
}
