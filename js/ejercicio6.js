class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
      this._ISBN = ISBN;
      this._titulo = titulo;
      this._autor = autor;
      this._numPaginas = numPaginas;
    }
  
  
    get ISBN() {
      return this._ISBN;
    }
  
    get titulo() {
      return this._titulo;
    }
  
    get autor() {
      return this._autor;
    }
  
    get numPaginas() {
      return this._numPaginas;
    }
  
    set ISBN(newISBN) {
      this._ISBN = newISBN;
    }
  
    set titulo(newTitulo) {
      this._titulo = newTitulo;
    }
  
    set autor(newAutor) {
      this._autor = newAutor;
    }
  
    set numPaginas(newNumPaginas) {
      this._numPaginas = newNumPaginas;
    }
  
    mostrarLibro() {
      console.log(
        `El libro ${this._titulo} con ISBN ${this._ISBN} creado por el autor ${this._autor} tiene páginas ${this._numPaginas}`
      );
    }
  }
  
  const libro1 = new Libro("1000", "Como programar en JS", "autor anonimo", 400);
  const libro2 = new Libro("1001", "como programar en python", "autor anonimo", 500);
  
  libro1.mostrarLibro();
  libro2.mostrarLibro();
  
  if (libro1.numPaginas > libro2.numPaginas) {
    console.log(`El libro "${libro1.titulo}" tiene más páginas`);
  } else if (libro2.numPaginas > libro1.numPaginas) {
    console.log(`El libro "${libro2.titulo}" tiene más páginas`);
  } else {
    console.log("Ambos libros tienen la misma cantidad de páginas");
  }
  