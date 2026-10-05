import selfie from "../../assets/homepage/selfie.png"

const homePictures = [
  { title: "Title 1" },
  { title: "Title 2" },
  { title: "Title 3" },
  { title: "Title 4" },
  { title: "Title 5" },
  { title: "Title 6" },
  { title: "Title 7" },
  { title: "Title 8" },
  { title: "Title 9" },
  { title: "Title 10" },
  { title: "Title 11" },
  { title: "Title 12" },
]

export function ScreenHome() {
  return (
    <div className="w-full bg-sky-950">
      <img
        src={selfie}
        alt="Homepage"
        className="size-full min-h-[80vh] object-cover"
      />
      <h5 className="p-10">
        Hello! My name is Hanxi Xiao, a Chinese girl from the city of hoptpot. I
        really like building things, helping people, and nature around me. I hope
        to major in engineering to help more people in the future.
      </h5>
      <div className="grid grid-cols-3 gap-6 px-10 pb-10">
        {homePictures.map((item) => {
          return (
            <div key={item.title}>
              <div className="h-40 bg-sky-200">
                {/* Put a picture here later */}
              </div>
              <p className="mt-2 text-center">{item.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
