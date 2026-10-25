import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import RadioButton from "./RadioButton";

const meta = {
  title: "Components/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    backgroundColor: {
      control: "color",
    },
    textColor: {
      control: "color",
    },
    disabled: {
      control: "boolean",
    },
    checked: {
      control: "boolean",
    },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Select React",
    name: "course",
    value: "react",
    backgroundColor: "lightblue",
    textColor: "black",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Radio",
    name: "course",
    value: "react",
    backgroundColor: "lightblue",
    textColor: "black",
    disabled: true,
  },
};