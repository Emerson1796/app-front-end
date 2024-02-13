class Burner {
    constructor(color, element) {
        this.color = color;
        this.element = element;
        this.isOn = false;
    }

    toggle() {
        this.isOn = !this.isOn;
        this.updateVisual();
    }

    updateVisual() {
        this.element.style.backgroundColor = this.isOn ? this.color : 'gray';
    }
}

class Oven {
    constructor(lightElement, ovenElement) {
        this.lightElement = lightElement;
        this.ovenElement = ovenElement;
        this.lightOn = false;
        this.isOn = false;
    }

    toggleLight() {
        this.lightOn = !this.lightOn;
        this.updateLightVisual();
    }

    toggleOven() {
        this.isOn = !this.isOn;
        this.updateOvenVisual();
    }

    updateLightVisual() {
        this.lightElement.textContent = `Oven Light: ${this.lightOn ? 'On' : 'Off'}`;
    }

    updateOvenVisual() {
        this.ovenElement.textContent = `Oven: ${this.isOn ? 'On' : 'Off'}`;
    }
}

// Classe principal que representa o fogão
export class Stove {
    constructor(color, dimensions, brand, containerId) {
        this.color = color;
        this.dimensions = dimensions;
        this.brand = brand;
        this.container = document.getElementById(containerId);

        this.initialize();
    }

    initialize() {
        // Cria a estrutura HTML do fogão dentro do container
        this.container.innerHTML = `
            <h2>${this.brand} Stove</h2>
            <p>Color: ${this.color}</p>
            <p>Dimensions: ${this.dimensions}</p>
            <div id="burners"></div>
            <button id="oven-light">Oven Light: Off</button>
            <button id="oven-toggle">Oven: Off</button>
        `;

        const burnersContainer = this.container.querySelector('#burners');
        this.burners = ['red', 'blue', 'green', 'yellow'].map((color, index) => {
            const burnerElement = document.createElement('button');
            burnerElement.id = `burner-${index}`;
            burnerElement.textContent = `Burner ${index + 1}`;
            burnerElement.style.backgroundColor = 'gray';
            burnersContainer.appendChild(burnerElement);
            return new Burner(color, burnerElement);
        });

        const lightElement = this.container.querySelector('#oven-light');
        const ovenElement = this.container.querySelector('#oven-toggle');
        this.oven = new Oven(lightElement, ovenElement);

        this.addEventListeners();
    }

    addEventListeners() {
        this.burners.forEach(burner => {
            burner.element.addEventListener('click', () => burner.toggle());
        });

        this.oven.lightElement.addEventListener('click', () => this.oven.toggleLight());
        this.oven.ovenElement.addEventListener('click', () => this.oven.toggleOven());
    }
}
