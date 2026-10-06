import paintings from "../../data/paintings"

const frames = [
  "border-[8px] border-amber-800 bg-white p-2",
  "border-[12px] border-white bg-white p-3 shadow-md",
  "border-[8px] border-yellow-800 bg-white p-2",
  "border-[6px] border-stone-400 bg-white p-4",
]

export function ScreenHobbies() {
  return (
    <div className="min-h-screen bg-stone-100 p-10">
      <h1 className="mb-8 text-2xl font-bold text-stone-800">Paintings</h1>

      <div className="columns-2 gap-8 md:columns-3 lg:columns-4">
        {paintings.map((painting, index) => {
          return (
            <figure key={painting.id} className="mb-8 break-inside-avoid">
              <div className={frames[index % frames.length]}>
                <img
                  src={painting.image || painting.thumbnailImage}
                  alt={painting.title}
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-2 text-center text-sm text-stone-700">
                {painting.title}
              </figcaption>
            </figure>
          )
        })}
      </div>
    </div>
  )
}
