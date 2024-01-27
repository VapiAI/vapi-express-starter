/* eslint-disable @typescript-eslint/ban-types */
import express, { Request, Response } from 'express';
import {
  VapiPayload,
  VapiResponse,
  VapiWebhookEnum,
} from '../types/vapi.types';
import * as webhookController from '../controller/webhook.controller';

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
      const payload = req.body.message;
      try {
        switch (payload.type) {
          case VapiWebhookEnum.FUNCTION_CALL: {
            const result = await webhookController.functionCallHandler(payload);

            return res.status(201).send({ result });
          }

          // case VapiWebhookEnum.STATUS_UPDATE: {
          //   const result = await webhookController.statusUpdateHandler(payload);

          //   res.status(201).send();
          //   break;
          // }
          default:
            // Handle unknown types or log an error
            console.log(`Unhandled message type: ${payload?.type}`);
            return res.status(201).send();
        }
      } catch (error) {
        return res.status(500).send({ message: error.message });
      }
    }
  );

export default vapiWebhook;
