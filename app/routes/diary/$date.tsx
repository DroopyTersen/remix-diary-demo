import { Link, useParams } from "@remix-run/react";
import { fakeDiaryEntries } from "~/fakeDiaryEntries";

export default function DiaryEntryRoute() {
  let { date } = useParams();
  let entry = fakeDiaryEntries.find((entry) => entry.date === date);
  return (
    <>
      <div className="header">
        <h1>{date}</h1>
        <Link to="edit" className="button">
          Edit
        </Link>
      </div>
      <pre>{entry.content}</pre>
    </>
  );
}
