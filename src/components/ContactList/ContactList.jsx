import { Button } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}{' '}
        <Button onClick={() => onDeleteContact(id)}>Delete</Button>
      </li>
    ))}
  </ul>
);
