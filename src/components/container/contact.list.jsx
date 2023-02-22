import React, {useState} from 'react';
import { Contact } from '../../models/contact.class.js';
import ContactComponent from '../pure/contact';


const ContactListComponent = () => {

    const defaultContact = new Contact('Example', 'Default description', 'example@email.com', false);
    const [contact, setContact] = useState(defaultContact);

    function changeState() {
        console.log('TODO: Cambiar el estado de un contacto');
        setContact({...contact, online:!contact.online})
    };

    return (
        <div>
            <div>
                <h1> Your contact:</h1>
            </div>      
            {/* TODO: Aplicar un for/map para renderizar una lista */}
            <ContactComponent contact = { contact }/>
            <button onClick={changeState}>Actualizar estado</button>
        </div>
    );
};

export default ContactListComponent;
