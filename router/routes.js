"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const backend_1 = require("../controller/backend");
let router = (0, express_1.Router)();
router.post("/hire", backend_1.hireControl);
router.post("/contact", backend_1.contactControl);
exports.default = router;
