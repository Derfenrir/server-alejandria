import routesx from 'express-promise-router';
import personasController from '../controllers/personas.controller';

const router=routesx();

router.post('/guardar',personasController.addPersona);

export default router;