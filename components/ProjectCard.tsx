export function ProjectCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border border-gray-200 dark:border-zinc-700 p-5 rounded-2xl shadow-sm bg-white dark:bg-zinc-800 hover:shadow-md transition-shadow duration-300 mb-4">
      <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}
