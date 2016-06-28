import { Component } from '@angular/core';
import { CoursesComponent } from './courses.component'
import { AuthorsComponent } from './authors.component'

// Property binding works only one way
// Class binding is the way to bind property value to class

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ title }}</h1>
        <img src='{{image}}' width='{{size}}' height='{{size}}'>
        <button class='btn btn-primary' [style.backgroundColor]="isActive ? 'green' : 'blue'" >submit</button>
        <courses></courses>
        <authors></authors>`,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent {
    private title: string = "My first Angualr 2 App";
    private image: string = "https://images.unsplash.com/photo-1465205568425-23fdd3805e49";
    private size: number = 400;
    private isActive: boolean = true;
}