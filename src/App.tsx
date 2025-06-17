import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { AssignmentCard } from "./components/AssignmentCard";
import { getAssignmentsWithMetadata, getAssignmentComponent, type AssignmentWithMetadata } from "./assignments/utils";

function HomePage() {
  const navigate = useNavigate();
  const [assignments, setAssignments] = useState<AssignmentWithMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAssignments = async () => {
      try {
        const assignmentsWithMeta = await getAssignmentsWithMetadata();
        setAssignments(assignmentsWithMeta);
      } catch (error) {
        console.error('Failed to load assignments:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAssignments();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading assignments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Frontend Assignments
          </h1>
          <p className="mt-2 text-gray-600">
            Practice and master frontend development skills
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map((assignment) => (
            <AssignmentCard
              key={assignment.id}
              title={assignment.metadata.title}
              description={assignment.metadata.description}
              difficulty={assignment.metadata.difficulty}
              tags={assignment.metadata.tags}
              dateCreated={assignment.metadata.dateCreated}
              onClick={() => navigate(assignment.path)}
            />
          ))}
        </div>

        {assignments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No assignments available yet.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

function AssignmentView() {
  const { assignmentId } = useParams<{ assignmentId: string }>();
  const navigate = useNavigate();
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadComponent = async () => {
      if (!assignmentId) {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        const comp = await getAssignmentComponent(assignmentId);
        if (comp) {
          setComponent(() => comp);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadComponent();
  }, [assignmentId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading assignment...</p>
        </div>
      </div>
    );
  }

  if (error || !Component) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button
              onClick={() => navigate("/")}
              className="text-blue-600 hover:text-blue-800 flex items-center gap-2 mb-2"
            >
              ← Back to Assignments
            </button>
          </div>
        </header>
        <div className="max-w-4xl mx-auto p-6 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Assignment Not Found
          </h1>
          <p className="text-gray-600">
            The assignment "{assignmentId}" could not be loaded.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2 mb-2"
          >
            ← Back to Assignments
          </button>
        </div>
      </header>
      <Component />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:assignmentId" element={<AssignmentView />} />
    </Routes>
  );
}

export default App;
