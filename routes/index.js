import routesx from 'express-promise-router';
import personasRouter from './persona.routes';
import bibliotecaRouter from './biblioteca.routes';

const router=routesx();

router.use('/persona',personasRouter);
router.use('/libro',bibliotecaRouter)

export default router;