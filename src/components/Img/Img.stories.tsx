import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Img from "./Img";

const meta = {
  title: "Components/Img",
  component: Img,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
    },
    alt: {
      control: "text",
    },
    width: {
      control: "text",
    },
    height: {
      control: "text",
    },
    backgroundColor: {
      control: "color",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Img>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://picsum.photos/400/300",
    alt: "Sample Image",
    width: "250px",
    height: "180px",
    backgroundColor: "lightblue",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: "https://picsum.photos/400/300",
    alt: "Disabled Sample Image",
    width: "250px",
    height: "180px",
    backgroundColor: "lightblue",
    disabled: true,
  },
};