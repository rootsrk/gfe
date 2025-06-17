import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { AssignmentCard } from "./components/AssignmentCard";
import {
  getAssignmentsWithMetadata,
  getAssignmentComponent,
  type AssignmentWithMetadata,
} from "./assignments/utils";

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
        console.error("Failed to load assignments:", error);
      } finally {
        setLoading(false);
      }
    };

    loadAssignments();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent mx-auto mb-4"></div>
          <p className="text-white text-lg font-medium">Loading the magic...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Personal Info */}
      <section className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-70 animate-bounce"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-green-300 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300 rounded-full opacity-50 animate-ping"></div>
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-pink-300 rounded-full opacity-70 animate-bounce"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-yellow-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-6xl">
                👩‍💻
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Hey, I'm{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Sumedha
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-3xl mx-auto">
              Platform Engineer & Frontend Developer specializing in build
              optimization, CI/CD pipelines, and developer experience
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm opacity-90">SDKs Released</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
              <div className="text-2xl font-bold">⚡</div>
              <div className="text-sm opacity-90">Performance</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
              <div className="text-2xl font-bold">🚀</div>
              <div className="text-sm opacity-90">CI/CD Expert</div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">
              Engineering Arsenal
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "TypeScript",
                "React",
                "Node.js",
                "GitHub Actions",
                "Webpack",
                "Vite",
                "ESLint",
                "Jest",
                "Vitest",
                "AWS",
                "RSPack",
                "TurboRepo",
                "Nx",
                "CI/CD",
                "Build Tools",
                "Developer Experience",
                "Scalability",
                "Code Quality",
                "Testing",
                "Automation",
                "Tooling",
                "Frontend",
                "Monitoring",
                "Performance",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Platform Engineering Highlights */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">🛠️</div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Build Optimization
                </h4>
                <p className="text-white/80 text-sm">
                  Performance tuning, bundle analysis, and build pipeline
                  optimization
                </p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h4 className="text-lg font-bold text-white mb-2">
                  UI Engineering
                </h4>
                <p className="text-white/80 text-sm">
                  Building crisp UIs with comprehensive tests, accessibility
                  (a11y), and observability (o11y)
                </p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">📦</div>
                <h4 className="text-lg font-bold text-white mb-2">
                  SDK Development
                </h4>
                <p className="text-white/80 text-sm">
                  Creating developer-friendly SDKs with comprehensive
                  documentation
                </p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">⚙️</div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Standards & QA
                </h4>
                <p className="text-white/80 text-sm">
                  Enforcing coding standards, testing practices, and quality
                  gates
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://www.linkedin.com/in/sumedha-r-kulkarni/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              💼
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              🐱
            </a>
            <a
              href="mailto:sumedha.kulkarni@example.com"
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              📧
            </a>
          </div>

          <div className="animate-bounce">
            <div className="text-white/80 text-sm mb-2">
              Scroll down to explore my work
            </div>
            <div className="text-2xl">⬇️</div>
          </div>
        </div>
      </section>

      {/* Assignments Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frontend Engineering Lab 🧪
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collection of frontend challenges focusing on performance,
              scalability, and developer experience. Each assignment explores
              modern web development patterns with an emphasis on build
              optimization and engineering excellence.
            </p>
          </div>

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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">
            Built with ❤️ using React, TypeScript, and optimized build pipelines
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 Sumedha Kulkarni. Platform Engineer • SDK Developer •
            Performance Advocate 🚀
          </p>
        </div>
      </footer>
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
