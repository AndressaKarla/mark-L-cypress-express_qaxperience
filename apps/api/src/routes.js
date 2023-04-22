"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var TaskController_1 = require("./controllers/TaskController");
require('dotenv').config();
var router = express_1.Router();
exports.router = router;
var taskController = new TaskController_1.TaskController();
router.post("/tasks", taskController.create);
router.get("/tasks", taskController.show);
router.delete("/tasks/:id", taskController.remove);
router.put("/tasks/:id", taskController.update);
if (process.env.NODE_ENV !== 'production') {
    router.delete("/helper/tasks", taskController.removeByName);
    router.delete("/helper/tasks/:task_name", taskController.removeByName2);
}
