import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],

  argTypes: {
    label: {
      control: "text",
    },
    backgroundColor: {
      control: "color",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Click Me",
    backgroundColor: "blue",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    backgroundColor: "blue",
    disabled: true,
  },
};