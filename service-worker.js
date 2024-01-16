chrome.runtime.onStartup.addListener(() => {
  chrome.tabs.create({
    url: './page/index.html',
  })
})
