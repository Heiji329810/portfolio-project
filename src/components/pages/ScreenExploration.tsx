export function ScreenExploration() {

  return (
    <div className="p-10">
      <h1 className="mb-6 text-2xl font-bold">Explorations</h1>
      <h5 className="mb-6 text-xl">When I was trying to explore different skills and make projects that I can do with engineering, these projects were born. </h5>
      <div className="p-10">
        <h1 className="mb-6 text-2xl font-bold">3D printings</h1>
        <h5 className="mb-6 text-xl">These are some of the 3D printings that I have done. I have printed a pokemon ball, a magician's hat, and a 3D card of a character: Hattori Heiji. I also printed two phone cases for my phone, the two are seemingly identical but the second one was the revised version because the first one could'nt fit my phone. </h5>

        <div className="mx-auto mb-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <img src="/images/3D-printing/ball.png" alt="3D printing-1" className="mx-auto max-h-80 w-auto object-contain" />
          <img src="/images/3D-printing/hat.png" alt="3D printing-2" className="mx-auto max-h-80 w-auto object-contain" />
          <img src="/images/3D-printing/hattori.png" alt="3D printing-3" className="mx-auto max-h-80 w-auto object-contain" />
        </div>

      </div>

      <div className="p-10">
        <h1 className="mb-6 text-2xl font-bold">Robotics School Team</h1>
        <h5 className="mb-6 text-xl">These are some photos of our team in the Carnegie Mellon University Robotics camp, we made a robot that can navigate through a maze and avoid obstacles. I was the person handling the coding part. It was a great experience to work with a team and learn about robotics, and also my first time to know how sensors and code works together. It was amazing.
          <br />
          <br />
          At the end of that camp, I wrote: "In this camp, knowledge is not the only thing that we have gained. We also realized how some small components can effect the whole process, how big the difference of theory and practice can be, and also, the importance of team work."</h5>
        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-3">
          <div className="flex h-full flex-col justify-between gap-3">
            <img src="/images/vex/winter-camp.jpg" alt="VEX winter camp" className="w-full" />
            <img src="/images/vex/winter-camp7.jpg" alt="VEX winter camp 7" className="w-full" />
            <img src="/images/vex/winter-camp8.jpg" alt="VEX winter camp 8" className="w-full" />
            <img src="/images/vex/winter-camp2.jpg" alt="VEX winter camp 13" className="w-full" />
          </div>
          <div className="flex h-full flex-col justify-between gap-3">
            <img src="/images/vex/winter-camp13.png" alt="VEX winter camp 2" className="w-full border-2 border-white" />
            <img src="/images/vex/winter-camp14.png" alt="VEX winter camp 6" className="w-full border-2 border-white" />
            <img src="/images/vex/winter-camp11.png" alt="VEX winter camp 11" className="w-full border-2 border-white" />
            <img src="/images/vex/winter-camp9.png" alt="VEX winter camp 9" className="w-full border-2 border-white" />
            <img src="/images/vex/winter-camp12.png" alt="VEX winter camp 12" className="w-full border-2 border-white" />
          </div>
          <div className="flex h-full flex-col justify-between gap-3">
            <img src="/images/vex/winter-camp3.jpg" alt="VEX winter camp 3" className="w-full" />
            <img src="/images/vex/winter-camp5.jpg" alt="VEX winter camp 5" className="w-full" />
            <img src="/images/vex/winter-camp10.png" alt="VEX winter camp 10" className="w-full" />
            <img src="/images/vex/winter-camp6.jpg" alt="VEX winter camp 8" className="w-full" />
          </div>
        </div>
      </div>
      <div className="p-10">
        <h1 className="mb-6 text-2xl font-bold">VEX Robotics Asia Open National Invitational Competition</h1>
        <h5 className="mb-6 text-xl">Our school team participated in the 2025-2026 push back session. We won the judges award in summer. We practiced controlling our robot together, and made improvements again and again to fit our robots better for the competition. We learned a lot about teamwork and how to learn from mistakes. Every new version of our robot was a new challenge and a new opportunity to learn.</h5>
        <div className="relative mx-auto max-w-5xl py-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-[1fr_1fr_16rem_1fr_1fr]">
            <img src="/images/vex/car-comp.jpg" alt="Car competition" className="aspect-square w-full -rotate-6 border-8 border-white object-cover shadow-xl" />
            <img src="/images/vex/car-comp2.jpg" alt="Car competition 2" className="aspect-square w-full rotate-3 border-8 border-white object-cover shadow-xl" />
            <div className="hidden md:row-span-3 md:block" />
            <img src="/images/vex/award2.jpg" alt="Award" className="z-10 aspect-square w-full rotate-6 border-8 border-white object-cover shadow-xl md:col-span-2 md:row-span-2 md:aspect-auto md:h-full" />
            <img src="/images/vex/car-comp8.jpg" alt="Car competition 3" className="aspect-square w-full -rotate-3 border-8 border-white object-cover shadow-xl" />
            <img src="/images/vex/car-comp5.jpg" alt="Car competition 5" className="aspect-square w-full rotate-2 border-8 border-white object-cover shadow-xl" />
            <img src="/images/vex/car-comp6.jpg" alt="Car competition 6" className="aspect-square w-full rotate-3 border-8 border-white object-cover shadow-xl" />
            <img src="/images/vex/car-comp7.jpg" alt="Car competition 7" className="aspect-square w-full -rotate-6 border-8 border-white object-cover shadow-xl" />
            <img src="/images/vex/competition-1.jpg" alt="Competition" className="aspect-square w-full -rotate-2 border-8 border-white object-cover shadow-xl" />
            <img src="/images/vex/award.jpg" alt="Award 2" className="z-10 aspect-square w-full rotate-[-8deg] border-8 border-white object-cover shadow-xl" />
          </div>

        </div>
      </div>
      {/* <div className="relative mx-auto grid-cols-1 gap-6 md:grid-cols-3">
        <h5 className="text-xl w-1/2">On the left, you can see us improving small parts of our robot. </h5>
        <h5 className="text-xl w-1/2">On the right, there are photos of our reward and competition photo. We weren't able to take more closer pictures of us competing. </h5>
        </div> */}
      <div className="p-10">
        <h1 className="mb-6 text-2xl font-bold">Mouse Trap</h1>
        <h5 className="mb-6 text-xl">My friend and I made a mouse trap simulation out of paper and glue in class. We used a ping-pong ball to represent the mouse. Our design ideas came from the crab trap and a traditional chinese paper folding game. We also made several prototypes to make sure it is working, and also made a step by step instruction guide to make sure others understand how its working and can learn to make one themselves.</h5>
        <div className="mx-auto mb-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <img src="/images/JHU/mouse-trap.jpg" alt="Mouse trap" className="mx-auto max-h-80 w-full object-contain" />
          <img src="/images/JHU/box.jpg" alt="Mouse trap" className="mx-auto max-h-80 w-full object-contain" />
        </div>
      </div>
      <div className="p-10">
        <h1 className="mb-6 text-2xl font-bold">Spaghetti Bridge</h1>
        <h5 className="mb-6 text-xl">In groups of four, we built a spaghetti bridge. For preparation, we did 3 different labs, the tension lab, the buckling lab, and the bending lab.</h5>
        <div className="mx-auto mb-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          <img src="/images/JHU/bending-lab.jpg" alt="Spaghetti Bridge" className="mx-auto max-h-80 w-full object-contain" />
          <img src="/images/JHU/tension-lab.jpg" alt="Spaghetti Bridge" className="mx-auto max-h-80 w-full object-contain" />
          <img src="/images/JHU/tension-lab2.jpg" alt="Spaghetti Bridge" className="mx-auto max-h-80 w-full object-contain" />
          <img src="/images/JHU/epoxy.jpg" alt="Spaghetti Bridge" className="mx-auto max-h-80 w-full object-contain" />
        </div>
        <h5 className="mb-6 text-xl">Those labs were done to make sure we understand the strength of different spaghetti and how to use them as different components of a bridge. And then, we come to the stage to brainstorm different trusses and find out the truss that can hold the greatest weight. These are some of the bridges prototypes we did. </h5>
        <div className="mx-auto mb-10 flex flex-col gap-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <img src="/images/JHU/spa-8.png" alt="Spaghetti truss" className="mx-auto max-h-80 w-full object-contain" />
            <img src="/images/JHU/spa-1.png" alt="Spaghetti truss force calculation" className="mx-auto max-h-80 w-full object-contain" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <img src="/images/JHU/spa-2.png" alt="Spaghetti truss" className="mx-auto max-h-80 w-full object-contain" />
            <img src="/images/JHU/spa-7.png" alt="Spaghetti truss force calculation" className="mx-auto max-h-80 w-full object-contain" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <img src="/images/JHU/spa-9.png" alt="Spaghetti truss" className="mx-auto max-h-80 w-full object-contain" />
            <img src="/images/JHU/spa-4.png" alt="Spaghetti truss force calculation" className="mx-auto max-h-80 w-full object-contain" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <img src="/images/JHU/spa-5.png" alt="Spaghetti truss" className="mx-auto max-h-80 w-full object-contain" />
            <img src="/images/JHU/spa-3.png" alt="Spaghetti truss force calculation" className="mx-auto max-h-80 w-full object-contain" />
            <img src="/images/JHU/spa-6.png" alt="Spaghetti truss force calculation" className="mx-auto max-h-80 w-full object-contain" />
            <img src="/images/JHU/spa-10.png" alt="Spaghetti truss force calculation" className="mx-auto max-h-80 w-full object-contain" />
          </div>
        </div>
        <h5 className="mb-6 text-xl">In the end, we chose the truss built by one of our teammates, which is like an arch. And after that we started building.</h5>
        <div className="mx-auto mb-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <img src="" alt="TALIA's" className="mx-auto max-h-80 w-full object-contain" />
          <img src="/images/JHU/spaghetti-bridge2.jpg" alt="spaghetti bridge" className="mx-auto max-h-80 w-full object-contain" />
          <img src="/images/JHU/spaghetti-bridge5.jpg" alt="spaghetti bridge" className="mx-auto max-h-80 w-full object-contain" />
        </div>
        <h5 className="mb-6 text-xl">We actually built two bridges. On the left is the usable bridge that we built, which can hold about 6kg of weight, and we also built a smaller bridge for a memorial. We named the larger one the little bridge that could, and the smaller one the tiny bridge that could. On the right is a photo of me with the tiny bridge.</h5>
        <div className="mx-auto mb-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <img src="/images/JHU/spaghetti-bridge.jpg" alt="spaghetti bridge" className="mx-auto max-h-80 w-full object-contain" />
          <img src="/images/JHU/spaghetti.jpg" alt="spaghetti bridge" className="mx-auto max-h-80 w-full object-contain" />
        </div>
        <h1 className="mb-6 text-2xl font-bold">Break & Breath Reminder</h1>
        <h5 className="mb-6 text-xl">I made a break and breath reminder program with adafruit circuit playground express to help students rememver to take breaks after a certain amount of study time. I also added the breath mode to help students relax and get guidance on how to breathe.</h5>
        <div className="mx-auto mb-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <img src="/images/JHU/circuit-playground.png" alt="TALIA's" className="mx-auto max-h-80 w-full object-contain" />
          <video
            src="/images/JHU/circuit-playground.mov"
            controls
            playsInline
            className="mx-auto mb-8 w-full"
          />
        </div>
      </div>
    </div>
  )
}

