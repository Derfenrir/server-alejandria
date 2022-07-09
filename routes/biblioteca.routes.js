import routesx from 'express-promise-router';
import bibliotecaController from '../controllers/biblioteca.controller';

const router=routesx();
router.post('/guardar', bibliotecaController.addLibro);
router.get('/consultar', bibliotecaController.listarLibros);
router.delete('/eliminar/:id',bibliotecaController.eliminarLibro);
router.get('/consultarOne/:id',bibliotecaController.listarOneLibro);
router.put('/actualizar/:id',bibliotecaController.updateLibro);
export default router;