import { Meta } from "@storybook/react";
import StepItems, {
  StepItemProps,
} from "../../../../../components/molecules/StepItems";
export default {
  title: "Components/Atoms/Input",
  component: StepItems,
} as Meta;

const Template = (args: StepItemProps) => <StepItems {...args} />;

export const Default = Template.bind({});
Default.arguments = {
  title: "Super Mechs",
  category: "Mobile",
  thumbnail: "/img/Thumbnail-1.png",
};
