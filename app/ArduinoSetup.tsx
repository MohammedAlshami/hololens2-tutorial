import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ArduinoSetup() {
  const data = [
    {
      title: "Setup the Board",
      content: (
        <div className="flex flex-col gap-12">
          <div>
            <h2 className="font-bold text-white text-3xl mb-4">
              Step 1: Prepare the needed components{" "}
            </h2>
            <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
              <h2>The components needed for this step are :</h2>
              <ul className="list-disc ml-4">
                <li>Arduino Uno R3 board</li>
                <li>USB cable</li>
                <li>Slide Potentiometer</li>
                <li>Male to Female Cables</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.625,f_auto,h_214,q_auto,w_380/c_pad,h_214,w_380/F7697409-01?pgw=1"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <img
                src="https://wiki.keyestudio.com/images/a/a2/Ks0279_%E6%BB%91%E8%B0%83%E7%94%B5%E4%BD%8D%E5%99%A8.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <img
                src="https://synacorp.my/v3/2992-large_default/usb-cable-type-b-for-arduino-30cm-1m.jpg"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <img
                src="https://www.autobotic.com.my/image/autobotic/image/data/all_product_images/product-2190/2814-1.jpg"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-white text-3xl mb-4">
              Step 2: Setup the circuit board{" "}
            </h2>
            <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
              <h2>Apply the following connections</h2>
              <ul className="list-disc ml-4">
                <li>
                  Connect the Potentiometer GND to any of the arduino GND{" "}
                </li>
                <li>Connect the Potentiometer OTA to the serial port A2</li>
                <li>
                  Connect the VCC Potentiometer to the Arduino V5 power port
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1">
              <img
                src="/ArduinoBoard.jpg"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-32 md:h-64 lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
          <div>
            <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
              <h2 className="font-bold text-white text-3xl mb-4">
                Step 3: Download Arduino Driver
              </h2>
              <h2>
                Download the arduino 340 Driver from the following link{" "}
                <a
                  href="https://drive.google.com/file/d/1qF5cVEHgOYuMWaA_hq_R49UCT7_Sooj5/view?usp=sharing"
                  className="text-blue-600"
                >
                  Click me to go the download page
                </a>
              </h2>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Setup the code",
      content: (
        <div className="flex flex-col gap-12">
          <div>
            <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
              <h2 className="font-bold text-white text-3xl mb-4">
                Step 1: Download Arduino IDE
              </h2>
              <h2>
                Download the arduino IDE from the following link{" "}
                <a
                  href="https://www.arduino.cc/en/software"
                  className="text-blue-600"
                >
                  Click me to go the download page
                </a>
              </h2>
            </div>
            <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
              <h2 className="font-bold text-white text-3xl mb-4">
                Step 2: Setup the code
              </h2>
              <h2>
                You can download the source code from the following link{" "}
                <a
                  href="https://drive.google.com/file/d/1zawt65GzisGZAlWLqjIttzCb23vy6qb2/view?usp=sharing"
                  className="text-blue-600"
                >
                  Click me to get the arduino source code
                </a>
              </h2>
              <div className="grid grid-cols-1 mt-4">
                <img
                  src="/ArduinoIde.png"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-32 md:h-64 lg:h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
            <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
              <h2 className="font-bold text-white text-3xl mb-4">
                Step 3: Know The Communication Port
              </h2>
              <h2>
                When you connect to the arduino to the pc or laptop, each usb
                port has a different Communication port name. the names are
                usually COM1, COM2, COM3, COM4, etc. Once you connected the
                Arduino, You can check the Arduino component name by going to
                the device manager and check the port name.
              </h2>
              <div className="grid grid-cols-1 mt-4">
                <img
                  src="https://support.arduino.cc/hc/article_attachments/12415977650332"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-32 md:h-64 lg:h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <h2 className="text-center mt-2">
                  In this case, the port name is COM11
                </h2>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
