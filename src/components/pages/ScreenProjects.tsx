import { useState } from "react"
import projects from "../../data/projects"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

export function ScreenProjects() {
  const [openVideo, setOpenVideo] = useState<{ video: string | null } | null>(null)

  return (
    <div className="p-10">
      <h1 className="mb-6 text-2xl font-bold">Projects</h1>
      <h5 className="mb-6 text-xl">These are some fun projects that I did, with p5 and ml5. They are my creations and explorations on digital art projects that are based on algorithms and math principles. I also included two websites that I did, for my friend and my school. I really like them, especially for my websites, the falling sand project and the flowfield paintings.</h5>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((project) => {
          return (
            <Card key={project.id} className="overflow-hidden pt-0">
              <div className="relative h-72 w-full bg-neutral-200">
                <img
                  src={project.thumbnailImage}
                  alt={project.title}
                  className="size-full object-cover"
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
                  <CardTitle>
                    <a href={project.link} className="hover:underline">
                      {project.title}
                    </a>
                  </CardTitle>
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
              <CardContent>
                <button
                  className="w-full rounded bg-white px-4 py-2 text-black"
                  onClick={() => setOpenVideo(project)}
                >
                  Watch video
                </button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {openVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setOpenVideo(null)}
        >
          <div
            className="relative h-[80vh] w-[80vw] bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 z-10 rounded bg-white px-3 py-1 text-black"
              onClick={() => setOpenVideo(null)}
            >
              Close
            </button>
            {/* Put your video file in the "video" field in projects.js */}
            <video
              src={openVideo.video || undefined}
              controls
              className="size-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}
