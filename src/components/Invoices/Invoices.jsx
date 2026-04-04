import { Form, useActionData } from "react-router-dom";

export async function action({ request }) {
  const body = await request.formData();
  const name = body.get("visitorsName");

  return { message: `Hello, ${name}` };
}

export default function Invoices() {
  const data = useActionData();

  return (
    <Form method="post">
      <input className="border-2" name="visitorsName" />
      <button className="bg-amber-600 px-3.5" type="submit">
        Submit
      </button>

      <p>{data ? data.message : "Waiting..."}</p>
    </Form>
  );
}