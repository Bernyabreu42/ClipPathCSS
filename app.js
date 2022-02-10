const pintar = () => {
  const d = document,
    $content = d.querySelector('.content'),
    $cubo = d.querySelector('.cubo'),
    $roloColor = d.querySelector('.color'),
    $cursor = d.querySelector('.cursor'),
    $paletColors = d.querySelector('.paleta'),
    fragment = new DocumentFragment();


  // array of colors 
  const colors = [

    "#E9967A",
    "#FFA07A",
    "#DC143C",
    "#B22222",
    "#8B0000",
    '#5DADE2',
    '#2874A6',
    "#FFED00",
    "#a4aeba"
  ]

  // boxes showing the colors of the array
  colors.map(color => {
    let div = document.createElement('div')
    div.innerHTML
    div.style.background = `${color}`
    div.setAttribute('data-colors', color)
    div.classList.add('colors')
    div.style.cursor = `pointer`
    div.style.width = `70px`
    div.style.height = `70px`
    fragment.append(div)
  })

  // we show in the DOM
  $paletColors.append(fragment)

  // add to a wall
  $cubo.addEventListener('click', (e) => {
    if (e.target.className === 'right'
      || e.target.className === 'left'
      || e.target.className === 'top'
      || e.target.className === 'center') {
      if ($roloColor.getAttribute('data-color') !== null) {
        let color = $roloColor.getAttribute('data-color')
        e.target.style.background = `${color}`
      }
    };
  })

  // si el la clase del elemento coincide con 'colors' entonces 'span' igual al color seleccionado
  d.addEventListener('click', (e) => {
    if (e.target.matches('.colors')) {
      $roloColor.style.background = e.target.dataset.colors;
      $roloColor.dataset.color = e.target.dataset.colors;
    };
  })


  d.addEventListener("click", (e) => {
    console.log(e.target)
  })

  $content.addEventListener('mousemove', (e) => {

    if (e.clientX - 20 > $content.offsetWidth - 24 || e.clientY - 20 > $content.offsetHeight - 24 || e.clientX - 20 <= 0 || e.clientY - 20 <= 0) {
      return;
    }

    $cursor.setAttribute("style", `top: ${e.clientY - 60}px; left: ${e.clientX - 25}px `)
  })

}


//  initial renderizen 
document.addEventListener('DOMContentLoader', pintar())