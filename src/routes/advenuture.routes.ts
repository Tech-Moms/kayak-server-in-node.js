import { Router } from 'express';
import { AdventureController } from '../controllers/adventure.controller';

const router = Router();
export const adventureController = new AdventureController();

router.get('/adventure', adventureController.getAdvenutres);
router.post('/adventure', adventureController.createAdventure);

router.get('/adventure/:id', adventureController.getAdventureById);
router.patch('/adventure/:id', adventureController.updateAdventureById);
router.delete('/adventure/:id', adventureController.deleteAdventureById);

router.post('/adventure/seed-db', adventureController.seedDatabase)

export default router;