import { Link, useLoaderData, useParams } from "@remix-run/react";
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
    </>
  );
}
