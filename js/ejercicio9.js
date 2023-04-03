class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    emitirSonido() {
      console.log('Este animal emite un sonido.');
    }
  }
  
  class Perro extends Animal {
    emitirSonido() {
      console.log('Woof');
    }
  }
  
  class Gato extends Animal {
    emitirSonido() {
      console.log('Miau');
    }
  }
  
  const Perroo = new Perro('firulais', 12);
  const Gatoo = new Gato('michi', 10);
  
  Perroo.emitirSonido(); 
  Gatoo.emitirSonido(); 
  