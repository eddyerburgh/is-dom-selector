require('./querySelectorShim')

function isDomSelector (str) {
  if (typeof str !== 'string') {
    return false
  }

  if (!document) {
    throw new Error('is-css-selector cannot access document. Are you running in a browser?')
  }

  try {
    document.querySelector(str)
    return true
  } catch (error) {
    return false
  }
}

module.exports = isDomSelector
