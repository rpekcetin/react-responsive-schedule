import { IDateArray } from "../../../types/types";

export interface INoteProps {
  selectedDay: IDateArray;
  noteVisibility: boolean;
  setNoteVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  month: number;
  year: number;
}
