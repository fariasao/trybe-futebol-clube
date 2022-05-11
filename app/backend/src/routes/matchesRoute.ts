import { Router } from 'express';
import MatchesController from '../controllers/matchesController';

const matchesRouter = Router();

const matchesController = new MatchesController();

matchesRouter.get('/', matchesController.getAll);

export default matchesRouter;