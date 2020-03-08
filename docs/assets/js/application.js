// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors
 * Copyright 2011-2020 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

/* global ClipboardJS: false */

(function () {
  'use strict'

  function makeArray(list) {
    return [].slice.call(list)
  }

  // Insert copy to clipboard button before .highlight
  var btnHtml = '<div class="bd-clipboard d-none d-md-block"><button type="button" class="btn btn-secondary btn-sm btn-clipboard" title="Copy to clipboard">Copy</button></div>'
  makeArray(document.querySelectorAll('figure.highlight, div.highlight'))
    .forEach(function (element) {
      element.insertAdjacentHTML('beforebegin', btnHtml)
    })


  var clipboard = new ClipboardJS('.btn-clipboard', {
    target: function (trigger) {
      return trigger.parentNode.nextElementSibling
    }
  })

  clipboard.on('success', function (e) {

    e.trigger.setAttribute('data-original-title', 'Copied!')

    e.trigger.setAttribute('data-original-title', 'Copy to clipboard')
    e.clearSelection()
  })

  clipboard.on('error', function (e) {
    var modifierKey = /mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl-'
    var fallbackMsg = 'Press ' + modifierKey + 'C to copy'

    e.trigger.setAttribute('data-original-title', fallbackMsg)

    e.trigger.setAttribute('data-original-title', 'Copy to clipboard')
  })

})()
