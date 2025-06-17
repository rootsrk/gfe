import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AssignmentCard } from "../components/AssignmentCard";
import {
  getAssignmentsWithMetadata,
  type AssignmentWithMetadata,
} from "../assignments/utils";

export function AssignmentsPage() {
  const navigate = useNavigate();
  const [assignments, setAssignments] = useState<AssignmentWithMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAssignments = async () => {
      try {
        const assignmentsWithMeta = await getAssignmentsWithMetadata();
        setAssignments(assignmentsWithMeta);
      } catch (error) {
        console.error("Failed to load assignments:", error);
      } finally {
        setLoading(false);
      }
    };

    loadAssignments();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">
            Loading assignments...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2 mb-2 cursor-pointer"
          >
            ← Back to Home
          </button>
          <h1 className="text-3xl font-bold text-gray-900">
            Frontend Engineering Lab 🧪
          </h1>
          <p className="mt-2 text-gray-600">
            A collection of frontend challenges focusing on performance,
            scalability, and developer experience
          </p>
        </div>
      </header>

      {/* Assignments Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map((assignment, index) => (
            <div
              key={assignment.id}
              className="transform hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AssignmentCard
                title={assignment.metadata.title}
                description={assignment.metadata.description}
                difficulty={assignment.metadata.difficulty}
                tags={assignment.metadata.tags}
                dateCreated={assignment.metadata.dateCreated}
                onClick={() => navigate(assignment.path)}
              />
            </div>
          ))}
        </div>

        {assignments.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏗️</div>
            <p className="text-gray-500 text-lg mb-4">
              Assignments coming soon!
            </p>
            <p className="text-gray-400">
              Currently building awesome frontend challenges...
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
