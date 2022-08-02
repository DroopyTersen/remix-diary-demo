import type { DiaryEntry } from "~/fakeDiaryEntries";

interface Props {
  initial?: DiaryEntry;
}
export function DiaryFormFields({ initial }: Props) {
  return (
    <div>
      <label>
        Date
        <input
          type="date"
          name="date"
          defaultValue={initial?.date || ""}
          required
        />
      </label>
      <label>
        Entry
        <textarea
          name="content"
          defaultValue={initial?.content || ""}
          required
          rows={8}
        />
      </label>
    </div>
  );
}
