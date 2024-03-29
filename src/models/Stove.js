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
        document.getElementById("light-indicator").style.backgroundColor = this.lightOn ? 'yellow' : 'gray';
    }

    updateOvenVisual() {
        this.ovenElement.textContent = `Oven: ${this.isOn ? 'On' : 'Off'}`;
        document.getElementById("oven-indicator").style.backgroundColor = this.isOn ? 'orange' : 'gray';
    }
}

export class Stove {
    constructor(color, dimensions, brand, containerId) {
        this.color = color;
        this.dimensions = dimensions;
        this.brand = brand;
        this.container = document.getElementById(containerId);

        this.initialize();
    }

    initialize() {
        this.container.innerHTML = `
            <div id="user-info"></div>
            <h2>${this.brand} Stove</h2>
            <p>Color: ${this.color}</p>
            <p>Dimensions: ${this.dimensions}</p>
            <div id="burners"></div>
            <button id="oven-toggle">Oven: Off</button>
            <button id="oven-light">Oven Light: Off</button>
            <div id="oven-door" style="width: 200px; height: 150px; background-color: #333; position: relative; margin-top: 20px;">
                <div id="oven-glass" style="width: 180px; height: 130px; background-color: rgba(255,255,255,0.5); position: absolute; top: 10px; left: 10px;">
                    <div id="oven-light-indicator" style="width: 20px; height: 20px; border-radius: 50%; background-color: gray; position: absolute; top: 5px; right: 5px;"></div>
                    <div id="light-indicator" style="width: 20px; height: 20px; border-radius: 50%; background-color: gray; position: absolute; top: 5px; right: 5px;"></div>
                    <div id="oven-indicator" style="width: 20px; height: 20px; border-radius: 50%; background-color: gray; position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%);"></div>
                </div>
            </div>
            <p>Oven Door Dimensions: 200px x 150px</p>
        `;

        const burnersContainer = this.container.querySelector('#burners');
        this.burners = ['red', 'blue', 'green', 'purple'].map((color, index) => {
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
