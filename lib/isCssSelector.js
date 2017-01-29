function isCssSelector (str) {
  try {
    document.querySelector(str)
    return true
  } catch (error) {
    return false
  }
}

module.exports = isCssSelector
