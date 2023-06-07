window.addEventListener('resize', (ev) => {
  stickyHeaderTableAdjust()
})

function stickyHeaderTableAdjust() {
  const divNode = document.querySelector('.sticky-header-table')
  const creditNode = document.querySelector('#IM_CREDIT')
  if(divNode && creditNode) {
    const scrollHeight = window.innerHeight - divNode.offsetTop - (creditNode ? creditNode.clientHeight : 18)
    divNode.style.height = scrollHeight + 'px'
  }
}