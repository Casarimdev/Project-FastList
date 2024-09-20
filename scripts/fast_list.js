// Elements
let button = document.getElementById("btn")
let input_add = document.querySelector("input#input-add")
let list = document.querySelector("ul.list")



button.addEventListener("click", (e) => {
    // New elements
    let newItemLi = document.createElement("li")
    let newItemP =  document.createElement("p")
    let newItemInput = document.createElement("input")
    let newItemI = document.createElement("i")
    
    e.preventDefault()

    let check = confirm(`Deseja adicionar ${input_add.value} na lista?`)

    if (check){
        alert(`Adicionando ${input_add.value} na lista...`)
        // Adding element Styles
        // LI
        newItemLi.classList.add('item-list')
        newItemLi.classList.remove('remove-opacity')
        
        // NewInput
        newItemInput.type = "checkbox"
        newItemInput.name = "input-standard"
        newItemInput.id = "input-standard"
        newItemInput.classList.add = "clicker"

        newItemP.textContent = input_add.value

        // New i
        newItemI.classList.add('fa-regular', 'fa-trash-can', 'clicker')
        newItemI.style.color = '#374151'


        // Appending elements
        list.appendChild(newItemLi)
        newItemLi.appendChild(newItemP)
        newItemP.prepend(newItemInput)
        newItemLi.appendChild(newItemI)

        // Cleaning values
        input_add.value = ''

        newItemI.addEventListener("click", () => {
            list.removeChild(newItemLi)
            // Adding element Styles
            // LI
            newItemLi.classList.add('item-removed')
    
            newItemP.textContent = 'O item foi removido da FastList!'
    
            // New i
            newItemI.classList.add('fa-solid', 'fa-circle-exclamation', 'margin')
            newItemI.style.color = '#ffffff'

            let removeItemI = document.createElement('i')
            removeItemI.classList.add('fa-regular', 'fa-circle-xmark', 'clicker')
            removeItemI.style.color = '#ffffff'
    
            // Appending elements
            list.appendChild(newItemLi)
            newItemLi.appendChild(newItemP)
            newItemP.prepend(newItemI)
            newItemLi.appendChild(removeItemI)

            removeItemI.addEventListener("click", () => {
                list.removeChild(newItemLi)
            })
        })

    } else{
        alert('Nada adicionado na lista...')
        input_add.value = ''
    }

})

