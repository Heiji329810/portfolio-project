import { useState } from "react"
import paintings from "../../data/paintings"

const frames = [
  "border-[8px] border-amber-800 bg-white p-2",
  "border-[12px] border-white bg-white p-3 shadow-md",
  "border-[8px] border-yellow-800 bg-white p-2",
  "border-[6px] border-stone-400 bg-white p-4",
]

export function ScreenHobbies() {
  const [openPainting, setOpenPainting] = useState<(typeof paintings)[number] | null>(
    null
  )

  return (
    <div className="min-h-screen bg-stone-100 p-10">
      <h1 className="mb-8 text-2xl font-bold text-stone-800">My Hobbies</h1>
      <h1 className="mb-8 text-xl font-bold text-stone-800">Painting</h1>
      <h5 className="mb-8 text-stone-800">I have been painting since I was 5. I really like to explore nature. So I paint nature around me. Different animals, plants, and beautiful scenery I see when I travel. You can click on the image to view more details about each painting.</h5>

      <div className="columns-2 gap-8 md:columns-3 lg:columns-4">
        {paintings.map((painting, index) => {
          return (
            <figure key={painting.id} className="mb-8 break-inside-avoid">
              <button
                type="button"
                className="w-full cursor-pointer transition-transform duration-300 hover:scale-95 hover:shadow-xl"
                onClick={() => setOpenPainting(painting)}
              >
                <div className={frames[index % frames.length]}>
                  <img
                    src={painting.image || painting.thumbnailImage}
                    alt={painting.title}
                    className="h-auto w-full"
                  />
                </div>
              </button>
              <figcaption className="mt-2 text-center text-sm text-stone-700">
                {painting.title}
              </figcaption>
            </figure>
          )
        })}
      </div>

      {openPainting && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          onClick={() => setOpenPainting(null)}
        >
          <div
            className="max-h-[80vh] w-[80vw] max-w-3xl overflow-y-auto bg-white p-8 text-stone-800"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="mb-4 rounded bg-stone-800 px-3 py-1 text-white"
              onClick={() => setOpenPainting(null)}
            >
              Close
            </button>
            <img
              src={openPainting.image || openPainting.thumbnailImage}
              alt={openPainting.title}
              className="mb-4 max-h-72 w-full object-contain"
            />
            <h2 className="mb-2 text-2xl font-bold">{openPainting.title}</h2>
            <p>{openPainting.text}</p>
          </div>
        </div>
      )}

<h1 className="mb-8 text-xl font-bold text-stone-800">Swimming</h1>
<h5 className="mb-8 text-stone-800">For swimming, I have been swimming for 10 years. I started to swim because I wanted to be stronger and healthy. Learning and practicing was a hard experience. I left my tears there, but also gained the sense of achievement and strength.
  <br />
  <br />
  This is a video of me in a competition. I also got my national level 3 certificate for 100 meters freestyle.
</h5>
<video
  src="/images/swimming/swimming.mp4"
  controls
  playsInline
  className="mx-auto mb-8 w-1/2"
/>
    
<h1 className="mb-8 text-xl font-bold text-stone-800">Animations</h1>
<h5 className="mb-8 text-stone-800"> I am a fan of Detective Conan and Slam Dunk. They are amazing animations. I watch them since a very young age. My interest in them also led me to read more about crime fiction and fall in love with different sports. I always watch sport matches and try different sports. I also 3D printed a 3D card of a character: Hattori Heiji.</h5>
      <div className="flex gap-8">
        <div className="relative w-1/2 bg-neutral-200">
          <img
            src="/images/animations/conan.png"
            alt="loading..."
            className="size-full object-cover"
          />
        </div>
        <div className="relative w-1/2 bg-neutral-200">
          <img
            src="/images/animations/slam-dunk.png"
            alt="loading..."
            className="size-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
