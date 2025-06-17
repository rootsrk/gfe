import { TestimonialCard } from "../../components/TestimonialCard";
import { metadata } from "./metadata";
import ReactMarkdown from "react-markdown";
import readmeContent from "./README.md?raw";

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

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Preview</h2>
          <div className="p-6 bg-gray-50 rounded-lg border">
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

        <div>
          <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
          <div className="bg-white border rounded-lg p-6">
            <div className="prose max-w-none">
              <ReactMarkdown 
                components={{
                  h1: ({children}) => <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-8 border-b border-gray-200 pb-2">{children}</h1>,
                  h2: ({children}) => <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">{children}</h2>,
                  h3: ({children}) => <h3 className="text-xl font-medium text-gray-700 mb-3 mt-5">{children}</h3>,
                  p: ({children}) => <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>,
                  ul: ({children}) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
                  li: ({children}) => <li className="text-gray-700">{children}</li>,
                  code: ({children, className}) => {
                    const isBlock = className?.includes('language-');
                    if (isBlock) {
                      return <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">{children}</code>;
                    }
                    return <code className="bg-gray-100 text-gray-900 px-1 py-0.5 rounded text-sm">{children}</code>;
                  },
                  pre: ({children}) => <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,
                }}
              >
                {readmeContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
