// Elaborate but good for beginning
// export class Recipe {
//     public name         : string;
//     public description  : string;
//     public imagePath    : string;

//     constructor(name:string, desc:string, imagePath: string) {
//         this.name           = name;
//         this.description    = desc;
//         this.imagePath      = imagePath;
//     }
// }

// Much more shorthand notation
export class Recipe {
    constructor(public recipe_name  :string,
                public description  :string,
                public imagePath    :string,
                public ingredients  : object,
                public category     : string,
                public id           : number,
                public user         : string,
                public date_created  : string,
                public date_updated  : string,
                public username      : string) {
    }
}