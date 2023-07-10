import express, { Request, Response } from 'express';


export const router = express.Router()

router.get('/', (request: Request, response: Response) => response.json({ ping: `Hello, we're running on Node.js!` }))
