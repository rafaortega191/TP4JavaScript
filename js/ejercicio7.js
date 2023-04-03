// 7- Nos piden realizar una agenda telefónica de contactos.
// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando 
//sus nombres son iguales.
// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas,
// indicando nosotros el tamaño o con un tamaño por defecto (10).
// Los métodos de la agenda serán los siguientes:
// ●	aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos
// indicar por pantalla.
// ●	existeContacto(Conctacto): indica si el contacto pasado existe o no.
// ●	listarContactos(): Lista toda la agenda
// ●	buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// ●	eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por
// pantalla
// ●	agendaLlena(): indica si la agenda está llena.
// ●	huecosLibres(): indica cuántos contactos más podemos ingresar.
// Crea un menú con opciones por consola para probar todas estas funcionalidades.
class Contacto {
    #nombre;
    #telefono;
    constructor(nombre, telefono) {
      this.#nombre = nombre;
      this.#telefono = telefono;
    }
    get nombre() {
      return this.#nombre;
    }
    set nombre(nuevoNombre) {
      this.#nombre = nuevoNombre;
    }
    get telefono() {
      return this.#telefono;
    }
    set telefono(nuevoTelefono) {
      this.#telefono = nuevoTelefono;
    }
  }
  
  class Agenda {
    #contactos;
    #tamanioAgenda;
    constructor(tamanioAgenda = 10) {
      this.#contactos = [];
      this.#tamanioAgenda = tamanioAgenda;
    }
    1;
    get contactos() {
      return this.#contactos;
    }
    set contactos(nuevosContactos) {
      this.#contactos = nuevosContactos;
    }
    get tamanioAgenda() {
      return this.#tamanioAgenda;
    }
    set tamanioAgenda(nuevosTamanioAgenda) {
      this.#tamanioAgenda = nuevosTamanioAgenda;
    }
    agregarContactos(nuevosContactos) {
      if (!this.agendaLlena()) {
        if (!this.existeContacto(nuevosContactos)) {
          alert(`Agregando contacto...`);
          this.#contactos.push(nuevosContactos);
        } else {
          alert(`El contacto ya existe`);
        }
      } else {
        alert(`Agenda Llena`);
      }
    }
    existeContacto(contacto) {
      for (let key in this.contactos) {
        if (this.contactos[key].nombre === contacto.nombre) {
          return true;
        } else {
          return false;
        }
      }
    }
    agendaLlena() {
      if (this.contactos.length === this.tamanioAgenda) {
        return true;
      } else {
        return false;
      }
    }
    mensajeAgendaLlena() {
      if (this.agendaLlena()) {
        alert(`Agenda Llena`);
      } else {
        alert(`Agenda con espacio disponible`);
      }
    }
    huecoLista() {
      return alert(
        `Tiene ${
          this.tamanioAgenda - this.contactos.length
        } espacio disponible en la agenda`
      );
    }
    listaraContacto() {
      for (let key in this.contactos) {
        document.write(`<ul>
          <li> Nombre: ${this.contactos[key].nombre},Telefono: ${this.contactos[key].telefono}</li>
          </ul>`);
      }
      document.write("-------<br>");
    }
    eliminarContacto(contactoBorrar) {
      const index = this.contactos.findIndex((contacto) => {1
        return contacto.nombre == contactoBorrar.nombre;
      });
      if (!this.existeContacto(contactoBorrar)) {
        this.contactos.splice(index, 1);
        alert(`El contacto fue eliminado`);
      }
    }
    buscarContacto(contactoEnBusqueda) {
      const index = this.contactos.findIndex((contacto) => {
        return contacto.nombre == contactoEnBusqueda.nombre;
      });
      if (this.existeContacto(contactoEnBusqueda)) {
        let contactoEncontrado=this.contactos.splice(index);
        for (let key in contactoEncontrado) {
          document.write(`Nombre: ${contactoEncontrado[key].nombre}, Telefono: ${contactoEncontrado[key].telefono}`);
        }
      } else {
        alert(`El contacto no existe o fue eliminado`);
      }
    }
  }
  
  const texto = `¿Desea realizar otra operacion?`;
  let agendaNueva = new Agenda();
  do {
    const opcion = parseInt(
      prompt(
        `      Menu:
        1-Agregar contacto 
        2-Ver agenda 
        3-Eliminar contacto 
        4-Buscar contacto 
        5-Verificar si la agenda esta llena 
        6-Verificar si la agenda tiene espacio disponibles 
        7-Elegir tamaño de la agenda`
      )
    );
    switch (opcion) {
      case 1:
        let nombre = prompt(`Ingrese el nombre de su contacto:`);
        let numero = parseInt(prompt(`Ingrese el numero de su contacto:`));
        let contacto = new Contacto(nombre, numero);
        agendaNueva.agregarContactos(contacto);
        break;
      case 2:
        agendaNueva.listaraContacto();
        break;
      case 3:
        let nombreBorrar = prompt(
          `Ingrese el nombre de su contacto que desea eliminar:`
        );
        let numeroBorrar = parseInt(
          prompt(`Ingrese el numero de su contacto que desea eliminar:`)
        );
        let contactoBorrar = new Contacto(nombreBorrar, numeroBorrar);
        agendaNueva.eliminarContacto(contactoBorrar);
        break;
      case 4:
        let nombreBuscar = prompt(`Ingrese el nombre de su contacto:`);
        let numeroBuscar = parseInt(prompt(`Ingrese el numero de su contacto:`));
        let contactoBuscar = new Contacto(nombreBuscar, numeroBuscar);
        agendaNueva.buscarContacto(contactoBuscar);
        break;
      case 5:
        agendaNueva.mensajeAgendaLlena();
        break;
      case 6:
        agendaNueva.huecoLista();
        break;
      case 7:
        let nuevoTamanioAgenda = parseInt(
          prompt(`Ingrse nuevo tamaño de agenda:`)
        );
        agendaNueva.tamanioAgenda = nuevoTamanioAgenda;
        break;
      default:
        alert("Error 404\n Ingresate un numero no valido");
        break;
    }
  } while (confirm(texto));