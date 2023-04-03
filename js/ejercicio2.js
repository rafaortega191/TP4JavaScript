class Cuenta {
    constructor(titular, saldo) {
      this.titular = titular;
      this.saldo = saldo;
    }
  
    ingresar(valorIngreso) {
      this.saldo += valorIngreso;
    }
  
    extraer(valorExtracion) {
      if (this.saldo > 0) {
        this.saldo -= valorExtracion;
      } else {
          console.log("No posee esa cantida de dinero");
      }
    }
  
    informar() {
      console.log(`Tu saldo disponible es de : ${this.saldo}`);
    }
  }
  
  let cuentaa = new Cuenta('Alex',0);

  cuentaa.extraer(100);
  console.log(cuenta1);
  cuentaa.informar();

  cuentaa.ingresar (400);
  console.log(cuenta1);
  cuentaa.informar();

  cuentaa.extraer(100);
  cuentaa.informar();
  console.log(cuentaa);