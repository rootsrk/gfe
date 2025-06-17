import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAssignmentComponent } from "../assignments/utils";

export function AssignmentView() {
  const { assignmentId } = useParams<{ assignmentId: string }>();
  const navigate = useNavigate();
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!assignmentId) {
      setError("Assignment ID is required");
      setLoading(false);
      return;
    }

    const loadComponent = async () => {
      try {
        const component = await getAssignmentComponent(assignmentId);
        setComponent(() => component);
      } catch (err) {
        console.error("Failed to load assignment:", err);
        setError(`Failed to load assignment: ${assignmentId}`);
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
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
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
              className="text-blue-600 hover:text-blue-800 flex items-center gap-2 mb-2 cursor-pointer"
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
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2 mb-2 cursor-pointer"
          >
            ← Back to Assignments
          </button>
        </div>
      </header>
      <Component />
    </div>
  );
}
