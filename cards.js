document.addEventListener('DOMContentLoaded', () => {


    const grid = document.getElementById('rosterGrid')

    const render = list => {
        grid.innerHTML = ''
        list. forEach(p => {
            const col = document.createElement('div')
            col.className = 'col-6 col-lg-2 mt-5'

            col.innerHTML =`
            <div class="card h-100 shadow-sm">
              <div class="card border-primary">
                <div class="card-header">
                    <img src="${p.image}" alt="${p.name} ${p.price}" class="card-img-top"
                    <div class="card-body text-center"></div>
                    <h3 class="card-title mb-1">${p.name} ${p.price}</h5>
                    <div class="badge badge-position badge-pos-${p.description}">${p.description}</div>
                    <p class="small text-muted mb-0"> ${p.ages}</p>+
                    ${p.button}
          </div>
          </div> 

            ` 
            grid.appendChild(col)
        })
    }
}
,
 render(products),
    grid.addEventListener('click', function (e) {
  if (e.target.classList.contains('show-info-btn')) {
    const index = e.target.getAttribute('data-player-index')
    const player = products[index]
    showPlayerModal(products)
  }
})
)
function showPlayerModal(products) {
  document.getElementById('modalImage').src = products.image
  document.getElementById('modalName').textContent = `${products.name} ${products.name}`
  document.getElementById('modalPrice').textContent = products.price
  document.getElementById('modalDescription').textContent = products.description
}




 