import { publicAsset } from "@/lib/utils"

export function ScreenCathouse() {
  return (
    <div className="p-10">
      <h1 className="mb-8 text-2xl font-bold">Cat House</h1>
      <h5 className="mb-6 text-xl">In my community, there are a lot of stray cats and needed many people to rescue and take care of them. In winter, many stray cats can't survive because of the cold, and it is also sometimes difficult for the rescuers to find them, and organize them. Therefore, I built a cat house for stray cats using a temperature and humidity sensor and a ultrasonic sensor. I also used ESP323 with a camera to take photos of the cats and send them to a model I trained to detect if there is a cat in the house. If the result is true, and the temperature in the cat house is lower than 20˚C, the heating pad will be turned on by the relay which receives signals from ESP32S3 directly. I used a Raspberry Pi to read the data from the sensors, and serve as a wifi hotspot to connect to the camera, and serve as a web server to record logs and send them to DeepSeek everyday for daily report. In this way, I hope to not only improve the living conditions of the stray cats, but also help the rescuers to find them and take care of them more easily.</h5>

      <div className="p-10">
      <div className="relative ml-32 border-l-[6px] border-sky-400 pl-8">
        <div className="relative pb-10">
          <p className="absolute -left-32 top-0 w-24 pr-3 text-right pr-10">2025.12</p>
          <div className="absolute -left-[45px] top-1 size-5 rounded-full bg-sky-400" />
          <h2 className="mb-2 text-xl font-bold">Hardware building</h2>
          <p className="mb-4">I built the hardware for the cat house using a temperature and humidity sensor, a relay, and a ultrasonic sensor. Because the purpose of building the cat house is to detect cats' entering and heat up the house when there is a cat and the temperature is lower than 20˚C. So the detection of movements at the door needs to be detected by a sensor, the temperature needed to be measured, and there has to be a camera to see that a cat has came in. Therefore, I used a ESP32S3 that has a camera to record the images. For motion detecting, I first tried to use a PIR sensor, but it was not sensitive enough. So I finally used a ultrasonic sensor instead. When I was trying to connect them together, I found that the sensors could not work together. They can only work separately. So I had to reconnected them so they do not interfere with each other, and finally it worked.</p>
          <div className="mx-auto mb-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <img
            src={publicAsset("/images/cathouse/temp-humid.jpg")}
            alt="Temperature and humidity"
            className="mx-auto max-h-80 w-auto object-contain"
          />
          <img
            src={publicAsset("/images/cathouse/hardware-building.jpg")}
            alt="Ultrasonic sensor"
            className="mx-auto max-h-80 w-auto object-contain"
          />
          <img
            src={publicAsset("/images/cathouse/hardware-success.jpg")}
            alt="Temperature and humidity"
            className="mx-auto max-h-80 w-auto object-contain"
          />
          </div>
        </div>

        <div className="relative pb-10">
          <p className="absolute -left-32 top-0 w-24 pr-3 text-right pr-10">2026.1</p>
          <div className="absolute -left-[45px] top-1 size-5 rounded-full bg-sky-400" />
          <h2 className="mb-2 text-xl font-bold">Connection success</h2>
          <p className="mb-4">Add your text here.</p>
          <div className="mx-auto mb-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <img
            src={publicAsset("/images/cathouse/wires-connecting.jpg")}
            alt="Cat house paper"
            className="mx-auto max-h-80 w-full object-contain"
          />
          <img
            src={publicAsset("/images/cathouse/sensor-connection.jpg")}
            alt="Temperature and humidity"
            className="mx-auto max-h-80 w-full object-contain"
          />
          </div>
        </div>

        <div className="relative pb-10">
          <p className="absolute -left-32 top-0 w-24 pr-3 text-right pr-10">2026.2</p>
          <div className="absolute -left-[45px] top-1 size-5 rounded-full bg-sky-400" />
          <h2 className="mb-2 text-xl font-bold">Title 3</h2>
          <p className="mb-4">Add your text here.</p>
          <div className="mx-auto mb-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <img
            src={publicAsset("/images/cathouse/XPS-structure.jpg")}
            alt="Ultrasonic sensor"
            className="mx-auto max-h-80 w-full object-contain"
          />
          <img
            src={publicAsset("/images/cathouse/half-paper.jpg")}
            alt="Sensor connection"
            className="mx-auto max-h-80 w-full object-contain"
          />
          <img
            src={publicAsset("/images/cathouse/sticker-half.jpg")}
            alt="Sensor connection"
            className="mx-auto max-h-80 w-full object-contain"
          />
          </div>
        </div>

        <div className="relative pb-10">
          <p className="absolute -left-32 top-0 w-24 pr-3 text-right pr-10">2026.2</p>
          <div className="absolute -left-[45px] top-1 size-5 rounded-full bg-sky-400" />
          <h2 className="mb-2 text-xl font-bold">Title 4</h2>
          <p className="mb-4">Add your text here.</p>
          <div className="mx-auto mb-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <img
            src={publicAsset("/images/cathouse/sticker-2.jpg")}
            alt="Wires connecting"
            className="mx-auto max-h-80 w-full object-contain"
          />
          <img
            src={publicAsset("/images/cathouse/altrasonic-sensor.jpg")}
            alt="Temperature and humidity"
            className="mx-auto max-h-80 w-full object-contain"
          />
        </div>
        </div>

        <div className="relative pb-10">
          <p className="absolute -left-32 top-0 w-24 pr-3 text-right pr-10">2026.3</p>
          <div className="absolute -left-[45px] top-1 size-5 rounded-full bg-sky-400" />
          <h2 className="mb-2 text-xl font-bold">Title 5</h2>
          <p className="mb-4">Add your text here.</p>
          <div className="mx-auto mb-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <img
            src={publicAsset("/images/cathouse/building.jpg")}
            alt="Building"
            className="mx-auto max-h-80 w-full object-contain"
          />
          <img
            src={publicAsset("/images/cathouse/half-done.jpg")}
            alt="Half done"
            className="mx-auto max-h-80 w-full object-contain"
          />
          <img
            src={publicAsset("/images/cathouse/half-done2.jpg")}
            alt="Half done 2"
            className="mx-auto max-h-80 w-full object-contain"
          />
        </div>
        </div>

        <div className="relative pb-10">
          <p className="absolute -left-32 top-0 w-24 pr-3 text-right pr-10">2026.4</p>
          <div className="absolute -left-[45px] top-1 size-5 rounded-full bg-sky-400" />
          <h2 className="mb-2 text-xl font-bold">Title 6</h2>
          <p className="mb-4">Add your text here.</p>
          <div className="mx-auto mb-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <img
            src={publicAsset("/images/cathouse/model-testing.png")}
            alt="Model testing"
            className="mx-auto max-h-80 w-full object-contain"
          />
          <img
            src={publicAsset("/images/cathouse/model-testing2.png")}
            alt="Model testing 2"
            className="mx-auto max-h-80 w-full object-contain"
          />
        </div>
        </div>

        <div className="relative pb-10">
          <p className="absolute -left-32 top-0 w-24 pr-3 text-right pr-10">2026.5</p>
          <div className="absolute -left-[45px] top-1 size-5 rounded-full bg-sky-400" />
          <h2 className="mb-2 text-xl font-bold">Title 7</h2>
          <p className="mb-4">Add your text here.</p>
          <div className="mx-auto mb-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <img
            src={publicAsset("/images/cathouse/final-testing.jpg")}
            alt="Final testing"
            className="mx-auto max-h-80 w-full object-contain"
          />
          <img
            src={publicAsset("/images/cathouse/raspberry-pi.jpg")}
            alt="Raspberry Pi"
            className="mx-auto max-h-80 w-full object-contain"
          />
        </div>
        </div>

        <div className="relative pb-10">
          <p className="absolute -left-32 top-0 w-24 pr-3 text-right pr-10">2026.6</p>
          <div className="absolute -left-[45px] top-1 size-5 rounded-full bg-sky-400" />
          <h2 className="mb-2 text-xl font-bold">Title 8</h2>
          <p className="mb-4">Add your text here.</p>
          <div className="mx-auto mb-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <img
            src={publicAsset("/images/cathouse/testing-done.jpg")}
            alt="Building"
            className="mx-auto max-h-80 w-full object-contain"
          />
          <img
            src={publicAsset("/images/cathouse/final.jpg")}
            alt="Half done"
            className="mx-auto max-h-80 w-full object-contain"
          />
          <img
            src={publicAsset("/images/cathouse/testing-2.jpg")}
            alt="Half done 2"
            className="mx-auto max-h-80 w-full object-contain"
          />
        </div>
        </div>

        <div className="relative pb-10">
          <p className="absolute -left-32 top-0 w-24 pr-3 text-right pr-10">2026.9</p>
          <div className="absolute -left-[45px] top-1 size-5 rounded-full bg-sky-400" />
          <h2 className="mb-2 text-xl font-bold">Title 8</h2>
          <p className="mb-4">Add your text here.</p>
          <div className="mx-auto mb-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-1">
            <img
              src={publicAsset("/images/cathouse/use.png")}
              alt="Building"
              className="mx-auto max-h-80 w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
