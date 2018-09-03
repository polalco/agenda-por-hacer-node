const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de una tarea'
}
const completado = {
    alias: 'c',
    demand: false,
    default: true,
    desc: 'Marca una tarea como completada o pendiente'
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}