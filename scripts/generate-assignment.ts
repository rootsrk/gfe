#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Type definitions
interface AssignmentConfig {
  assignmentName: string;
  kebabCaseName: string;
  titleCaseName: string;
  pascalCaseName: string;
  componentName: string;
  folderName: string;
  nextNumber: number;
  currentDate: string;
  assignmentPath: string;
}

// Utility functions
const toKebabCase = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
};

const toTitleCase = (kebabStr: string): string => {
  return kebabStr
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const toPascalCase = (kebabStr: string): string => {
  return kebabStr
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

const findNextAssignmentNumber = (assignmentsDir: string): number => {
  const existingAssignments = fs.readdirSync(assignmentsDir)
    .filter(dir => fs.statSync(path.join(assignmentsDir, dir)).isDirectory())
    .filter(dir => /^\d{2}-/.test(dir))
    .map(dir => parseInt(dir.split('-')[0]))
    .sort((a, b) => a - b);

  return existingAssignments.length > 0 ? Math.max(...existingAssignments) + 1 : 1;
};

// Get the assignment name from command line arguments
const assignmentName: string = process.argv[2];

if (!assignmentName) {
  console.error('❌ Please provide an assignment name');
  console.log('Usage: npm run generate:assignment "assignment-name"');
  process.exit(1);
}

// Setup assignment configuration
const assignmentsDir = path.join(__dirname, '../src/assignments');
const kebabCaseName = toKebabCase(assignmentName);
const titleCaseName = toTitleCase(kebabCaseName);
const pascalCaseName = toPascalCase(kebabCaseName);
const componentName = `${pascalCaseName}Component`;
const nextNumber = findNextAssignmentNumber(assignmentsDir);
const paddedNumber = nextNumber.toString().padStart(2, '0');
const folderName = `${paddedNumber}-${kebabCaseName}`;
const assignmentPath = path.join(assignmentsDir, folderName);
const currentDate = new Date().toISOString().split('T')[0];

const config: AssignmentConfig = {
  assignmentName,
  kebabCaseName,
  titleCaseName,
  pascalCaseName,
  componentName,
  folderName,
  nextNumber,
  currentDate,
  assignmentPath
};

// Create the assignment folder
if (fs.existsSync(assignmentPath)) {
  console.error(`❌ Assignment folder ${folderName} already exists`);
  process.exit(1);
}

fs.mkdirSync(assignmentPath, { recursive: true });

// Template generation function
const generateTemplates = (config: AssignmentConfig): Record<string, string> => ({
  'metadata.ts': `export const metadata = {
  title: "${config.titleCaseName}",
  description: "A reusable ${config.titleCaseName.toLowerCase()} component with modern design and functionality",
  difficulty: "Medium",
  tags: ["React", "TypeScript", "Tailwind CSS"],
  dateCreated: "${config.currentDate}",
};`,

  'index.tsx': `import { ${config.componentName} } from "../../components/${config.componentName}";
import { metadata } from "./metadata";
import ReactMarkdown from "react-markdown";
import readmeContent from "./README.md?raw";

// Sample test data - customize based on your component's props
const testData = [
  {
    id: "1",
    // Add sample props here based on your component
  },
  {
    id: "2",
    // Add more sample data
  },
];

export default function ${config.pascalCaseName}Assignment() {
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
            <div className="grid grid-cols-1 gap-6">
              {/* Replace with your component implementation */}
              <div className="p-4 border border-dashed border-gray-300 rounded-lg text-center text-gray-500">
                <p>Implement your {metadata.title} component here</p>
                <p className="text-sm mt-2">
                  Create the component at: src/components/${config.componentName}.tsx
                </p>
              </div>
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
}`,

  'README.md': `# ${config.titleCaseName}

## Overview

This assignment focuses on creating a reusable ${config.titleCaseName.toLowerCase()} component with modern design and functionality.

## Requirements

- Create a responsive ${config.titleCaseName.toLowerCase()} component
- Clean and modern design
- Proper TypeScript types
- Responsive design that works on mobile and desktop
- Accessible and user-friendly interface

## Learning Objectives

- Component composition in React
- Props and TypeScript interfaces
- CSS styling with Tailwind CSS
- Responsive design principles
- State management (if applicable)

## Implementation Details

The component should accept the following props:

- \`className\`: Optional additional CSS classes
- Add other props as needed for your specific component

## Design Considerations

- Use appropriate spacing and typography
- Ensure good contrast for accessibility
- Consider hover states and interactions
- Make it reusable across different contexts

## Nice to Know

### Advanced Features

Add any advanced implementation details, patterns, or techniques used in this component.

## Testing

Run the tests with:

\`\`\`bash
npm test -- ${config.componentName}
\`\`\`

## Storybook

View the component in Storybook:

\`\`\`bash
npm run storybook
\`\`\``,

  [`${config.componentName}.test.tsx`]: `import { render, screen } from '@testing-library/react';
import { ${config.componentName} } from '../../components/${config.componentName}';

describe('${config.componentName}', () => {
  const mockProps = {
    // Add your component's required props here
  };

  it('renders ${config.titleCaseName.toLowerCase()} component', () => {
    render(<${config.componentName} {...mockProps} />);
    
    // Add your test assertions here
    expect(screen.getByRole('region')).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    const { container } = render(
      <${config.componentName} {...mockProps} className="custom-class" />
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders without crashing when minimal props provided', () => {
    render(<${config.componentName} {...mockProps} />);
    
    // Should not crash
    expect(screen.getByRole('region')).toBeInTheDocument();
  });
});`,

  [`${config.componentName}.stories.tsx`]: `import type { Meta, StoryObj } from '@storybook/react';
import { ${config.componentName} } from '../../components/${config.componentName}';

const meta: Meta<typeof ${config.componentName}> = {
  title: 'Assignments/${config.componentName}',
  component: ${config.componentName},
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A reusable ${config.titleCaseName.toLowerCase()} component with modern design and functionality.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    // Add other prop controls here
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};

export const WithCustomStyling: Story = {
  args: {
    className: 'border-2 border-blue-500 shadow-lg',
    // Add other props
  },
};

export const Multiple: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <${config.componentName} />
      <${config.componentName} />
      <${config.componentName} />
    </div>
  ),
};`
});

// Generate templates
const templates = generateTemplates(config);

// Create all files
Object.entries(templates).forEach(([filename, content]) => {
  const filePath = path.join(assignmentPath, filename);
  fs.writeFileSync(filePath, content);
});

// Create the component stub in the components directory
const componentsDir = path.join(__dirname, '../src/components');
const componentFilePath = path.join(componentsDir, `${componentName}.tsx`);

if (!fs.existsSync(componentFilePath)) {
  const componentTemplate = `interface ${componentName}Props {
  className?: string;
  // Add other props as needed
}

export function ${componentName}({ className, ...props }: ${componentName}Props) {
  return (
    <div 
      role="region" 
      className={\`p-4 border rounded-lg \${className || ''}\`}
      {...props}
    >
      <h3 className="text-lg font-semibold mb-2">${titleCaseName}</h3>
      <p className="text-gray-600">
        This is a placeholder for the ${titleCaseName} component. 
        Implement your component logic here.
      </p>
    </div>
  );
}`;

  fs.writeFileSync(componentFilePath, componentTemplate);
  console.log(`✅ Created component: src/components/${componentName}.tsx`);
}

console.log(`🎉 Assignment "${folderName}" created successfully!`);
console.log(`📁 Location: src/assignments/${folderName}/`);
console.log(`📋 Files created:`);
console.log(`   - index.tsx`);
console.log(`   - metadata.ts`);
console.log(`   - README.md`);
console.log(`   - ${componentName}.test.tsx`);
console.log(`   - ${componentName}.stories.tsx`);
console.log(`🔧 Component stub created: src/components/${componentName}.tsx`);
console.log(`\n📝 Next steps:`);
console.log(`   1. Implement your component in src/components/${componentName}.tsx`);
console.log(`   2. Update the test data in the index.tsx file`);
console.log(`   3. Customize the README.md with specific requirements`);
console.log(`   4. Add proper tests and stories`);
console.log(`   5. Run the dev server to see your assignment`);
