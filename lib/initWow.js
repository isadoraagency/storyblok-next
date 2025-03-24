export const initWow = () => {
  if (typeof window !== 'undefined') {
    import('wowjs').then((module) => {
      new WOW({
        boxClass: 'wow',
        animateClass: 'animated-wow',
        offset: 0,
        mobile: true,
        live: false,
      }).init();
    });
  }
};