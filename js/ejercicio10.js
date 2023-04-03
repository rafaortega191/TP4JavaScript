class Aeropuerto {
    constructor(nombreAeropuerto) {
      this.nombreAeropuerto = nombreAeropuerto;
      this.listaAviones = [];
    }
  
    agregarAvion(avion) {
      this.listaAviones.push(avion);
    }
  
    buscarAvion(nombreAvion) {
      for (let avion of this.listaAviones) {
        if (avion.nombre === nombreAvion) {
          return avion;
        }
      }
      console.log(`El avión ${nombreAvion} no se encuentra en el aeropuerto`);
    }
  }
  
  class Avion {
    constructor(nombre, capacidad, destino) {
      this.nombre = nombre;
      this.capacidad = capacidad;
      this.destino = destino;
      this.listaPasajeros = [];
    }
  
    abordar(pasajero) {
      if (this.listaPasajeros.length < this.capacidad) {
        this.listaPasajeros.push(pasajero);
        console.log(`El pasajero ${pasajero} ha abordado el avión ${this.nombre}`);
      } else {
        console.log(`El avión ${this.nombre} está lleno, no hay capacidad disponible`);
      }
    }
  }
  
  const aeropuertoInternacional = new Aeropuerto('Aeropuerto Internacional');
  
  const avion1 = new Avion('Avión 1', 100, 'Madrid');
  const avion2 = new Avion('Avión 2', 80, 'Londres');
  const avion3 = new Avion('Avión 3', 120, 'Nueva York');
  
  aeropuertoInternacional.agregarAvion(avion1);
  aeropuertoInternacional.agregarAvion(avion2);
  aeropuertoInternacional.agregarAvion(avion3);
  
  const avionEncontrado = aeropuertoInternacional.buscarAvion('Avión 1');
  if (avionEncontrado) {
    avionEncontrado.abordar('Juan');
  }
  