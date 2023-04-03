class Auto{
    constructor(nombre, marca, modelo, color){
        this.nombre = nombre;
        this.marca = marca;
        this._modelo = modelo;
        this._color = color;
        

    }
    arrancarauto(){
        console.log(`Auto Encendido`);
    }

    apagarAuto(){
        console.log(`Auto se apago`);
    }


    get color(){
        return this._color;
        }
    set color(nuevoColor){
        if(nuevoColor.length > 0 ){
        this._color=nuevoColor;
      }
    }

    get modelo(){
        return this._modelo;
        }
    set modelo(nuevoModelo){
        if(nuevoModelo.length > 0 ){
        this._modelo=nuevoModelo;
      }
    }
    

}


  


let autoo = new Auto('HILUX','toyota','2023V6', 'celeste')
document.write('<br>Nombre :'+autoo.nombre +' </br>');
document.write('<p>Marca: '+autoo.marca +'</p>')
document.write('<li>Modelo: '+autoo.modelo +'</li>')
document.write('<li>Color: '+autoo.color +'</li>')
console.log(autoo)
autoo.arrancarauto()
autoo.apagarAuto()


