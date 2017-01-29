function isDomSelector (str) {
  try {
    document.querySelector(str)
    return true
  } catch (error) {
    return false
  }
}

module.exports = isDomSelector
