// let fakture = [{
//         name: "Ime kompanije",
//         pib: "12345678",
//         dateIssued: "2019-11-18",
//         value: 1000,
//         currency: "RSD",
//         timeStamp: "10:29:21",
//         dateStamp: "2019-11-18"
//     },
//     {
//         name: "Ime kompanije",
//         pib: "78945612",
//         dateIssued: "2019-11-18",
//         value: 1500,
//         currency: "RSD",
//         timeStamp: "10:29:21",
//         dateStamp: "2019-11-18"
//     }
// ]

const fakture = []
let count = 0

const section = document.querySelector('.input-container')
const comName = document.querySelector('#txt-company-name')
const comPib = document.querySelector('#txt-company-pib')
const dateSelect = document.querySelector('#txt-time')
const price = document.querySelector('#txt-value')
const insertBtn = document.querySelector('#btn-add')

const btnAll = document.querySelector('#fakture')

const inputList = document.querySelector('#item-list')

const addElementsToDOM = () => {
    const container = document.createElement('div')
    container.className = 'item-container'

    const info = document.createElement('div')
    info.className = 'item-info'
    container.appendChild(info)

    const divLabel = document.createElement('div')

    const labelName = document.createElement('label')
    labelName.className = 'company-name'
    labelName.textContent = comName.value

    const labelPib = document.createElement('label')
    labelPib.className = 'company-pib'
    labelPib.textContent = comPib.value

    const labelTime = document.createElement('label')
    labelTime.className = 'time-created'
    labelTime.textContent = dateSelect.value

    const labelPrice = document.createdElement('label')
    labelPrice.className = 'price-value'
    labelPrice.textContent = price.value

    divLabel.append(labelName, labelPib, labelTime, labelPrice)
    info.appendChild(divLabel)



    const divTimestamp = document.createElement('div')

    const labelTimestamp = document.createElement('label')
    labelTimestamp.className = 'insert-timestamp'
    labelTimestamp.innerHTML = `<span>[${inputDate.value}]
    </span><span>@${(new Date()).getHours()}:${(new Date()).getMinutes()}</span>`

    divTimestamp.appendChild(labelTimestamp)
    info.appendChild(divTimestamp)



    const divActions = document.createElement('div')
    divActions.className = 'item-actions'

    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'item-trashCan'
    deleteBtn.textContent = 'DELETE'

    divActions.appendChild(deleteBtn)
    info.appendChild(divActions)


    deleteBtn.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.remove()
        fakture.splice(fakture.findIndex(el => el.id === id), 1)
    })

    inputList.appendChild(container)

    comName.value = ''
    comPib.value = ''
    dateSelect.value = ''
    price.value = ''

}

const isValid = () => {
    comName.value.trim() != '' &&
        !Number.isNaN(Number(comPib.value.trim())) &&
        comPib.value.trim().length === 8 &&
        !Number.isNaN(Number(price.value)) &&
        price.value.trim() !== '' &&
        dateSelect.value !== ''
}

insertBtn.addEventListener('click', () => {

})