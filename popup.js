'use strict';
document.addEventListener('DOMContentLoaded', documentEvents  , false);

function changeName(deadname, realname) {

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
}

function documentEvents() {
  document.getElementById('changeName').addEventListener('click',
    function() { changeName(document.getElementById('deadname'), document.getElementById('realname'));
  });
}
