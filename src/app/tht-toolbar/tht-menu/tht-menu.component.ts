import { Component, EventEmitter, Output } from '@angular/core';

import { Router } from '@angular/router';

@Component({
    selector: 'tht-menu',
    // other possible ways of referencing the selector
    // selector: '[tht-menu]' --> referenced in html as <div tht-menu></div>
    // selector: '.tht-menu' --> referenced in html as <div class='tht-menu'></div>
    // When using it as a component, best practice is to use the uncommented way
    templateUrl: './tht-menu.component.html',
    styleUrls: ['./tht-menu.component.css']
})

// example class made during tutorial
// export class ThtMenuComponent {
//     allowNewMenuItem = false;
//     addNewMenuItem = 'No new item could be added at this time';
//     menuItemName = '';
//     menuItemCreated = false;

//     constructor () {
//         // ES6 syntax () => is essentially the same as function() with some differences in use of this-keyword.
//         setTimeout( () => {
//             this.allowNewMenuItem = true;
//         }, 2000)
//     }

//     icon: string = "restaurant";
//     menuItem: string = "Food";

//     getMenuContent() {
//         return this.menuItem;
//     }

//     onAddNewMenuItem() {
//         this.menuItemCreated = true;
//         this.addNewMenuItem = "Menu item has been added, " + this.menuItemName  + " thank you"; 
//     }

//     onUpdateMenuItemName(event :any) {
//         this.menuItemName = event.target.value;
//     }

// }

export class ThtMenuComponent {
    menuChoice:string = '';
    @Output()  menuItemChosen = new EventEmitter<{chosenMenuItem:string}>();

    constructor(private router: Router) {}
    
    navigateTo(event:any) {
        this.menuChoice = event.target.textContent;
        this.menuItemChosen.emit({
            chosenMenuItem: this.menuChoice
        });
        console.log(this.menuChoice);
        this.router.navigate([this.menuChoice]);
    }
}