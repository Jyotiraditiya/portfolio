export function ProjectCard({
  title,
  description,
  link,
  status,
}: {
  title: string;
  description: string;
  link?: string;
  status?: string;
}) {
  return (
    <div className="border border-gray-200 p-6 rounded-2xl shadow-sm bg-white hover:shadow-lg transition mb-6">
      <h3 className="text-xl font-semibold mb-2 text-purple-800">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      {status && (
        <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full">
          {status}
        </span>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:underline font-medium"
        >
          View Project
        </a>
      )}
    </div>
  );
}

// Example usage for your projects list:
<ProjectCard
  title="SPMOS - Smart Parking Management System"
  description="Role-based access control, optimized slots via Dijkstra’s algorithm."
  status="Under Development"
/>
