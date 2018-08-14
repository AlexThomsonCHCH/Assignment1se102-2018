// This Area Is reserved for The Background Change Section
function makeLabel (datatype1) {
  var label = document.createElement('label')
  var att = document.createAttribute('for')
  att.value = datatype1
  label.setAttributeNode(att)
  label.innerText = datatype1
  document.body.appendChild(label)
}

function makeInput (theType) {
  var input = document.createElement('input')
  var att = document.createAttribute('type')
  att.value = theType
  input.setAttributeNode(att)
  var att = document.createAttribute('value')
  att.value = theType
  input.setAttributeNode(att)
  document.body.appendChild(input)
}

// <label for="image">Choose Background:</label>
// <select id="image">
//    <option value="images/uk.png" selected>Firefox</option>
//    <option value="images/crocodile.png">Crocodile</option>
//    <option value="images/tortoise.png">Tortoise</option>
// </select>
