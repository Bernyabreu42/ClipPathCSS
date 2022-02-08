
const pintar = () => {
  const d = document,
    $cubo = d.querySelector('.cubo'),
    $cubo_top = d.querySelector('.top'),
    $span = d.getElementById('color'),
    $cubo_center = d.querySelector('.center'),
    $cubo_left = d.querySelector('.left'),
    $cubo_right = d.querySelector('.right'),
    $paletColors = d.querySelector('.paleta'),
    fragment = new DocumentFragment();

  const colors = [
    "#CD5C5C",
    "#F08080",
    "#FA8072",
    "#E9967A",
    "#FFA07A",
    "#DC143C",
    "#B22222",
    "#8B0000",
    '#5DADE2',
    '#2874A6']

  colors.map(color => {
    let div = document.createElement('div')
    div.innerHTML
    div.style.background = `${color}`
    div.dataset.colors = `${color}`
    div.classList.add('colors')
    div.style.cursor = `pointer`
    div.style.width = `50px`
    div.style.height = `50px`
    fragment.append(div)
  })

  $paletColors.append(fragment)



  d.addEventListener('click', (e) => {
    if (e.target.matches('.colors')) {
      $span.dataset.color = e.target.dataset.colors;
    };
  })

  $cubo.addEventListener('click', (e) => {
    if (e.target.className === 'right'
      || e.target.className === 'left'
      || e.target.className === 'top'
      || e.target.className === 'center') {
      if ($span.getAttribute('data-color') !== null) {
        let color = $span.getAttribute('data-color')
        e.target.style.background = `${color}`
      }
    };
  })

}


pintar()