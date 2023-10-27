const Jugador = {
    Nombre : "Francisco",
    Apellidos : "Rodriguez",
    Nivel:1,
    Puntuacion:1,
    sumarPuntuacion : function(){
        this.Puntuacion+=1;
        if  (this.Puntuacion==10){
            this.Nivel+=1;
            this.Puntuacion=0;
        }
    },
    restarPuntuacion : function(){
        this.Puntuacion-=1;
        if (this.Puntuacion==0){
            this.Nivel-=1;
            this.Puntuacion=10;
            if  (this.Nivel==0){
                resetearJugador();
            }
        }
    },
    resetearJugador : function(){
        alert("Se ha reseteado un jugador");
        this.Nivel=1;
        this.Puntuacion=1;
    }
}

const Jugador2 = {
    Nombre : "Ladislao",
    Apellidos : "Presa ",
    Nivel:1,
    Puntuacion:1,
    sumarPuntuacion : function(){
        this.Puntuacion+=1;
        if  (this.Puntuacion==10){
            this.Nivel+=1;
            this.Puntuacion=0;
        }
    },
    restarPuntuacion : function(){
        this.Puntuacion-=1;
        if (this.Puntuacion==0){
            this.Nivel-=1;
            this.Puntuacion=10;
            if  (this.Nivel==0){
                resetearJugador();
            }
        }
    },
    resetearJugador : function(){
        alert("Se ha reseteado un jugador");
        this.Nivel=1;
        this.Puntuacion=1;
    }
}




Jugador.sumarPuntuacion();
console.log(Jugador.Puntuacion);
//Resetea al jugador
Jugador.resetearJugador();
console.log(Jugador.Puntuacion);
Jugador.sumarPuntuacion();
Jugador.sumarPuntuacion();
Jugador.sumarPuntuacion();
Jugador.sumarPuntuacion();
Jugador.sumarPuntuacion();
Jugador.sumarPuntuacion();
Jugador.sumarPuntuacion();
Jugador.sumarPuntuacion();
//Ha subido de nivel
console.log(Jugador.Nivel);
//Ha restado un punto
Jugador.restarPuntuacion();
console.log(Jugador.Puntuacion);
Jugador.sumarPuntuacion();
Jugador.sumarPuntuacion();
Jugador.sumarPuntuacion();
Jugador.sumarPuntuacion();
Jugador.sumarPuntuacion();
console.log(Jugador.Nivel);


Jugador2.sumarPuntuacion();
console.log(Jugador2.Puntuacion);
