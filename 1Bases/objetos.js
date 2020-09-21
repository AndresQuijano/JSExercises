const persona1 = {
    nombre: 'Camila',
    edad: 29,
    casa : {
        pais: 'Colombia',
        ciudad: 'Medellín'
    },
    nacimiento: function() {
        return new Date().getFullYear() - this.edad;
    }

}

console.log(persona1.nacimiento());