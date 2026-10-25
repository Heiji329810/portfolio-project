import { publicAsset } from "@/lib/utils"

export function ScreenCathouse() {
  return (
    <div className="p-10">
      <h1 className="mb-8 text-2xl font-bold">Cat House</h1>
      <div className="mb-6 grid grid-cols-1 gap-8 md:grid-cols-2">
        <h5 className="text-xl">In my community, there are a lot of stray cats and needed many people to rescue and take care of them. In winter, many stray cats can't survive because of the cold, and it is also sometimes difficult for the rescuers to find them, and organize them. Therefore, I built a cat house for stray cats using a temperature and humidity sensor and a ultrasonic sensor. I also used ESP323 with a camera to take photos of the cats and send them to a model I trained to detect if there is a cat in the house. If the result is true, and the temperature in the cat house is lower than 20˚C, the heating pad will be turned on by the relay which receives signals from ESP32S3 directly. I used a Raspberry Pi to read the data from the sensors, and serve as a wifi hotspot to connect to the camera, and serve as a web server to record logs and send them to DeepSeek everyday for daily report. In this way, I hope to not only improve the living conditions of the stray cats, but also help the rescuers to find them and take care of them more easily.</h5>
        <div className="relative min-h-64 md:min-h-0">
          <img
            src={publicAsset("/images/cathouse/clear-final.jpg")}
            alt="Clear final"
            className="w-full object-contain md:absolute md:inset-0 md:h-full md:w-full"
          />
        </div>
      </div>
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
          <p className="mb-4">The picture on the left is the successful connection of the wires with a breadboard, and the picture on the right is the notes that I have taken to give myself instructions on how to connect the wires.</p>
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
          <h2 className="mb-2 text-xl font-bold">XPS structure</h2>
          <p className="mb-4">I designed the cat house look like a very typical house. And I decided to use XPS boards and acrylic sheets to build the cat house . The XPS boards are relatively lighter and they are very heat-insulating and keeps the heat inside the cat house. And I used a solid wooden board as the bottom of the cat house so it will not be too light to be easily moved. I also bought some wood-grain stickers to make the cat hosue look better and more natural.</p>
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
          <h2 className="mb-2 text-xl font-bold">Sensor installationß</h2>
          <p className="mb-4">After testing that the sensors work well together, I tried to plan out where the wires should be placed in the whole house so the altrasonic sensor, the temperature and humidity sensor and the ESP32S3 board can work well in their places. I put the altrasonic sensor right beside the door, and the humidity and temperature sensor, together with the ESP32S3 board inside the house so the camera has a wider view.</p>
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
          <h2 className="mb-2 text-xl font-bold">Final build</h2>
          <p className="mb-4">The final building of the cat house is done. I organized wiring in the house so it looks more tidy and neat. And I also put the stickers on both inside and outside of the cat house to make it look more natural and cute. There is also a long piece of exposed cable trough to hide the wires inside the cat house, so the inside does not look messy. Then, I 3D-printed a box to keep the batteries, exposed wires, and the relay, and another smaller box with a window on the side to keep the ESP32S3, and allow the camera to see through the window. Both boxes have lids to allow people to open them and take the deviecs out. I also used the acrylic sheets to split the house so that the heating pad and the space for cats are separated from the boxes keeping all the devices.</p>
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
          <h2 className="mb-2 text-xl font-bold">Model testing</h2>
          <p className="mb-4">Then, I trained a recognition model that can recognize cats, with designing the dataset and running many rounds of testing. During the process, I found that the main problems of wrong detection is that it had never seen pictures like that in the dataset, so I improved by adding more and more pictures, including pictures with various backgrounds, pictures with various animals inside, pictures with cats of different breads, and cats with different physical conditions. Then after training I tried to put it on ESP32, but the storage was not enough. But the model itself is usable, as I have run tests and put the results on a flask server that I set up. So I can see the results, and also the temperature data. </p>
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
          <h2 className="mb-2 text-xl font-bold">Raspberry Pi setup</h2>
          <p className="mb-4">To provide Wifi for my ESP32S3 and also get the model running, I used a raspberry Pi. The server is set up on it to serve the model and the temperature data. And I also set up a wifi hotspot on it to allow the ESP32S3 to connect to the internet. It is also in charge of recording the logs and sending them to DeepSeek everyday for daily report.</p>
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
          <h2 className="mb-2 text-xl font-bold">Final build</h2>
          <p className="mb-4">The following three pictures shows how it look like finally. The acrylic sheets weren't been put inside for a better overview of the cat house.</p>
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
          <h2 className="mb-2 text-xl font-bold">Placed it in the community!</h2>
          <p className="mb-4">Finally, I put the cat house in the community, and it is working well. I can see the temperature and humidity data, and the model detection results. And I can also see the logs and the daily report sent to DeepSeek. It is a great experience to build something that can help the community and the stray cats.</p>
          <div className="mx-auto mb-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-1">
            <img
              src={publicAsset("/images/cathouse/clear-final.jpg")}
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
