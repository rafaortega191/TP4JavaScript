class persona {
    constructor(nombre, edad, profesion) {
      this.nombre = nombre;
      this.edad = edad;
      this.profesion = profesion;
    }

    saludar() {
      console.log("Hola");
    }

    despedirse() {
      console.log("Adiós");
    }
  } 

  const personaa = new persona("rafa", 24, "programador");


  personaa.saludar();
  personaa.despedirse();