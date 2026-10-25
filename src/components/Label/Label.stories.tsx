import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import Label from "./Label";

const meta = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
    },
    backgroundColor: {
      control: "color",
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Hello Label",
    backgroundColor: "blue",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: "Disabled Label",
    backgroundColor: "blue",
    disabled: true,
  },
};