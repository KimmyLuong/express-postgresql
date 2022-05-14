import express from 'express';
import { indexPage, messagesPage, addMessage, deleteMessage } from '../../controllers';
import cors from 'cors'
const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagesPage)
indexRouter.post('/messages', addMessage)
indexRouter.delete('/messages', deleteMessage)

export default indexRouter;