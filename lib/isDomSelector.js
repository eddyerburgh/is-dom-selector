require('./querySelectorShim')

function isDomSelector (str) {
  if (typeof str !== 'string') {
    return false
  }

  try {
    if (document.querySelector) {
      return Boolean(document.querySelector(str))
    }

    if (isDomElement(document.getElementsByTagName(str))) {
      return true
    }

    if (isDomElement(document.getElementsByClassName(str))) {
      return true
    }

    if (isDomElement(document.getElementById(str))) {
      return true
    }

    return false
  } catch (error) {
    return false
  }
};

function isDomElement (element) {
  return element && element.length
};

module.exports = isDomSelector
