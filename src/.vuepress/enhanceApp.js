let scrollTimer = null;

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  window.addEventListener('scroll', () => {
    setIframeScrolling(false);
    clearTimeout(scrollTimer)
    scrollTimer = setTimeout(() => setIframeScrolling(true), 500);
  });
}

function setIframeScrolling(enabled) {
  const iframes = document.querySelectorAll('iframe');
  [].forEach.call(iframes, el => {
    el.style.pointerEvents = enabled ? 'unset' : 'none';
  })
}
