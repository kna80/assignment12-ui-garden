import type { Meta, StoryObj } from "@storybook/react-webpack5";
import HeroImage from "./HeroImage";

const meta = {
  title: "Components/HeroImage",
  component: HeroImage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
    subtitle: {
      control: "text",
    },
    src: {
      control: "text",
    },
    alt: {
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
} satisfies Meta<typeof HeroImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://picsum.photos/1200/500",
    alt: "Beautiful landscape",
    title: "Welcome to UI Garden",
    subtitle: "Explore our reusable React components",
    backgroundColor: "lightblue",
    textColor: "black",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: "https://picsum.photos/1200/500",
    alt: "Disabled landscape",
    title: "Disabled Hero Image",
    subtitle: "This component is disabled",
    backgroundColor: "lightblue",
    textColor: "black",
    disabled: true,
  },
};