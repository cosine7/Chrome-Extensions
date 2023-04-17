{
  const createPlaybackRateList = (...rates) => {
    const result = []

    rates.forEach(rate => {
      const li = document.createElement('li')
      li.className = 'bpx-player-ctrl-playbackrate-menu-item'
      li.setAttribute('data-value', rate)
      li.textContent = `${rate}x`
      result.push(li)
    })
    return result
  }
  const item = document.getElementsByClassName('bpx-player-ctrl-playbackrate-menu-item')
  const interval = setInterval(() => {
    if (item[0]) {
      item[0].after(...createPlaybackRateList(1.9, 1.8, 1.7, 1.6))
      item[0].before(...createPlaybackRateList(4.0, 3.0))
      clearInterval(interval)
    }
  }, 1000)
}