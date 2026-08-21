import type { ProjectRow } from "@/lib/db/queries"

export function ProjectCard({ project }: { project: ProjectRow }) {
  const media = project.image
    ? { backgroundImage: `url(${project.image})` }
    : { background: project.preview }
  const href = project.href || "#"

  return (
    <div className="flex h-full flex-col gap-0.5">
      {/* Full-image card — clickable, links to the project */}
      <a
        href={href}
        className="group block h-[460px] origin-bottom flex-none overflow-hidden rounded-card shadow-card transition duration-300 ease-out hover:scale-[1.06] hover:shadow-pop sm:h-[420px] lg:h-[460px]"
        aria-label={`View project: ${project.title}`}
      >
        <span
          className="block h-full w-full bg-cover bg-center"
          style={media}
          aria-hidden
        />
      </a>

      {/* Content card — same project info, clickable, links to the project */}
      <a
        href={href}
        className="group flex h-28 origin-top flex-none flex-col justify-center gap-1.5 rounded-card bg-sl-surface p-4 shadow-card transition duration-300 ease-out hover:scale-[1.06] hover:shadow-pop sm:p-5"
        aria-label={`View project: ${project.title}`}
      >
        {project.tag && (
          <span className="text-[10px] uppercase tracking-[0.12em] text-sl-muted">
            {project.tag}
          </span>
        )}
        <h3 className="line-clamp-1 text-h3 text-sl-text">{project.title}</h3>
      </a>
    </div>
  )
}