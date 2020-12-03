
let replacements;

let paragraphs = document.getElementsByTagName('*')

chrome.storage.sync.get('replacements', function(data) {
  replacements = data.replacements
  console.log(replacements)
  findReplace(replacements)

})

chrome.runtime.onMessage.addListener(gotMessage)


function gotMessage(req, sender, sendResponse) {

  function exists(arr, search) {
    return replacements.some(row => row.includes(search))
  }

  if(!exists(replacements, req.deadname)) {
    replacements.push([req.deadname, req.realname])
  }

  chrome.storage.sync.set({replacements: replacements})

  findReplace(replacements)
}


function findReplace(replacements) {
  for (let i = 0; i < paragraphs.length; i++) {

    for (let j = 0; j < replacements.length; j++) {

      includesReplace(paragraphs[i], replacements[j][0], replacements[j][1], i)


      let deadNameFirst = replacements[j][0].split(' ')[0]
      let realNameFirst = replacements[j][1].split(' ')[0]

      includesReplace(paragraphs[i], deadNameFirst, realNameFirst, i)



      let deadNameLast = replacements[j][0].split(' ')[1]
      let realNameLast = replacements[j][1].split(' ')[1]

      if(deadNameLast !== realNameLast) {

      includesReplace(paragraphs[i], deadNameLast, realNameLast, i)

      }

    }

  }
}

function includesReplace(text, deadname, realname, index) {
  if(text.innerHTML.includes(deadname)) {
    let newText = text.innerHTML.replace(deadname, realname)
    document.getElementsByTagName('*')[index].innerHTML = newText
  }
}
