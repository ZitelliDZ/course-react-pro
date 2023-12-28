import { MyLabel, PropsMyLabel } from "../../../components/MyLabel/MyLabel";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Components/MyLabel",
  component: MyLabel,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["normal", "h1", "h2", "h3"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary", "tertiary"],
      },
    },
    fontColor: {
      control: {
        type: "color",
      },
    },
  },
} as Meta<typeof MyLabel>;

const Template: Story<PropsMyLabel> = (args) => <MyLabel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  size: "normal",
  allCaps: false,
  color: "primary",
  fontColor: "#2C2C5C",
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "normal",
  allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "normal",
  color: "secondary",
};
export const Tertiary = Template.bind({});
Tertiary.args = {
  size: "normal",
  color: "tertiary",
};
