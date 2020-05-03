import React from 'react';


export default function ContactList({
  onDelete,
  contact: {
    name,
    number,
    id
  }
}) {

  const onDeleteContact = () => onDelete(id)


  return (


    <
    li > {
      ' '
    } {
      name
    }: {
      number
    } {
      ' '
    } <
    button onClick = {
      onDeleteContact
    } > {
      ' '
    }
    Delete {
      ' '
    } <
    /button>{' '} <
    /li>

  );
}