/* eslint-disable @typescript-eslint/ban-types */
import express, { Request, Response } from 'express';
import { VapiPayload, VapiResponse } from '../types/vapi.types';

const vapiWebhook = express.Router();

/**
 * Vapi Webhook Handler
 */
vapiWebhook
  .route('/')
  .post(
    async (
      req: Request<{}, VapiResponse, { message: VapiPayload }>,
      res: Response
    ) => {
      // const { message } = req.body;
      // console.log('req', req, req.body?.message)
      console.log('req', req.body);
      res.send({ result: 'Hello API' });
    }
  );

export default vapiWebhook;
