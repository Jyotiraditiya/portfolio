export function ProjectCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border border-white/20 p-5 rounded-2xl shadow-sm bg-white/10 hover:shadow-md transition-shadow duration-300 mb-4 backdrop-blur-md">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-200">{description}</p>
    </div>
  );
}
