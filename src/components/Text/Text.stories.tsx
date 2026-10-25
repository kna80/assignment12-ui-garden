import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Text from "./Text";

const meta = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
    },
    color: {
      control: "color",
    },
    backgroundColor: {
      control: "color",
    },
    fontSize: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "This is a Text Component",
    color: "black",
    backgroundColor: "lightblue",
    fontSize: "16px",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: "This Text Component is Disabled",
    color: "black",
    backgroundColor: "lightblue",
    fontSize: "16px",
    disabled: true,
  },
};