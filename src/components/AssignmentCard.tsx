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
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 cursor-pointer border border-gray-200 hover:border-blue-300"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(difficulty)}`}>
          {difficulty}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>Created: {new Date(dateCreated).toLocaleDateString()}</span>
        <span className="text-blue-600 hover:text-blue-800">View Assignment →</span>
      </div>
    </div>
  );
}
