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
                <svg
                  className="fill-black w-8 h-8"
                  width="97"
                  height="108"
                  viewBox="0 0 97 108"
                  fill="none"
                  xmlns=""
                >
                  <path d="M55.5 0C61.0005 0.00109895 64.5005 2.50586 64.5 7.5V17C64.5 24.5059 68.5005 27.5 81 27.5H88C94.0005 27.5059 96.5 29.5059 96.5 37.5V98.5C96.5 106.006 95.0005 107.5 88 107.5H41.5C36.5005 107.5 32 104.506 32 98.5V88C32 84.5 28.5 80 20.5 80H8.5C3 80 0 76.5 0 71.5V6.5C0.00048844 1.50586 2.50049 0.00585937 8.5 0H55.5ZM31 20C28.7909 20 27 21.7909 27 24V74C27 76.2091 28.7909 78 31 78H58C60.2091 78 62 76.2091 62 74V24C62 21.7909 60.2091 20 58 20H31Z" />
                </svg>
                <span>Cici's portfolio</span>
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
        <header className="relative z-10 w-full max-w-7xl mx-auto px-10 py-10 flex items-center justify-between">
          <TimelineAnimation
            timelineRef={timelineRef}
            animationNum={0}
            className="flex items-center gap-2"
          >
            {/* <svg
              className="fill-black w-8 h-8"
              width="97"
              height="108"
              viewBox="0 0 97 108"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M55.5 0C61.0005 0.00109895 64.5005 2.50586 64.5 7.5V17C64.5 24.5059 68.5005 27.5 81 27.5H88C94.0005 27.5059 96.5 29.5059 96.5 37.5V98.5C96.5 106.006 95.0005 107.5 88 107.5H41.5C36.5005 107.5 32 104.506 32 98.5V88C32 84.5 28.5 80 20.5 80H8.5C3 80 0 76.5 0 71.5V6.5C0.00048844 1.50586 2.50049 0.00585937 8.5 0H55.5ZM31 20C28.7909 20 27 21.7909 27 24V74C27 76.2091 28.7909 78 31 78H58C60.2091 78 62 76.2091 62 74V24C62 21.7909 60.2091 20 58 20H31Z" />
            </svg> */}
          </TimelineAnimation>
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