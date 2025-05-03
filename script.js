
function loadURL() {
  const input = document.getElementById('urlInput');
  const iframe = document.getElementById('browserFrame');
  let url = input.value.trim();
  if (!url.startsWith("http")) {
    url = "https://" + url;
  }
  iframe.src = url;
}
function reloadPage() {
  const iframe = document.getElementById('browserFrame');
  iframe.src = iframe.src;
}
function goBack() {
  const iframe = document.getElementById('browserFrame').contentWindow;
  iframe.history.back();
}
function goForward() {
  const iframe = document.getElementById('browserFrame').contentWindow;
  iframe.history.forward();
}
