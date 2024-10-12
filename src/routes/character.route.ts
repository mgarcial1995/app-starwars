import { Router } from 'express';
import { handler as CharacterController } from '../controllers/character.controller';

const router = Router();

router.get('/', CharacterController.getCharacter);
router.post('/', CharacterController.createCharacter);

export default router;