import { Meta } from "@storybook/react";
import MenuItem, {
  MenuItemProps,
} from "../../../../../components/molecules/MenuItems";

export default {
  title: "Components/Atoms/Input",
  component: MenuItem,
} as Meta;

const Template = (args: MenuItemProps) => <MenuItem {...args} />;

export const Default = Template.bind({});
Default.arguments = {
  title: "1. Start",
  icon: "step1",
  desc1: "Pilih salah satu game",
  desc2: "yang ingin kamu top up",
};
