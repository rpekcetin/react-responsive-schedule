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
  currentMonth?: string;
  setCurrentMonth?: React.Dispatch<
    React.SetStateAction<{ number: number; string: string }>
  >;
  onClickAdd?: Function;
  onClickClear?: Function;
  onClickClose?: Function;
  onClickDay?: Function;
  onClickPreviousMonth?: Function;
  onClickNextMonth?: Function;
}

export interface IDateArray {
  key: number | string;
  day: string | undefined;
  month: number;
  year: number;
  date: string | number;
}
