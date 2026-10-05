import projects from "../../data/projects"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

export function ScreenProjects() {
  return (
    <div className="p-10">
      <h1 className="mb-6 text-2xl font-bold">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          return (
            <Card key={project.id} className="overflow-hidden pt-0">
              <div className="relative h-40 bg-neutral-200">
                Save this spot for the image. Later you can uncomment this:
                <img
                  src={project.thumbnailImage}
                  alt={project.title}
                  className="h-40 w-full object-cover"
                />
                <div className="absolute top-2 right-2 flex flex-col items-end gap-1">
                  {project.isPublished && (
                    <span className="rounded border border-sky-400 px-2 py-1 text-xs text-sky-400">
                      Published
                    </span>
                  )}
                  {project.isFeaturedHomePage && (
                    <span className="rounded border border-sky-400 px-2 py-1 text-xs text-sky-400">
                      Featured
                    </span>
                  )}
                </div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle>{project.title}</CardTitle>
                  <span className="shrink-0 rounded border border-sky-400 px-2 py-0.5 text-xs text-sky-400">
                    {project.type}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => {
                    return (
                      <span
                        key={tag}
                        className="rounded border border-sky-400 px-2 py-0.5 text-xs text-sky-400"
                      >
                        {tag}
                      </span>
                    )
                  })}
                </div>
                <CardDescription>{project.teaser}</CardDescription>
              </CardHeader>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
