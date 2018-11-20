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
    {{ course2.title | uppercase }} <br />
    {{ course2.students | number }} <br />
    {{ course2.rating | number:'1.1-1' }} <br />
    {{ course2.price | currency: 'USD':true:'1.2-2' }} <br />
    {{ course2.releaseDate | date:'shortDate' }} <br />
    {{ text | summary:10 }}
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

  course2 = {
    title: "Angular course",
    rating: 4.534,
    students:3038854,
    price: 1500000.98,
    releaseDate: new Date(2016, 3, 1)
  }
  text = `
  Sed malesuada euismod nisi, sit amet faucibus mi. Quisque malesuada leo id neque pretium efficitur. Sed feugiat ac lorem nec elementum. Nunc non semper erat, gravida pellentesque tortor. Sed sollicitudin eu nibh sed accumsan. Ut non dui nibh. Nulla feugiat dui eu diam rhoncus, vel lobortis erat scelerisque. Maecenas consectetur velit dui, vitae commodo velit laoreet a. Morbi mollis elit convallis sem congue hendrerit. Quisque lacinia auctor magna non rhoncus. Aenean sed metus diam. Integer tristique in mi ut mattis. Duis sit amet accumsan est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
