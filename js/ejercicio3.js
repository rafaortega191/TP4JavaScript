class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
    
    get alto() {
      return this._alto;
    }
    
    set alto(valor) {
      if (valor <= 0) {
        console.log("El alto debe ser un número positivo");
      }
      this._alto = valor;
    }
    
    get ancho() {
      return this._ancho;
    }
    
    set ancho(valor) {
      if (valor <= 0) {
        console.log("El ancho debe ser un número positivo");
      }
      this._ancho = valor;
    }
    
  
    mostrar() {
      console.log(`Rectángulo: ${this.alto}x${this.ancho}`);
    }
    
    calcularArea() {
      return this.alto * this.ancho;
    }
    
    calcularPerimetro() {
      return 2 * (this.alto + this.ancho);
    }
  }
  
  
  const rectanguloo = new Rectangulo(5, 10);
  rectanguloo.mostrar();
  console.log(`Área: ${rectanguloo.calcularArea()}`);
  console.log(`Perímetro: ${rectanguloo.calcularPerimetro()}`);
  
  
    