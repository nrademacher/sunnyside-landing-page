const Testimonials = () => (
  <section className="my-16 text-lg md:p-[6rem]">
    <h2 className="text-lg text-center uppercase mb-[4rem] md:mb-[7rem] tracking-[0.2em] font-heading md:text-xl text-brand-neutral-blue-4">
      Client testimonials
    </h2>
    <section className="flex flex-col items-center space-y-16 md:space-y-0 md:flex-row">
      <article className="flex flex-col items-center space-y-8 md:space-y-16">
        <img
          src="/images/image-emily.jpg"
          alt="Emily"
          className="w-1/4 rounded-full md:w-1/6"
        />
        <p className="px-8 text-center text-brand-neutral-blue-2">
          We put our trust in Sunnyside and they delivered, making sure our
          needs were met and deadlines were always hit.
        </p>
        <div className="grid place-items-center">
          <h3 className="mb-2 font-heading text-brand-neutral-blue-1">
            Emily R.
          </h3>
          <div className="text-sm text-brand-neutral-blue-4">
            Marketing Director
          </div>
        </div>
      </article>
      <article className="flex flex-col items-center space-y-8 md:space-y-16">
        <img
          src="/images/image-thomas.jpg"
          alt="Thomas"
          className="w-1/4 rounded-full md:w-1/6"
        />
        <p className="px-8 text-center text-brand-neutral-blue-2">
          Sunnyside's enthusiasm coupled with their keen interest in our brand's
          success made it a satisfying and enjoyable experience.
        </p>
        <div className="grid place-items-center">
          <h3 className="mb-2 font-heading text-brand-neutral-blue-1">
            Thomas S.
          </h3>
          <div className="text-sm text-brand-neutral-blue-4">
            Chief Operating Officer
          </div>
        </div>
      </article>
      <article className="flex flex-col items-center space-y-8 md:space-y-16">
        <img
          src="/images/image-jennie.jpg"
          alt="Jennie"
          className="w-1/4 rounded-full md:w-1/5"
        />
        <p className="px-8 text-center text-brand-neutral-blue-2">
          Incredible end result! Our sales increased over 400% when we worked
          with Sunnyside. Highly recommended!
        </p>
        <div className="grid place-items-center">
          <h3 className="mb-2 font-heading text-brand-neutral-blue-1">
            Jennie F.
          </h3>
          <div className="text-sm text-brand-neutral-blue-4">
            Business Owner
          </div>
        </div>
      </article>
    </section>
  </section>
);

export default Testimonials;
