"use client";

import { Egg, Drumstick, Leaf, HeartPulse } from "lucide-react";

export default function NutrioProgramme() {
  return (
    <section className="bg-blue-700 py-16 relative">
      {/* Leaf decoration */}
      <div className="absolute top-0 right-1/3 opacity-20">
        <svg
          width="150"
          height="150"
          viewBox="0 0 150 150"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M75 15C50 40 15 50 15 75C15 100 50 110 75 135C100 110 135 100 135 75C135 50 100 40 75 15Z" />
        </svg>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">
          Know About Nutrio Programme
        </h2>
        <p className="text-blue-100 text-sm">Fusce vulputate eleifend sapien</p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Left column */}
          <div className="space-y-16">
            {/* Item 1 */}
            <div className="text-right pr-12 md:pr-16">
              <h3 className="text-xl font-bold text-white mb-2">
                Keeps Healthy Record
              </h3>
              <p className="text-blue-100 text-sm">
                Sed vestibulum nulla elementum auctor tincidunt. Aliquam sit
                amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim
                nulla, sollicitudin ac hendrerit tempore.
              </p>
            </div>

            {/* Item 3 */}
            <div className="text-right pr-12 md:pr-16 mt-24 pt-8">
              <h3 className="text-xl font-bold text-white mb-2">
                Eggs Make you Fit
              </h3>
              <p className="text-blue-100 text-sm">
                Sed vestibulum nulla elementum auctor tincidunt. Aliquam sit
                amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim
                nulla, sollicitudin ac hendrerit tempore.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-16">
            {/* Item 2 */}
            <div className="text-left pl-12 md:pl-16">
              <h3 className="text-xl font-bold text-white mb-2">
                Meats Reduces Fat
              </h3>
              <p className="text-blue-100 text-sm">
                Aenean leo ligula porttitor eu consequat vitae eleifend ac enim.
                Aliquam lorem ante dapibus in viverra quis feugiat a tellus.
                Phasellus viverra nulla ut metus varius laoreet.
              </p>
            </div>

            {/* Item 4 */}
            <div className="text-left pl-12 md:pl-16 mt-24 pt-8">
              <h3 className="text-xl font-bold text-white mb-2">
                Pure Green Vegetables
              </h3>
              <p className="text-blue-100 text-sm">
                Donec vitae sapien ut libero venenatis faucibus. Nullam quis
                ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
                leo. Sed fringilla mauris sit amet nibh.
              </p>
            </div>
          </div>
        </div>

        {/* Center icons - positioned absolutely to be exactly in the center */}
        <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 h-full">
          <div className="flex flex-col justify-between h-full py-6">
            <div className="bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center">
              <HeartPulse className="text-blue-700" size={28} />
            </div>

            <div className="bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center">
              <Drumstick className="text-blue-700" size={28} />
            </div>

            <div className="bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center">
              <Egg className="text-blue-700" size={28} />
            </div>

            <div className="bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center">
              <Leaf className="text-blue-700" size={28} />
            </div>
          </div>
        </div>

        {/* Mobile icons (only visible on small screens) */}
        <div className="md:hidden flex flex-wrap justify-center gap-8 mt-8">
          <div className="bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center">
            <HeartPulse className="text-blue-700" size={28} />
          </div>

          <div className="bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center">
            <Drumstick className="text-blue-700" size={28} />
          </div>

          <div className="bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center">
            <Egg className="text-blue-700" size={28} />
          </div>

          <div className="bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center">
            <Leaf className="text-blue-700" size={28} />
          </div>
        </div>
      </div>
    </section>
  );
}
