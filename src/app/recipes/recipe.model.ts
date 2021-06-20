
//a model is  blue print for objects we create; here we use to describe how we want the recipe to look like in the main webpage
export class Recipe {
    public name: string; //the public keyword allows it to be used outside of the instantiated object
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }

}