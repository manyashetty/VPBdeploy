import { Router } from 'express';
import {
  getServices,
  createService,
  updateService,
  deleteService,
} from '../controllers/service.controller';

const router = Router();

router.get('/services', getServices);
router.post('/services', createService);
router.put('/services/_id', updateService);
router.delete('/services/_id', deleteService);

export default router;
