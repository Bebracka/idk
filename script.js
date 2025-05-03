
let historyList = [];
let currentIndex = -1;

function loadURL() {
  const input = document.getElementById('urlInput');
  let url = input.value.trim();
  if (!url) return;

  if (!url.includes('.') && !url.startsWith("http")) {
    url = "https://www.google.com/search?q=" + encodeURIComponent(url);
  } else if (!url.startsWith("http")) {
    url = "https://" + url;
  }

  document.getElementById('browserFrame').src = url;
  input.value = url;
  historyList.push(url);
  currentIndex = historyList.length - 1;
  updateTabs();
}

function goHome() {
  document.getElementById('browserFrame').src = 'https://example.com';
  document.getElementById('urlInput').value = 'https://example.com';
}

function goBack() {
  if (currentIndex > 0) {
    currentIndex--;
    const url = historyList[currentIndex];
    document.getElementById('browserFrame').src = url;
    document.getElementById('urlInput').value = url;
  }
}

function goForward() {
  if (currentIndex < historyList.length - 1) {
    currentIndex++;
    const url = historyList[currentIndex];
    document.getElementById('browserFrame').src = url;
    document.getElementById('urlInput').value = url;
  }
}

function clearHistory() {
  historyList = [];
  currentIndex = -1;
  document.getElementById('tabs').innerHTML = '';
}

function updateTabs() {
  const tabs = document.getElementById('tabs');
  tabs.innerHTML = '';
  historyList.forEach((url, index) => {
    const tab = document.createElement('div');
    tab.className = 'tab';
    tab.innerText = url.replace(/^https?:\/\//, '').slice(0, 25);
    tab.onclick = () => {
      currentIndex = index;
      document.getElementById('browserFrame').src = url;
      document.getElementById('urlInput').value = url;
    };
    tabs.appendChild(tab);
  });
}
