import { IDateArray } from "../../types/types";

export interface IScheduleNavProps {
  years: number;
  month: number;
  setMonth: React.Dispatch<React.SetStateAction<number>>;
  setYears: React.Dispatch<React.SetStateAction<number>>;
  setAnimate: React.Dispatch<React.SetStateAction<'animate-prev' | 'animate-next' | ''>>;
}
