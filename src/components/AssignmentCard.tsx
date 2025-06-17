interface AssignmentCardProps {
  title: string;
  description: string;
  difficulty: string;
  tags: string[];
  dateCreated: string;
  onClick: () => void;
}

export function AssignmentCard({ 
  title, 
  description, 
  difficulty, 
  tags, 
  dateCreated, 
  onClick 
}: AssignmentCardProps) {
  const getDifficultyConfig = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': 
        return { 
          bg: 'bg-gradient-to-r from-green-400 to-emerald-500', 
          text: 'text-white',
          emoji: '🟢',
          border: 'border-green-200'
        };
      case 'medium': 
        return { 
          bg: 'bg-gradient-to-r from-yellow-400 to-orange-500', 
          text: 'text-white',
          emoji: '🟡',
          border: 'border-yellow-200'
        };
      case 'hard': 
        return { 
          bg: 'bg-gradient-to-r from-red-400 to-pink-500', 
          text: 'text-white',
          emoji: '🔴',
          border: 'border-red-200'
        };
      default: 
        return { 
          bg: 'bg-gradient-to-r from-gray-400 to-gray-500', 
          text: 'text-white',
          emoji: '⚪',
          border: 'border-gray-200'
        };
    }
  };

  const difficultyConfig = getDifficultyConfig(difficulty);

  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 cursor-pointer border-2 ${difficultyConfig.border} hover:border-purple-300 hover:-translate-y-2 group relative overflow-hidden`}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-10 translate-x-10 opacity-50 group-hover:opacity-70 transition-opacity"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-100 to-green-100 rounded-full translate-y-8 -translate-x-8 opacity-40 group-hover:opacity-60 transition-opacity"></div>
      
      {/* Header */}
      <div className="flex justify-between items-start mb-4 relative z-10">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
          {title}
        </h3>
        <span className={`px-3 py-1 rounded-full text-sm font-bold ${difficultyConfig.bg} ${difficultyConfig.text} shadow-md flex items-center gap-1`}>
          <span>{difficultyConfig.emoji}</span>
          {difficulty}
        </span>
      </div>
      
      {/* Description */}
      <p className="text-gray-600 mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors relative z-10">
        {description}
      </p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4 relative z-10">
        {tags.map((tag, index) => {
          const tagColors = [
            'bg-blue-100 text-blue-700 border-blue-200',
            'bg-purple-100 text-purple-700 border-purple-200',
            'bg-green-100 text-green-700 border-green-200',
            'bg-pink-100 text-pink-700 border-pink-200',
            'bg-indigo-100 text-indigo-700 border-indigo-200'
          ];
          const colorClass = tagColors[index % tagColors.length];
          
          return (
            <span 
              key={tag} 
              className={`px-3 py-1 rounded-full text-sm font-medium border ${colorClass} hover:scale-105 transition-transform`}
            >
              {tag}
            </span>
          );
        })}
      </div>
      
      {/* Footer */}
      <div className="flex justify-between items-center text-sm relative z-10">
        <span className="text-gray-500 flex items-center gap-1">
          <span>📅</span>
          {new Date(dateCreated).toLocaleDateString()}
        </span>
        <span className="text-purple-600 hover:text-purple-800 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          View Assignment 
          <span>🚀</span>
        </span>
      </div>
    </div>
  );
}
