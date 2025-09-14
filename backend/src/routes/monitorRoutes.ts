import express from 'express';
import { getAllMonitors, createMonitor, getMonitorById } from '../controllers/monitorController';

const router = express.Router();

router.get('/', getAllMonitors);
router.post('/', createMonitor);
router.get('/:id', getMonitorById);

export default router;
