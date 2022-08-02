import { Link } from "@remix-run/react";

export default function DiaryIndexRoute() {
  return (
    <>
      <h1>Diary Index</h1>
      <Link to="new" className="button">
        Create a new Diary Entry
      </Link>
    </>
  );
}
