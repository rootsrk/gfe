import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="text-white font-bold text-lg tracking-wide drop-shadow-sm">
              Sumedha Kulkarni
            </div>
            <div className="flex space-x-8">
              <button
                onClick={() => navigate("/assignments")}
                className="text-white/80 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide hover:scale-105 hover:drop-shadow-sm cursor-pointer"
              >
                Assignments
              </button>
              <button
                onClick={() => navigate("/talks")}
                className="text-white/80 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide hover:scale-105 hover:drop-shadow-sm cursor-pointer"
              >
                Talks
              </button>
              <button
                onClick={() => navigate("/notes")}
                className="text-white/80 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide hover:scale-105 hover:drop-shadow-sm cursor-pointer"
              >
                Notes
              </button>
              <button
                onClick={() => navigate("/resources")}
                className="text-white/80 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide hover:scale-105 hover:drop-shadow-sm cursor-pointer"
              >
                Resources
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section with Personal Info */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-10 w-16 h-16 bg-yellow-300/50 rounded-full opacity-60 animate-ping"
            style={{ animationDelay: "0s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute top-40 right-20 w-12 h-12 bg-green-300/50 rounded-full opacity-50 animate-ping"
            style={{ animationDelay: "2s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute bottom-32 left-1/4 w-10 h-10 bg-blue-300/40 rounded-full opacity-40 animate-ping"
            style={{ animationDelay: "1s", animationDuration: "5s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-6 h-6 bg-cyan-300/50 rounded-full opacity-50 animate-ping"
            style={{ animationDelay: "3s", animationDuration: "2.5s" }}
          ></div>
          <div
            className="absolute bottom-40 right-10 w-8 h-8 bg-indigo-300/40 rounded-full opacity-30 animate-ping"
            style={{ animationDelay: "4s", animationDuration: "3.5s" }}
          ></div>
          <div
            className="absolute top-1/3 left-1/3 w-4 h-4 bg-purple-300/40 rounded-full opacity-40 animate-ping"
            style={{ animationDelay: "5s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-14 h-14 bg-teal-300/30 rounded-full opacity-35 animate-ping"
            style={{ animationDelay: "1.5s", animationDuration: "6s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-6xl">
                👩‍💻
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Heylo, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
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
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm opacity-90">SDKs Released</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-2xl font-bold">⚡</div>
              <div className="text-sm opacity-90">Performance</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
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
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Platform Engineering Highlights */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/25 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  🛠️
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Build Optimization
                </h4>
                <p className="text-white/80 text-sm">
                  Performance tuning, bundle analysis, and build pipeline
                  optimization
                </p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/25 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  🎨
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  UI Engineering
                </h4>
                <p className="text-white/80 text-sm">
                  Building crisp UIs with comprehensive tests, accessibility
                  (a11y), and observability (o11y)
                </p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/25 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  📦
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  SDK Development
                </h4>
                <p className="text-white/80 text-sm">
                  Creating developer-friendly SDKs with comprehensive
                  documentation
                </p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/25 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  ⚙️
                </div>
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
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              💼
            </a>
            <a
              href="https://github.com/rootsrk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              🐱
            </a>
            <a
              href="mailto:sumedha.rk.05@gmail.com"
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              📧
            </a>
          </div>
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
