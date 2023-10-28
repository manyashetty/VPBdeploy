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
import authenticateJWT from './auth.middleware';
import {createContact} from '../controllers/contact-us.controller' ;
// import {upload} from './mutler';

const router = Router();

router.get('/services', getServices);
// router.post('/services', upload, createService); 
router.post('/services',  createService); 

router.put('/services/:id', updateService);
router.delete('/services/:id', deleteService);

router.get('/social-feed', getSocialfeed);
router.post('/social-feed', createSocialfeed);
router.put('/social-feed/:id', updateSocialfeed);
router.delete('/social-feed/:id', deleteSocialfeed);

router.get('/project', getProject);
router.post('/project', authenticateJWT, createProject);
router.put('/project/:id',authenticateJWT, updateProject);
router.delete('/project/:id', deleteProject);

router.get('/testimonial', getTestimonial);
router.post('/testimonial', createTestimonial);
router.put('/testimonial/:id', updateTestimonial);
router.delete('/testimonial/:id', deleteTestimonial);

router.post('/contact',createContact)
export default router;
