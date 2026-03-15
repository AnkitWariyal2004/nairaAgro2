"use client";

export default function FarmVideosSection() {
  const videos = ["/media/video2.mp4", "/media/videohoney1.mp4", "/media/video3.mp4"];

  return (
    <section className="py-16 md:py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-green-800 mb-3">
          Our Farm in Action
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
          Watch how we produce pure honey and organic products directly from our farm.
        </p>

        {/* Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">

          {videos.map((video, index) => (
            <div
              key={index}
              className="w-full max-w-[260px] rounded-xl overflow-hidden shadow-lg bg-black"
            >
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-[9/16] object-cover"
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}