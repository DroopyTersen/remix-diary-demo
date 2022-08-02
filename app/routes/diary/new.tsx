import { ActionFunction, redirect } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import { DiaryFormFields } from "~/features/diary/DiaryFormFields";

export default function DiaryNewRoute() {
  return (
    <Form method="post">
      <div className="header">
        <h1>New Entry</h1>
        <div>
          <Link to={".."}>Cancel</Link>
          <button style={{ marginLeft: "20px" }}>Save</button>
        </div>
      </div>
      <DiaryFormFields />
    </Form>
  );
}

export const action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  await fetch(`${process.env.API_URL}/diary`, {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  return redirect("/diary/" + formData.get("date"));
};
