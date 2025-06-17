// This function will be used to dynamically import assignment components
// In a real Vite app, we can use import.meta.glob to get all assignment files

export interface Assignment {
  id: string;
  name: string;
  path: string;
  component: () => Promise<{ default: React.ComponentType }>;
  metadata: () => Promise<{ metadata: AssignmentMetadata }>;
}

export interface AssignmentMetadata {
  title: string;
  description: string;
  difficulty: string;
  tags: string[];
  dateCreated: string;
}

export interface AssignmentWithMetadata {
  id: string;
  name: string;
  path: string;
  component: () => Promise<{ default: React.ComponentType }>;
  metadata: AssignmentMetadata;
}

// Use Vite's import.meta.glob to dynamically discover assignment folders
const assignmentModules = import.meta.glob("./*/index.tsx");
const assignmentMetadata = import.meta.glob("./*/metadata.ts");

export const getAssignments = (): Assignment[] => {
  return Object.keys(assignmentModules).map((path) => {
    // Extract folder name from path (e.g., './01-testimonial-card/index.tsx' -> '01-testimonial-card')
    const folderName = path.replace("./", "").replace("/index.tsx", "");

    // Extract the name part (e.g., '01-testimonial-card' -> 'testimonial-card')
    const nameParts = folderName.split("-").slice(1);
    const name = nameParts.join("-");

    // Find corresponding metadata file
    const metadataPath = `./${folderName}/metadata.ts`;

    return {
      id: folderName,
      name,
      path: `/${folderName}`,
      component: assignmentModules[path] as () => Promise<{ default: React.ComponentType }>,
      metadata: (assignmentMetadata[metadataPath] || (() => Promise.resolve({ metadata: {} }))) as () => Promise<{ metadata: AssignmentMetadata }>
    };
  });
};

export const getAssignmentWithMetadata = async (assignment: Assignment): Promise<AssignmentWithMetadata> => {
  try {
    const metadataModule = await assignment.metadata();
    return {
      ...assignment,
      metadata: metadataModule.metadata,
    };
  } catch {
    // Return default metadata if file doesn't exist
    const defaultMetadata: AssignmentMetadata = {
      title: assignment.name
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      description: `Assignment: ${assignment.name}`,
      difficulty: "Medium",
      tags: ["React", "TypeScript"],
      dateCreated: new Date().toISOString().split("T")[0],
    };

    return {
      ...assignment,
      metadata: defaultMetadata,
    };
  }
};

export const getAssignmentsWithMetadata = async (): Promise<AssignmentWithMetadata[]> => {
  const assignments = getAssignments();
  return Promise.all(assignments.map(getAssignmentWithMetadata));
};

export const getAssignmentComponent = async (id: string) => {
  const assignment = getAssignments().find((a) => a.id === id);
  if (!assignment) return null;

  const module = await assignment.component();
  return module.default;
};
