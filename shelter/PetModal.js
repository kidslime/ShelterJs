

export class PetModal extends Modal {
    constructor(classes, {id, name, img, type, breed, description, age, inoculations, diseases, parasites}) {
        super(classes);
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

    generateContent() {
        let template = '';
        let pet = document.createElement('div');
        pet.setAttribute('id', this.id);

        this.img &&
        (template += `<img src="${this.img}" alt="">`)

        template += `<div>`
        template += `<h1>${this.name}</h1>`
        template += `<div>`
        pet.innerHTML = template;
        return content;
    }

    renderModal() {
        let content = this.generateContent();
        super.buildModal(content);
    }
}