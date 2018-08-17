// This Page was added in SE101 Assignment 2 for the View Class.
// TODO: Adapt for html to stop the webpage shitting itself with &nbsp; (See area for optimisation and changes.txt)
// Done: 15/08/17
// Page Commented by DEV: Alex T 17/08/2018
class View {// eslint-disable-line no-unused-vars
  // return nothing
  static BLANK () {
    return ''
  }
  // return a single space. A source of &nbsp; diarrhea.  Fixed 15/08/17
  static SPACE () {
    return ' '
  }
  // return multiple spaces. Automatically fixed due to call of SPACE()
  static SPACES (n) {
    let result = ''
    for (let i = 0; i < n; i += 1) {
      result += View.SPACE()
    }
    return result
  }
  // return 4 spaces. A source of &nbsp; diarrhea. Fixed 15/08/17
  static TAB () {
    return '    '
  }
  // break the line. Be Careful where you call this, ass html will sometimes return it as a string.
  static NEWLINE () {
    return '<br>'
  }

  // centres target value in a space tabular form
  static centre (original, targetSize = 8) {
    let result = original
    let size = result.length
    while (size < targetSize) {
      if (result.length % 2) {
        result += View.SPACE()
      } else {
        result = View.SPACE() + result
      }
      size += 1
    }
    return result
  }
  // Allows Tabular spaces to be applied evenly through monospace. A source of &nbsp; diarrhea.  Fixed 15/08/17
  static padRight (original, targetSize = 16) {
    let result = '' + original
    let size = result.length
    while (size < targetSize) {
      result += ' '
      size += 1
    }
    return result
  }
}
