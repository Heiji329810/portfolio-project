import { Link } from "react-router"
import selfie from "../../assets/homepage/selfie.png"

const places = [
  {
    to: "/hobbies",
    title: "Hobbies",
    text: "I have been painting since I was five — animals, plants, and scenery from trips. I have been swimming for ten years, and I still watch Detective Conan and Slam Dunk.",
  },
  {
    to: "/projects",
    title: "Digital Projects",
    text: "Generative art with p5 and ml5. I especially like the falling sand simulation, the flow-field paintings, and two websites I made for a friend and my school.",
  },
  {
    to: "/cathouse",
    title: "Cat House",
    text: "A winter shelter for stray cats in my community. When a cat comes in and the house is colder than 20°C, a heating pad turns on and the rescuers get a daily report.",
  },
  {
    to: "/explorations",
    title: "Explorations",
    text: "3D prints, a maze robot I coded at robotics camp, our VEX team, a paper mouse trap, a spaghetti bridge, and a reminder to pause and breathe.",
  },
]

export function ScreenHome() {
  return (
    <div className="bg-[#07111f] text-white">
      <section className="relative h-[max(36rem,calc(100svh-7rem))] w-full overflow-hidden">
        <img
          src={selfie}
          alt="Portrait of Hanxi Xiao in front of a night city skyline"
          className="absolute inset-0 h-full w-full object-cover object-[center_32%]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,#07111f_0%,rgba(7,17,31,0.94)_20%,rgba(7,17,31,0.5)_38%,transparent_58%)]" />
        <div className="relative flex h-full items-end">
          <div className="mx-auto w-full max-w-[1600px] px-6 pb-10 sm:px-10 sm:pb-14">
            <div className="max-w-xl">
              <p className="text-xs font-medium tracking-[0.22em] text-amber-200 uppercase sm:text-sm">
                Chongqing · the city of hot pot
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
                Hanxi Xiao
              </h1>
              <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                Hello! I&apos;m a Chinese girl who likes building things, helping
                people, and the nature around me. I hope to major in engineering
                so I can help more people in the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-6 pt-8 pb-20 sm:px-10">
        <h2 className="text-2xl font-semibold">On this site</h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-white/70">
          Painting and swimming, digital art, a shelter for stray cats, and
          engineering I have tried along the way.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {places.map((place) => (
            <Link
              key={place.to}
              to={place.to}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/4 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-amber-200/40 hover:bg-white/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
            >
              <h3 className="text-lg font-semibold">{place.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-white/75">
                {place.text}
              </p>
              <span className="mt-6 text-sm text-amber-200">
                Open
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  {" →"}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
