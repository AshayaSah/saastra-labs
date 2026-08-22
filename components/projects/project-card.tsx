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
        className="group relative block h-[460px] origin-bottom flex-none overflow-hidden rounded-card shadow-card transition duration-300 ease-out hover:scale-[1.06] hover:shadow-pop sm:h-[420px] lg:h-[460px]"
        aria-label={`View project: ${project.title}`}
      >
        <span
          className="absolute inset-0 block h-full w-full bg-cover bg-center transition duration-300 ease-out group-hover:scale-[1.03]"
          style={media}
          aria-hidden
        />
        <span className="absolute inset-0 bg-sl-text/0 transition duration-300 ease-out group-hover:bg-sl-text/65" />
        <span className="absolute inset-0 bg-gradient-to-t from-sl-text/80 via-sl-text/25 to-transparent opacity-0 transition duration-300 ease-out group-hover:opacity-100" />
        <span className="absolute inset-0 flex items-center justify-center p-5 sm:p-6">
          <span className="max-w-[28ch] translate-y-2 text-center text-[15px] leading-[1.7] font-medium text-sl-beige opacity-0 transition duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 sm:text-[16px] lg:text-[17px]">
            {project.description}
          </span>
        </span>
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
