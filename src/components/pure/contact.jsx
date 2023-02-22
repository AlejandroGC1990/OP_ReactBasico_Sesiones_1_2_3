import React from 'react';
import PropTypes from 'prop-types';
import  { Contact } from '../../models/contact.class.js';

const ContactComponent = ({ contact }) => {

    return (
        <div>
            <h2>
                Name: { contact.name }
            </h2>
            <h3>
                Description: { contact.description}
            </h3>
            <h4>
                Email: { contact.email }
            </h4>
            <h5>
                This contact is: { contact.online ? 'ONline' : 'OFFline' }
            </h5>
        </div>
    );
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};

export default ContactComponent;
