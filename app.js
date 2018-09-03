const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];


switch (comando) {
    case 'crear':
        console.log('Crear una tarea por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Lista las tareas por hacer');
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('=======Por hacer=========='.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('=========================='.green);

        }

        break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer:', argv.descripcion);
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        console.log('Borrar la tarea:', argv.descripcion);
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}