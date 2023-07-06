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
  label: string | undefined;
  id?: string | undefined;
  //children?: string | JSX.Element | JSX.Element[] | undefined
  className?: string | undefined;
  p?: string | undefined;
  pr?: string | undefined;
  pl?: string | undefined;
  pt?: string | undefined;
  pb?: string | undefined;
  m?: string | undefined;
  mr?: string | undefined;
  ml?: string | undefined;
  mt?: string | undefined;
  mb?: string | undefined;
  style?: React.CSSProperties | undefined;
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
