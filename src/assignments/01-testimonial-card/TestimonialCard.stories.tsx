import type { Meta, StoryObj } from "@storybook/react";
import { TestimonialCard } from "../../components/TestimonialCard";

const meta: Meta<typeof TestimonialCard> = {
  title: "Assignments/TestimonialCard",
  component: TestimonialCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A reusable testimonial card component for displaying user testimonials with images and content.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    imageUrl: {
      control: "text",
      description: "URL for the user profile image",
    },
    title: {
      control: "text",
      description: "User display name",
    },
    subtitle: {
      control: "text",
      description: "Username or handle",
    },
    content: {
      control: "text",
      description: "Testimonial content",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: "https://i.pravatar.cc/48?img=1",
    title: "Sarah Dole",
    subtitle: "@sarahdole",
    content:
      "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  },
};

export const ShortContent: Story = {
  args: {
    imageUrl: "https://i.pravatar.cc/48?img=2",
    title: "John Doe",
    subtitle: "@johndoe",
    content: "Great platform!",
  },
};

export const LongContent: Story = {
  args: {
    imageUrl: "https://i.pravatar.cc/48?img=3",
    title: "Jane Smith",
    subtitle: "@janesmith",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
};

export const WithCustomStyling: Story = {
  args: {
    imageUrl: "https://i.pravatar.cc/48?img=4",
    title: "Alex Johnson",
    subtitle: "@alexj",
    content:
      "This testimonial card has custom styling applied to showcase flexibility.",
    className: "border-2 border-blue-500 shadow-lg",
  },
};

export const Multiple: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
      <TestimonialCard
        imageUrl="https://i.pravatar.cc/48?img=5"
        title="Emma Wilson"
        subtitle="@emmaw"
        content="Fantastic quality and easy to use. Highly recommended for any designer."
      />
      <TestimonialCard
        imageUrl="https://i.pravatar.cc/48?img=6"
        title="Michael Brown"
        subtitle="@mikeb"
        content="The variety of images available is incredible. Perfect for my projects."
      />
      <TestimonialCard
        imageUrl="https://i.pravatar.cc/48?img=7"
        title="Lisa Davis"
        subtitle="@lisad"
        content="Outstanding platform with beautiful, high-quality abstract images."
      />
    </div>
  ),
};
