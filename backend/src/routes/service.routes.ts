import { Router } from 'express';
import {
  getServices,
  createService,
  updateService,
  deleteService,
} from '../controllers/service.controller';

import {
  getSocialfeed,
  createSocialfeed,
  updateSocialfeed,
  deleteSocialfeed,
} from '../controllers/social-feed.controller';
const router = Router();

router.get('/services', getServices);
router.post('/services', createService);
router.put('/services/:id', updateService);
router.delete('/services/:id', deleteService);

router.get('/social-feed', getSocialfeed);
router.post('/social-feed', createSocialfeed);
router.put('/social-feed/:id', updateSocialfeed);
router.delete('/social-feed/:id', deleteSocialfeed);

export default router;
