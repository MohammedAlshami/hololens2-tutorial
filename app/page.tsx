import { ArduinoSetup } from "./ArduinoSetup";
export default function Home() {
  return (
    <div className="dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          A complete tutorial on how to setup the Hololens 2 with Arduino Uno
          and Slide Potentiometer
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          The objective of this, is prove a connection can be made between
          arduino and Hololens 2
        </p>
      </div>
      <div className="flex flex-col">
        <div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
            <h2 className="text-lg md:text-4xl text-black dark:text-white max-w-4xl font-bold">
              Arduino Setup
            </h2>
          </div>
          <ArduinoSetup />
        </div>

        <div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
            <h2 className="text-lg md:text-4xl text-black dark:text-white max-w-4xl font-bold">
              Visual Community Studio Setup
            </h2>
          </div>
          <ArduinoSetup />
        </div>

        <div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
            <h2 className="text-lg md:text-4xl text-black dark:text-white max-w-4xl font-bold">
              Unity Setup
            </h2>
          </div>
          <ArduinoSetup />
        </div>

        <div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
            <h2 className="text-lg md:text-4xl text-black dark:text-white max-w-4xl font-bold">
              Client Side Setup
            </h2>
          </div>
          <ArduinoSetup />
        </div>
        <div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
            <h2 className="text-lg md:text-4xl text-black dark:text-white max-w-4xl font-bold">
              Server Side Setup
            </h2>
          </div>
          <ArduinoSetup />
        </div>
      </div>
    </div>
  );
}
