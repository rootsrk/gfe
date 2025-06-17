import { TestimonialCard } from "../components/TestimonialCard";

export const metadata = {
  title: "Testimonial Card",
  description:
    "A reusable testimonial card component with image, title, subtitle, and content",
  difficulty: "Easy",
  tags: ["React", "TypeScript", "Tailwind CSS"],
  dateCreated: "2025-06-17",
};

const testData = [
  {
    id: "1",
    imageUrl: "https://i.pravatar.cc/48",
    title: "Sarah Dole",
    subtitle: "@sarahdole",
    content:
      "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  },
  {
    id: "2",
    imageUrl: "https://i.pravatar.cc/48",
    title: "John Doe",
    subtitle: "@johndoe",
    content:
      "This platform has transformed my design workflow. The abstract images are not only beautiful but also incredibly versatile for various projects.",
  },
  {
    id: "3",
    imageUrl: "https://i.pravatar.cc/48",
    title: "Jane Smith",
    subtitle: "@janesmith",
    content:
      "As a designer, I appreciate the quality and uniqueness of the images available here. They add a special touch to my work.",
  },
];

export default function TestimonialCardAssignment() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{metadata.title}</h1>
        <p className="text-gray-600 mb-4">{metadata.description}</p>
        <div className="flex gap-2 mb-4">
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            {metadata.difficulty}
          </span>
          {metadata.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Preview</h2>
        <div className="border rounded-lg p-6 bg-gray-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testData.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                imageUrl={testimonial.imageUrl}
                title={testimonial.title}
                subtitle={testimonial.subtitle}
                content={testimonial.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
