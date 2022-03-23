
//CONDICIONAL V-IF 
var informacion = new Vue({ 
    el: '#informacion',
    data: {
        nombre: 'Kenia Gabriela Sanchez Duran',
        matricula: 'A01244940',
        show: false,
    }
});



//USER INPUT V-MODEL
var pintura = new Vue({ 
    el: '#pintura',
    data: {
        options: [
            {text: '3 pinturas'},
            {text: 'Cuquito'},
            {text: 'Mar'}
        ]
      }
});

//LOOP V-FOR
var ejercicio = new Vue({ 
    el: '#ejercicio',
    data: {
        bucl:[
            { message:"Lunes: Pierna"  },
            { message:"Martes: Espalda" },
            { message:'Miercoles: Gluteos' },
            { message:"Jueves: Brazo" },
            { message:'Viernes: Abs + Cardio' },
        ]
    }
});

//USER INPUT V-ON CLICK
var vanttec = new Vue({ 
    el: '#vanttec',
    data: {
        mensaje: 'Estoy en el equipo de '
    },

    methods: {
        vanttec: function (mensaje) {
          alert('Estoy en el equipo de: ' + mensaje)
        }
    }
});


