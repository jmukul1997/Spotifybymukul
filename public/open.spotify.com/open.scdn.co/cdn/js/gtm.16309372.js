/* This is a browser-only file */
/* eslint-disable ssr-friendly/no-dom-globals-in-module-scope */

/* eslint-disable prefer-template */
/* eslint-disable no-var */
/* eslint-disable no-console */

(function (w) {
  function readJSONFromDOM(id, defaultValue) {
    try {
      return JSON.parse(document.getElementById(id).innerHTML) || defaultValue;
    } catch (err) {
      console.error('Error: element #' + id + ' was not readable in DOM.', err);
      return defaultValue;
    }
  }

  var config = readJSONFromDOM('config', {});

  w.dataLayer = w.dataLayer || [];

  const loggedIn = !Boolean(config.isAnonymous);

  w.dataLayer.push({
    event: 'webplayer_datalayer_init',
    type: config.app_name || 'default_app_name',
    loggedIn,
    language: config.locale,
    experiments: readJSONFromDOM('baba', []),
    market: config.market, // Based on Geo-IP
    userCountry: config.userCountry, // Based on user account country. Null if logged out
    isPremium: loggedIn ? config.isPremium : null, // Null if logged out
  });

  /**
   * This method name should be changed to be something more idiomatic to be used
   * with GTM which is what this is meant for. Originally, this was called gtag to
   * be used with the gtag library.
   */
  w.gtag = function (payloadType, ...rest) {
    if (payloadType === 'event') {
      const [event_action, eventPayload] = rest;
      w.dataLayer.push({
        event: 'gtm.event',
        detail: {
          event_action,
          ...eventPayload,
        },
      });
    } else if (payloadType === 'pageview') {
      const [locationObj] = rest;
      w.dataLayer.push({
        event: 'gtm.pageview',
        location: locationObj,
      });
    } else {
      w.dataLayer.push({
        type: payloadType,
        detail: rest[0],
      });
    }
  };
})(window);
