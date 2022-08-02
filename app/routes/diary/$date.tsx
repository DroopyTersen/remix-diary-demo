import { useParams } from "@remix-run/react";

export default function DiaryEntryRoute() {
  let { date } = useParams();
  return <h1>Diary Entry {date}</h1>;
}
