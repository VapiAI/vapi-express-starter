/* eslint-disable @typescript-eslint/ban-types */
import express, { Request, Response } from 'express';
import {
  VapiPayload,
  VapiResponse,
  VapiWebhookEnum,
} from '../types/vapi.types';
import * as service from '../services/webhook.service';

export const handleWebhook = async (
  payload: VapiPayload
): Promise<VapiResponse | void> => {
  switch (payload.type) {
    case VapiWebhookEnum.FUNCTION_CALL:
      return await service.functionCallHandler(payload);
    case VapiWebhookEnum.STATUS_UPDATE:
      return await service.statusUpdateHandler(payload);
    case VapiWebhookEnum.ASSISTANT_REQUEST:
      return await service.assistantRequestHandler(payload);
    default:
      throw new Error(`Unhandled message type: ${payload?.type}`);
  }
};

const vapiWebhook = express.Router();

/**
 * Vapi Webhook Route.
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
        const result = await handleWebhook(payload);
        return res.status(201).send(result);
      } catch (error) {
        return res.status(500).send({ error: error.message });
      }
    }
  );

export default vapiWebhook;
