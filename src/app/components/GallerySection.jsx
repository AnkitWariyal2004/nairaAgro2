function GallerySection({ title, images }) {
  return (
    <div className="mb-16">
      
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          {title}
        </h2>
        <div className="w-16 h-1 bg-green-600 mx-auto mt-3"></div>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto gap-4 sm:gap-6"
        columnClassName="masonry-column"
      >
        {images.map((item, index) => (
          <div key={index} className="mb-4 sm:mb-6">
            <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300">
              
              <div className="w-full aspect-[4/3] relative">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width:640px) 100vw, (max-width:768px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>

            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
}


export default GallerySection;