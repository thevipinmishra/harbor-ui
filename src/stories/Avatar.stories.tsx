import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@/components/ui/Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    fallback: "JD",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Avatar
        size="sm"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        fallback="SM"
      />
      <Avatar
        size="md"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        fallback="MD"
      />
      <Avatar
        size="lg"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        fallback="LG"
      />
    </div>
  ),
};

export const Fallback: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Avatar src="" fallback="JD" />
      <Avatar src="" fallback="AB" />
      <Avatar src="" fallback="VS" />
    </div>
  ),
};

export const WithImage: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Avatar
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        fallback="JD"
      />
      <Avatar
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?&w=128&h=128&dpr=2&q=80"
        fallback="AB"
      />
      <Avatar
        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?&w=128&h=128&dpr=2&q=80"
        fallback="VS"
      />
    </div>
  ),
};
