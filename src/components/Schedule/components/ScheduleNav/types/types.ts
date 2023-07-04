import { ICurrentMontProp, IDateArray } from "../../../types/types";

export interface IScheduleNavProps {
  years: number;
  month: number;
  setMonth: React.Dispatch<React.SetStateAction<number>>;
  setYears: React.Dispatch<React.SetStateAction<number>>;
  setAnimate: React.Dispatch<
    React.SetStateAction<"animate-prev" | "animate-next" | "">
  >;
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<"dark" | "light" | "">>;
  onClickPreviousMonth?: Function;
  onClickNextMonth?: Function;
  currentMonth?: ICurrentMontProp;
  setCurrentMonth?: React.Dispatch<React.SetStateAction<ICurrentMontProp>>;
}
