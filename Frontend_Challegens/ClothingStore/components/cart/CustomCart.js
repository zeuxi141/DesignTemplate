const  CustomCard = document.createElement('CustomCart');

CustomCard.innerHTML = `
    <div><p>Hello word</p></div>
`

class Card extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(CustomCard.firstElementChild);
        
    }
}