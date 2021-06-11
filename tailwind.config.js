module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "'Barlow', sans-serif",
      body: "'Barlow', sans-serif",
      serif: "'Fraunces', serif",
      heading: "'Fraunces', sans-serif",
    },
    extend: {
      backgroundColor: {
        'brand-primary-red': 'hsl(7, 99%, 70%)',
        'brand-primary-yellow': 'hsl(51, 100%, 49%)',
        'brand-primary-blue': 'hsl(198, 62%, 26%)',
        'brand-primary-cyan-1': 'hsl(167, 40%, 24%)',
        'brand-primary-cyan-2': 'hsl(168, 34%, 41%)',
        'brand-neutral-blue-1': 'hsl(212, 27%, 19%)',
        'brand-neutral-blue-2': 'hsl(213, 9%, 39%)',
        'brand-neutral-blue-3': 'hsl(232, 10%, 55%)',
        'brand-neutral-blue-4': 'hsl(210, 4%, 67%)',
        'brand-neutral-white': 'hsl(210, 4%, 67%)',
      },
      textColor: {
        'brand-primary-red': 'hsl(7, 99%, 70%)',
        'brand-primary-yellow': 'hsl(51, 100%, 49%)',
        'brand-primary-blue': 'hsl(198, 62%, 26%)',
        'brand-primary-cyan-1': 'hsl(167, 40%, 24%)',
        'brand-primary-cyan-2': 'hsl(168, 34%, 41%)',
        'brand-neutral-blue-1': 'hsl(212, 27%, 19%)',
        'brand-neutral-blue-2': 'hsl(213, 9%, 39%)',
        'brand-neutral-blue-3': 'hsl(232, 10%, 55%)',
        'brand-neutral-blue-4': 'hsl(210, 4%, 67%)',
        'brand-neutral-white': 'hsl(210, 4%, 67%)',
      },
      backgroundImage: (theme) => ({
        'header-hero-desktop': "url('/images/desktop/image-header.jpg')",
        'header-hero-mobile': "url('/images/mobile/image-header.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
