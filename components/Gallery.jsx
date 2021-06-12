const Gallery = () => (
  <section className="grid grid-cols-2 md:grid-cols-4">
    <article className="col-start-1 bg-center bg-cover bg-gallery-milkbottles-mobile md:bg-gallery-milkbottles-desktop h-[25vh] md:h-[50vh]" />
    <article className="bg-center bg-cover bg-gallery-orange-mobile md:bg-gallery-orange-desktop h-[25vh] md:h-[50vh] md:col-start-2" />
    <article className="bg-center bg-cover bg-gallery-cone-mobile md:bg-gallery-cone-desktop h-[25vh] md:h-[50vh] md:col-start-3" />
    <article className="bg-center bg-cover bg-gallery-sugar-cubes-mobile md:bg-gallery-sugar-cubes-desktop h-[25vh] md:h-[50vh] md:col-start-4" />
  </section>
);

export default Gallery;
