import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: "courses",
  // <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />
  template: `
    <h2>{{ title }}</h2>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    <img [src]="imageUrl" />
    <ul>
      <li *ngFor="let course of courses">
      {{ course }}
      </li>
    </ul>
    <table> 
      <tr>
        <td [attr.colspan]="colSpan"></td> 
      </tr>
    </table>
    <div (click)="onDivClicked()">
      <button (click)="onSave($event)" class="btn btn-primary" [class.active]="isActive">Save</button>
    </div>
    <button class="btn" [class.btn-primary]="isActive" [class.btn-danger]="!isActive">Enter</button>
    `
})
export class CoursesComponent {
  title = "List of courses";
  imageUrl = "http://picsum.photos/300/400";
  courses;
  colSpan = 2;
  isActive=false;
  email = "shithead@shit.com";
  onSave = ($event) => {
    $event.stopPropagation();
    console.log("button was clicked", $event);
  }
  onDivClicked = () => console.log("Div was clicked");
  onKeyUp = () => console.log(this.email);

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
