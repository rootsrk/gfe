import { useNavigate } from "react-router-dom";

export function TalksPage() {
  const navigate = useNavigate();

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
            Talks & Presentations 🎤
          </h1>
          <p className="mt-2 text-gray-600">
            Sharing knowledge on platform engineering, build optimization, and
            frontend development
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-20">
          <div className="text-6xl mb-6">🎯</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm working on curating my talks and presentations on platform
            engineering, build optimization, CI/CD best practices, and frontend
            performance. Check back soon for insights and learnings from the
            field!
          </p>
        </div>
      </main>
    </div>
  );
}
