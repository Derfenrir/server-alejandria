import routesx from 'express-promise-router';
import personasRouter from './persona.routes';

const router=routesx();

router.use('/persona',personasRouter);

export default router;