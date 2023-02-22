export class Contact {
    name = '';
    descripcion = '';
    email = '';
    online = false;

    constructor(name, description, email, online) {
        this.name = name;
        this.description = description;
        this.email = email;
        this.online = online
    }
    
}