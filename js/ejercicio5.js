class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.anioNacimiento = anioNacimiento;
    }
  
    mostrarGeneracion() {
      let generacion = "";
        if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
        generacion = "Baby Boom";
        console.log(`Esta persona pertenece a la generación ${generacion}. La circunstancia historica de esta generación fue Paz y explosion demografica y El rasgo característico de esta generación es la ambicion.`);
      } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
        generacion = "Generación X";
        console.log(`Esta persona pertenece a la generación ${generacion}. La circunstancia historica de esta generación fue crisis del 73 y transicion española y El rasgo característico de esta generación es la obsesion por el exito.`);
      } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
        generacion = "Generacion Y";
        console.log(`Esta persona pertenece a la generación ${generacion}. La circunstancia historica de esta generación fue la inicio de la digitalizacion y El rasgo característico de esta generación es la frustracion.`);
      } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
        generacion = "Generación Z";
        console.log(`Esta persona pertenece a la generación ${generacion}. La circunstancia historica de esta generación fue la espansion masiva de internet y El rasgo característico de esta generación es la irreverencia.`);
      } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
        generacion = "silent generation";
        console.log(`Esta persona pertenece a la generación ${generacion}. La circunstancia historica de esta generación fue el conficto belico y El rasgo característico de esta generación es la austeridad.`);
      } else {
        console.log("Año de nacimiento inválido.");
      }
    }
  }
  
  const persona1 = new Persona("Juan", 25, "12345678", "H", 70, 1.75, 1996);
  const persona2 = new Persona("María", 40, "23456789", "M", 60, 1.65, 1978);
  
  persona1.mostrarGeneracion();
  persona2.mostrarGeneracion();
  