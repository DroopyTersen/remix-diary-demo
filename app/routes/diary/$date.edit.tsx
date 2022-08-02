import { ActionFunction, redirect } from "@remix-run/node";
import { Form, Link, useLoaderData, useParams } from "@remix-run/react";
import { fakeDiaryEntries } from "~/fakeDiaryEntries";
import { DiaryFormFields } from "~/features/diary/DiaryFormFields";
export const loader = ({ params }) => {
  return fetch(`${process.env.API_URL}/diary/${params.date}`);
};
export default function DiaryEditRoute() {
  let entry = useLoaderData();

  return (
    <Form method="post">
      <div className="header">
        <h1>Edit: {entry.date}</h1>
        <div>
          <Link prefetch="intent" to={"../" + entry.date}>
            Cancel
          </Link>
          <button style={{ marginLeft: "20px" }}>Save</button>
        </div>
      </div>
      <DiaryFormFields initial={entry} />
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
