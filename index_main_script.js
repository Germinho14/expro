var amazon_db_telephones = [
    {
        nom: 'DOOGEE S97 PRO',
        img: './tel3.webp',
    },
]

function createDomElement(type, classes, id, attributes) 
    var domElement = document.createElement(type)

    if  (classes) {
        console.log('classes')
        classes.forEach(domElementClass => {
            domElement.classList.add(domElementClass)
        })
    }

    domElement.id = id

        if (attributes) {
        console.log('attributes')
        for (const [key, value] of Object.entries(attributes)) {
        domElement.setAttribute(key, value)
        }
    }
    return domElement

function addTelephoneCard(tel, ulPhoneList) {
    var liPhoneCard = document.createElement('li')

    var divPhoneCard = createDomElement(
        'div',
        [
          "uk-card",
          "uk-card-default",
          "uk-card-body",
          "uk-text-center",
          "uk-sortable-handle",
        ],
        null,
    )

    var imgPhoneCard = document.createElement('img')
        imgPhoneCard.src = tel.img

    var nomPhoneCard = document.createElement('p')
        nomPhoneCard.innerText = tel.nom

        divPhoneCard.appendChild(imgPhoneCard)
        divPhoneCard.appendChild(nomPhoneCard)
    

        liPhoneCard.appendChild(divPhoneCard)

        ulPhoneList.appendChild(liPhoneCard)
           }

function build(){
    
    var ulPhoneList = createDomElement(
        'ul',
        ["uk-grid-small", "uk-child-width-1-2", "uk-child-width-1-4@s"],
        'commeTuVeux',
        {
            'uk-sortable': 'handle: .uk-sortable-handle',
            'uk-grid' : ''
        }
    )
    amazon_db_telephones.forEach(tel => {
        addTelephoneCard(tel, ulPhoneList)
           })
    document.body.appendChild(ulPhoneList)
}

build()
    
function addPhone() {
    var getModel = document.getElementById('inputModel').value
    var getImg = document.getElementById('inputImg').value
    

    var obj = {
        nom: getModel,
        img: getImg
}    

    var ul = document.getElementById('commeTuVeux')
            addTelephoneCard(obj, ul)

}

   








