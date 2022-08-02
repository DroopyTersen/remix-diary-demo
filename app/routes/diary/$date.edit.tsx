import { Link, useParams } from "@remix-run/react";
import { fakeDiaryEntries } from "~/fakeDiaryEntries";
import { DiaryFormFields } from "~/features/diary/DiaryFormFields";

export default function DiaryEditRoute() {
  let { date } = useParams();
  let entry = fakeDiaryEntries.find((entry) => entry.date === date);
  return (
    <form>
      <div className="header">
        <h1>Edit: {date}</h1>
        <div>
          <Link to={"../" + date}>Cancel</Link>
          <button style={{ marginLeft: "20px" }}>Save</button>
        </div>
      </div>
      <DiaryFormFields initial={entry} />
    </form>
  );
}
