export interface DropdownProps {
  label: string;
  options: string[];
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}