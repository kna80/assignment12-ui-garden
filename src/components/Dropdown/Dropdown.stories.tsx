import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import Dropdown from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
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
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Choose a Course",
    options: ["React", "TypeScript", "JavaScript"],
    backgroundColor: "white",
    textColor: "black",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Choose a Course",
    options: ["React", "TypeScript", "JavaScript"],
    backgroundColor: "white",
    textColor: "black",
    disabled: true,
  },
};