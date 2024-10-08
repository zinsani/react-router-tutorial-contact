import {
  Form,
  useLoaderData,
  redirect,
  useNavigate,
  ActionFunction,
} from "react-router-dom";
import { updateContact } from "../contacts";
import { ContactDTO } from "../types";

export const action: ActionFunction = async ({ request, params }) => {
  if (!params.contactId) return;

  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
};

export default function EditContact() {
  const { contact } = useLoaderData() as { contact?: ContactDTO };
  const navigate = useNavigate();

  return (
    <Form method="post" id="contact-form" data-testid="contact-form">
      <p>
        <span>Name</span>
        <input
          role="input"
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact?.first}
        />
        <input
          role="input"
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact?.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          role="input"
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact?.twitter}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          role="input"
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact?.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          role="input"
          name="notes"
          defaultValue={contact?.notes}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate(-1)}>
          Cancel
        </button>
      </p>
    </Form>
  );
}
