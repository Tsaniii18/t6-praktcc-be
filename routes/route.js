import express from "express";
import * as notes_controller from "../controllers/notes_controller.js";

const router = express.Router();

router.get('/note', notes_controller.getNote);
router.get('/note/:id', notes_controller.getNoteById);
router.post('/note', notes_controller.createNote);
router.patch('/note/:id', notes_controller.updateNote);
router.delete('/note/:id', notes_controller.deleteNote);

export default router;