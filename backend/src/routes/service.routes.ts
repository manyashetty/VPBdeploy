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

import {
  getTestimonial,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from '../controllers/testimonial.controller';

import {
  getProject,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/project.controller';

const router = Router();

router.get('/services', getServices);
router.post('/services', createService);
router.put('/services/:id', updateService);
router.delete('/services/:id', deleteService);

router.get('/social-feed', getSocialfeed);
router.post('/social-feed', createSocialfeed);
router.put('/social-feed/:id', updateSocialfeed);
router.delete('/social-feed/:id', deleteSocialfeed);

router.get('/project', getProject);
router.post('/project', createProject);
router.put('/project/:id', updateProject);
router.delete('/project/:id', deleteProject);

router.get('/testimonial', getTestimonial);
router.post('/testimonial', createTestimonial);
router.put('/testimonial/:id', updateTestimonial);
router.delete('/testimonial/:id', deleteTestimonial);

export default router;
