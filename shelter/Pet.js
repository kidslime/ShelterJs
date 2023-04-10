export class Pet {
    constructor({id, name, img, type, breed, description, age, inoculations, diseases, parasites}) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.type = type;
        this.breed = breed;
        this.description = description;
        this.age = age;
        this.inoculations = inoculations;
        this.diseases = diseases;
        this.parasites = parasites;
    }
   

    generateArticle() {
        let template = '';
        let pet = document.createElement('div');
        pet.setAttribute('id', this.id);

        this.img &&
        (template += `<img src="${this.img}" alt="">`)
    }
}