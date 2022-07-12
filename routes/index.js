import routesx from 'express-promise-router';
import personasRouter from './persona.routes';
import bibliotecaRouter from './biblioteca.routes';
import ubicacionRouter from './ubicacion.routes';

const router=routesx();

router.use('/persona',personasRouter);
router.use('/libro',bibliotecaRouter);
router.use('/temas',ubicacionRouter);

export default router;