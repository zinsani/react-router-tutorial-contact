import { ContactDTO } from "../../types";
import { NavLink } from "react-router-dom";

type Props = {
  contacts: ContactDTO[] | undefined;
};

function ContactList({ contacts }: Props) {
  return (
    <>
      {(contacts ?? []).length ? (
        <ul>
          {(contacts ?? []).map((contact) => (
            <li key={contact.id} data-testid="contact-item">
              <NavLink
                to={`contacts/${contact.id}`}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                {contact.first || contact.last ? (
                  <>
                    {contact.first} {contact.last}
                  </>
                ) : (
                  <i>No Name</i>
                )}{" "}
                {contact.favorite && <span>★</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          <i>No contacts</i>
        </p>
      )}
    </>
  );
}

export default ContactList;
