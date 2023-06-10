export interface ScheduleProps {
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
}

export interface IDateArray {
  key: number | string;
  month: string | number
  year: string | number
  date: string | number
}
