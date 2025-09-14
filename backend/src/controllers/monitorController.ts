import { Request, Response } from 'express';
import * as monitorService from '../services/monitorService.js';

export async function getAllMonitors(req: Request, res: Response) {
  const monitors = await monitorService.getAll();
  res.json(monitors);
}

export async function createMonitor(req: Request, res: Response) {
  try {
    const monitor = await monitorService.create(req.body);
    res.status(201).json(monitor);
  } catch (err: unknown) {
    let message = 'Unknown error';
    if (err instanceof Error) {
      message = err.message;
    }
    res.status(400).json({ error: message });
  }
}

export async function getMonitorById(req: Request, res: Response) {
  const monitor = await monitorService.getById(req.params.id);
  if (!monitor) {
    res.status(404).json({ error: 'Monitor not found' });
    return;
  }
  res.json(monitor);
}
