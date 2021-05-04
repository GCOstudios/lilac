let section2 = ''
const starDiv = document.createElement('div')
const starOutline = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1125.218" height="901.62" viewBox="0 0 1125.218 901.62">
    <line id="Line_5" data-name="Line 5" y1="466" x2="434" transform="translate(690.121 1.022)" fill="none" stroke="#efd9ce" stroke-width="3"/>
    <line id="Line_6" data-name="Line 6" x1="689" transform="translate(1.121 467.022)" fill="none" stroke="#efd9ce" stroke-width="3"/>
    <path id="Path_9397" data-name="Path 9397" d="M-738.844-833.219l466.1,433.5" transform="translate(739.865 1300.241)" fill="none" stroke="#efd9ce" stroke-width="3"/>
  </svg>
`

starDiv.className = 'star-container'

setTimeout(() => {
  section2 = document.querySelector('.section-2')
  starDiv.innerHTML = starOutline

  section2.appendChild(starDiv)
}, 300);