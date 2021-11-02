import { Router } from "express";
import { hireControl, contactControl } from '../controller/backend';

let router = Router();

router.post("/hire", hireControl);
router.post("/contact", contactControl);

export default router;