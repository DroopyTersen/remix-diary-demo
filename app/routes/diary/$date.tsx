import { ActionFunction, redirect } from "@remix-run/node";
import { Form, Link, useLoaderData, useParams } from "@remix-run/react";
import { fakeDiaryEntries } from "~/fakeDiaryEntries";

export const loader = ({ params }) => {
  return fetch(`${process.env.API_URL}/diary/${params.date}`);
};
export default function DiaryEntryRoute() {
  let entry = useLoaderData();
  return (
    <>
      <div className="header">
        <h1>{entry.date}</h1>
        <Link to="edit" prefetch="intent" className="button">
          Edit
        </Link>
      </div>
      <pre>{entry.content}</pre>
      <Form
        method="delete"
        onSubmit={(e) => {
          if (!window.confirm("Are you sure you want to delete this entry?")) {
            e.preventDefault();
          }
        }}
      >
        <button className="error">Delete</button>
      </Form>
    </>
  );
}

export const action: ActionFunction = async ({ params }) => {
  let url = `${process.env.API_URL}/diary/${params.date}`;
  await fetch(url, { method: "DELETE" });
  return redirect("/diary");
};
