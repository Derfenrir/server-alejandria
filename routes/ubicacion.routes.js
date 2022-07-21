import routesx from 'express-promise-router';
import ubicacionControllers from '../controllers/ubicacion.controllers';

const router=routesx();
router.post('/guardar', ubicacionControllers.addLibro);
router.get('/consultar', ubicacionControllers.listarLibros);

router.get('/consultarOne/:id',ubicacionControllers.listarOneLibro);

export default router;