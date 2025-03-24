export const initWow = () => {
  if (typeof window !== 'undefined') {
    import('wow.js')
      .then((module) => {
        const WOW = module.default || module;

        if (WOW && typeof WOW === 'function') {
          new WOW({
            boxClass: 'wow',
            animateClass: 'animated-wow',
            offset: 0,
            mobile: true,
            live: true,
          }).init();
        } else {
          console.error('WOW is not a function');
        }
      })
      .catch((err) => {
        console.error('load error WOW.js:', err);
      });
  }
};


// export const initWow = () => {
//   if (typeof window !== 'undefined') {
//     import('wow.js').then((module) => {
//       new WOW({
//         boxClass: 'wow',
//         animateClass: 'animated-wow',
//         offset: 0,
//         mobile: true,
//         live: false,
//       }).init();
//     });
//   }
// };
