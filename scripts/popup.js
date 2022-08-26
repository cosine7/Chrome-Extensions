const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
const [p] = document.getElementsByTagName('p')
const [input] = document.getElementsByTagName('input')

input.addEventListener('input', () => {
  p.textContent = input.value
})

const changePlaybackRate = (rate) => {
  [...document.getElementsByTagName('video')].forEach(video => {
    video.playbackRate = Number(rate)
  })
}

input.addEventListener('change', () => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id},
    args: [input.value],
    func: changePlaybackRate
  })
})