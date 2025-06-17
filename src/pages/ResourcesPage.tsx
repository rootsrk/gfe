import { useNavigate } from "react-router-dom";

export function ResourcesPage() {
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
            Resources & Learning Materials 📚
          </h1>
          <p className="mt-2 text-gray-600">
            Curated collection of tweets, articles, videos, books, and other valuable resources for frontend and platform engineers
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-20">
          <div className="text-6xl mb-6">🔗</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Resource Hub Coming Soon</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            I'm building a comprehensive resource hub featuring carefully curated content including:
          </p>
          
          {/* Resource Categories Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-3">🐦</div>
              <h3 className="font-bold text-gray-900 mb-2">Tweets & Threads</h3>
              <p className="text-gray-600 text-sm">Insightful Twitter threads and discussions from industry experts</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="font-bold text-gray-900 mb-2">Articles & Blogs</h3>
              <p className="text-gray-600 text-sm">In-depth articles on frontend development and platform engineering</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-3">🎥</div>
              <h3 className="font-bold text-gray-900 mb-2">YouTube Videos</h3>
              <p className="text-gray-600 text-sm">Educational videos, conference talks, and tutorials</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-bold text-gray-900 mb-2">Books & Docs</h3>
              <p className="text-gray-600 text-sm">Essential books and documentation for continuous learning</p>
            </div>
          </div>

          {/* Additional Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="font-bold text-gray-900 mb-2">Tools & Libraries</h3>
              <p className="text-gray-600 text-sm">Developer tools, libraries, and frameworks worth exploring</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-3">🎧</div>
              <h3 className="font-bold text-gray-900 mb-2">Podcasts</h3>
              <p className="text-gray-600 text-sm">Tech podcasts for staying updated with industry trends</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-bold text-gray-900 mb-2">Quick Tips</h3>
              <p className="text-gray-600 text-sm">Bite-sized tips and tricks for daily development work</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
