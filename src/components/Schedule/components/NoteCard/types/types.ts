import { IDateArray, IOnClickAddNote } from "../../../types/types";

export interface INoteProps {
  selectedDay: IDateArray;
  noteVisibility: boolean;
  setNoteVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  month: number;
  year: number;
  currentNote: string;
  setCurrentNote: React.Dispatch<React.SetStateAction<string>>;
  mode: string;
  setClickedNote: React.Dispatch<React.SetStateAction<boolean>>;
  onClickAddNote?: ((item: IOnClickAddNote) => React.ReactNode) | undefined;
}
