export interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}