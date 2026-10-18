import { useRef } from 'react'
import { Link, useLocation } from 'react-router'
import { TimelineAnimation } from '@/components/ui/timeline-animation'
import { useMediaQuery } from '@/components/use-media-query'
import MotionDrawer from '@/components/ui/motion-drawer'

export const MenuBar = () => {
    const timelineRef = useRef<HTMLDivElement>(null)
    const isMobile = useMediaQuery('(max-width: 768px)')
    const location = useLocation()
    const pageLinkClass = (path: string) =>
      location.pathname === path ? 'font-bold' : 'font-normal'

    return(
    <section
      ref={timelineRef}
      className="bg-red-50 text-neutral-900 relative overflow-hidden flex flex-col"
    >
      {/* Mobile Navigation */}
      {isMobile && (
        <div className="flex gap-4 justify-between items-center px-10 pt-4">
          <MotionDrawer
            direction="left"
            width={300}
            backgroundColor={'#ffffff'}
            clsBtnClassName="bg-neutral-800 border-r border-neutral-900 text-white"
            contentClassName="bg-white border-r border-neutral-200 text-black"
            btnClassName="bg-white text-black relative w-fit p-2 left-0 top-0 rounded-full shadow-xs border border-neutral-200"
          >
            <nav className="space-y-4 ">
              <div className="flex items-center gap-2 text-black">
                <span>Cici's universe</span>
              </div>
              <Link
                to="/"
                className={`block p-2 hover:bg-neutral-200 hover:text-black rounded-sm ${pageLinkClass("/")}`}
              >
                Home
              </Link>
              <Link
                to="/hobbies"
                className={`block p-2 hover:bg-neutral-200 hover:text-black rounded-sm ${pageLinkClass("/hobbies")}`}
              >
                Hobbies
              </Link>
              <Link
                to="/projects"
                className={`block p-2 hover:bg-neutral-200 hover:text-black rounded-sm ${pageLinkClass("/projects")}`}
              >
                Digital Projects
              </Link>
              <Link
                to="/cathouse"
                className={`block p-2 hover:bg-neutral-200 hover:text-black rounded-sm ${pageLinkClass("/cathouse")}`}
              >
                Cat House
              </Link>
              <Link
                to="/explorations"
                className={`block p-2 hover:bg-neutral-200 hover:text-black rounded-sm ${pageLinkClass("/explorations")}`}
              >
                Explorations
              </Link>
              {/* <Link
                to="/contact"
                className={`block p-2 hover:bg-neutral-200 hover:text-black rounded-sm ${pageLinkClass("/contact")}`}
              >
                Contact
              </Link> */}
            </nav>
          </MotionDrawer>
        </div>
      )}

      {/* Navbar */}
      {!isMobile && (
        <header className="relative z-10 w-full max-w-7xl mx-auto px-10 py-10 flex items-center justify-end">
          <div className="flex items-center gap-2 text-black mr-145">
            <span>Cici's UNIVERSE</span>
          </div>
          <TimelineAnimation
            as="nav"
            timelineRef={timelineRef}
            animationNum={1}
            className="hidden md:flex items-center gap-10 text-sm text-neutral-800"
          >
            <Link to="/" className={`hover:text-black transition ${pageLinkClass("/")}`}>
              Home
            </Link>
            <Link to="/hobbies" className={`hover:text-black transition ${pageLinkClass("/hobbies")}`}>
              Hobbies
            </Link>
            <Link to="/projects" className={`hover:text-black transition ${pageLinkClass("/projects")}`}>
              Digital Projects
            </Link>
            <Link to="/cathouse" className={`hover:text-black transition ${pageLinkClass("/cathouse")}`}>
              Cat House
            </Link>
            <Link to="/explorations" className={`hover:text-black transition ${pageLinkClass("/explorations")}`}>
              Explorations
            </Link>
            {/* <Link to="/contact" className={`hover:text-black transition ${pageLinkClass("/contact")}`}>
              Contact
            </Link> */}
          </TimelineAnimation>
        </header>
      )}
    </section>
    )
}