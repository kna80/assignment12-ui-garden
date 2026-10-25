import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Card from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    imageUrl: {
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
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "React Card",
    description: "A reusable card component built with React.",
    imageUrl: "https://picsum.photos/400/250",
    backgroundColor: "white",
    textColor: "black",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: "Disabled Card",
    description: "This card is currently disabled.",
    imageUrl: "https://picsum.photos/400/250",
    backgroundColor: "white",
    textColor: "black",
    disabled: true,
  },
};