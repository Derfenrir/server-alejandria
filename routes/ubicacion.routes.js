import routesx from 'express-promise-router';
import ubicacionControllers from '../controllers/ubicacion.controllers';

const router=routesx();
router.post('/guardar', ubicacionControllers.addLibro);
router.get('/consultar', ubicacionControllers.listarLibros);
router.delete('/eliminar/:id',ubicacionControllers.eliminarLibro);
router.get('/consultarOne/:id',ubicacionControllers.listarOneLibro);
router.put('/actualizar/:id',ubicacionControllers.updateLibro);
export default router;