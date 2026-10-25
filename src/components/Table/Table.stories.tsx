import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Table from "./Table";

const meta = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
    textColor: {
      control: "color",
    },
    disabled: {
      control: "boolean",
    },
    footer: {
      control: "text",
    },
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headers: ["ID", "Name", "Course"],
    rows: [
      ["1", "John", "React"],
      ["2", "Sarah", "TypeScript"],
      ["3", "Alex", "JavaScript"],
    ],
    footer: "Total Students: 3",
    backgroundColor: "white",
    textColor: "black",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    headers: ["ID", "Name", "Course"],
    rows: [
      ["1", "John", "React"],
      ["2", "Sarah", "TypeScript"],
      ["3", "Alex", "JavaScript"],
    ],
    footer: "Table Disabled",
    backgroundColor: "white",
    textColor: "black",
    disabled: true,
  },
};