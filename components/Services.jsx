const Services = () => (
  <section className="grid md:grid-cols-2 md:grid-rows-3">
    <article className="bg-center bg-cover bg-services-transform-mobile md:bg-services-transform-desktop h-[50vh] md:h-[70vh] md:col-start-2" />
    <article className="mt-16 mb-14 md:grid md:place-content-center md:col-start-1 md:row-start-1 md:max-w-lg md:mx-auto">
      <h2 className="pl-8 font-serif text-4xl leading-tight md:pl-0 md:leading-snug md:block">
        Transform your brand
      </h2>
      <p className="px-8 my-10 font-medium leading-relaxed md:px-0 text-brand-neutral-blue-2">
        We are a full-service creative agency specializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you.
      </p>
      <div className="pl-8 max-w-max font-serif text-lg uppercase md:pl-0">
        Learn more
        <div className="relative -top-2 rounded-r-full rounded-l-full border-b-8 opacity-25 skew-x-6 border-[#FAD400]" />
      </div>
    </article>
    <article className="bg-center bg-cover bg-services-stand-out-mobile md:bg-services-stand-out-desktop h-[50vh] md:h-auto md:row-start-2" />
    <article className="grid place-content-center mt-16 mb-14 md:max-w-lg md:mx-auto">
      <h2 className="pl-8 font-serif text-4xl leading-tight md:pl-0 md:text-[2rem] md:leading-snug md:block">
        Stand out to the right audience
      </h2>
      <p className="px-8 my-10 font-medium leading-relaxed md:px-0 text-brand-neutral-blue-2">
        Using a collaborative formula of designers, researchers, photographers,
        videographers, and copywriters, we'll build and extend your brand in
        digital places.
      </p>
      <div className="pl-8 max-w-max font-serif text-lg uppercase md:pl-0">
        Learn more
        <div className="relative -top-2 rounded-r-full rounded-l-full border-b-8 opacity-25 skew-x-6 border-[#FE7867]" />
      </div>
    </article>
    <article className="flex flex-col-reverse h-screen bg-center bg-cover bg-services-graphic-design-mobile md:bg-services-grapic-design-desktop md:h-auto">
      <section className="mb-16 text-center">
        <h3 className="font-serif text-3xl text-brand-primary-cyan-1">
          Graphic Design
        </h3>
        <p className="px-8 mt-8 font-medium md:leading-normal text-brand-primary-cyan-1">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients' attention.
        </p>
      </section>
    </article>
    <article className="flex flex-col-reverse h-screen bg-center bg-cover bg-services-photography-mobile md:bg-services-photography-desktop md:h-auto">
      <section className="mb-16 text-center">
        <h3 className="font-serif text-3xl text-brand-primary-blue">
          Photography
        </h3>
        <p className="px-8 mt-8 font-medium md:leading-normal text-brand-primary-blue">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </section>
    </article>
  </section>
);

export default Services;
