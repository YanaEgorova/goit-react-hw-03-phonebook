import React from 'react';
import ContacttItem from '../ContacttItem';

export default function ContactList({
  onDeleteContact,
  contacts
}) {
  return ( <
    ul > {
      ' '
    } {
      contacts.map(contact => ( <
        ContacttItem key = {
          contact.id
        }
        contact = {
          contact
        }
        onDelete = {
          onDeleteContact
        }
        />
        // <li key={contact.id}>
        //     {' '}
        //     {contact.name}: {contact.number}{' '}
        //     <button onClick={() => onDeleteContact(contact.id)}>
        //         {' '}
        //         Delete{' '}
        //     </button>{' '}
        // </li>
      ))
    } {
      ' '
    } <
    /ul>
  );
}