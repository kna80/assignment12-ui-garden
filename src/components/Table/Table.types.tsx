export interface TableProps {
  headers: string[];
  rows: string[][];
  footer?: string;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
}