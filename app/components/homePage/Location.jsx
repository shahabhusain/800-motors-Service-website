import React from "react";

const Location = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="w-[90%] mx-auto flex flex-col gap-y-3 items-center justify-center">

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold max-w-3xl mb-10">
         Auto Repairs Across All Major Dubai Areas
        </h2>

        {/* Map Container */}
        <div className="w-full h-[400px] border border-gray-400">
          <iframe
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            src="https://maps.google.com/maps?q=dubai&t=&z=11&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Location;