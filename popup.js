'use strict';
document.addEventListener('DOMContentLoaded', documentEvents  , false);

function myAction(deadname, realname) {

    let params = {
      active: true,
      currentWindow: true,
    }
    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
      let msg = {
        deadname: deadname.value,
        realname: realname.value
      }

      chrome.tabs.sendMessage(tabs[0].id, msg)

    }

    // do processing with data
    // you need to right click the extension icon and choose "inspect popup"
    // to view the messages appearing on the console.
}

function documentEvents() {
  document.getElementById('changeName').addEventListener('click',
    function() { myAction(document.getElementById('deadname'), document.getElementById('realname'));
  });
  // you can add listeners for other objects ( like other buttons ) here
}




// let changeButton = document.getElementById('changeName')
// let form = document.getElementById('form')

// console.log(form)

// form.onsubmit(console.log(form, 'form'))

// changeButton.onclick(function(event) {console.log('heyuuuu', event)})
