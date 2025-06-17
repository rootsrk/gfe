// This function will be used to dynamically import assignment components
// In a real Vite app, we can use import.meta.glob to get all assignment files

export interface Assignment {
  id: string;
  name: string;
  path: string;
  component: () => Promise<{ default: React.ComponentType; metadata?: AssignmentMetadata }>;
}

export interface AssignmentMetadata {
  title: string;
  description: string;
  difficulty: string;
  tags: string[];
  dateCreated: string;
}

export interface AssignmentWithMetadata extends Assignment {
  metadata: AssignmentMetadata;
}

// Use Vite's import.meta.glob to dynamically discover assignment files
const assignmentModules = import.meta.glob("./01-*.tsx");

export const getAssignments = (): Assignment[] => {
  return Object.keys(assignmentModules).map((path) => {
    // Extract filename from path (e.g., './01-testimonial-card.tsx' -> '01-testimonial-card')
    const filename = path.replace("./", "").replace(".tsx", "");

    // Extract the name part (e.g., '01-testimonial-card' -> 'testimonial-card')
    const nameParts = filename.split("-").slice(1);
    const name = nameParts.join("-");

    return {
      id: filename,
      name,
      path: `/${filename}`,
      component: assignmentModules[path] as () => Promise<{
        default: React.ComponentType;
        metadata?: AssignmentMetadata;
      }>,
    };
  });
};

export const getAssignmentWithMetadata = async (assignment: Assignment): Promise<AssignmentWithMetadata> => {
  const module = await assignment.component();
  
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
    metadata: module.metadata || defaultMetadata,
  };
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
