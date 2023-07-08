import React from "react";

export interface ICurrentMontProp {
  number: number;
  string: string;
}

export interface IOnClickAddNote {
  note: string | undefined;
  date: string | undefined;
}

export interface IOnClickRemoveNote {
  date: string | undefined;
}
export interface IScheduleProps {
  currentMonthProp?: ICurrentMontProp;
  setCurrentMonthProps?: React.Dispatch<React.SetStateAction<ICurrentMontProp>>;
  onClickAdd?: Function;
  onClickClear?: Function;
  onClickClose?: Function;
  onClickDay?: Function;
  onClickPreviousMonth?: Function;
  onClickNextMonth?: Function;
  onClickAddNote?: ((item: IOnClickAddNote) => React.ReactNode) | undefined;
  onClickRemoveNote?:
    | ((item: IOnClickRemoveNote) => React.ReactNode)
    | undefined;
}

export interface IDateArray {
  key: number | string;
  day: string | undefined;
  month: number;
  year: number;
  date: string | number;
}
