console.log('hey boy')

let replacements = [
];


chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(req, sender, sendResponse) {
  replacements.push([req.deadname, req.realname])
  findReplace(replacements)
}


let paragraphs = document.getElementsByTagName('*')
let body = document.getElementsByTagName('*')
let deadName = document.getElementById('deadname')
let realName = document.getElementById('realname')


function findReplace(replacements) {
  for (let i = 0; i < paragraphs.length; i++) {

    for (let j = 0; j < replacements.length; j++) {

      if(paragraphs[i].innerHTML.includes(replacements[j][0])) {


        let newParagraph = paragraphs[i].innerHTML.replace(replacements[j][0], replacements[j][1])

        document.getElementsByTagName('*')[i].innerHTML = newParagraph

       // just first name

      }

      let deadNameFirst = replacements[j][0].split(' ')[0]
      let realNameFirst = replacements[j][1].split(' ')[0]

      if(paragraphs[i].innerHTML.includes(deadNameFirst)){


      let firstNameReplace = paragraphs[i].innerHTML.replace(deadNameFirst, realNameFirst)

      document.getElementsByTagName('*')[i].innerHTML = firstNameReplace
      }

      let deadNameLast = replacements[j][0].split(' ')[1]
      let realNameLast = replacements[j][1].split(' ')[1]

      if(deadnameLast !== realNameLast) {
        if(paragraphs[i].innerHTML.includes(deadNameLast)) {
          let lastNameReplace = paragraphs[i].innerHTML.replace(deadNameLast, realNameLast)

          document.getElementsByTagName('*')[i].innerHTML = lastNameReplace
        }
      }

    }

  }
}

