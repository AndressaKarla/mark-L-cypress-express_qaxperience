"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
var typeorm_1 = require("typeorm");
var TasksRespository_1 = require("../repositories/TasksRespository");
var yup = __importStar(require("yup"));
var AppError_1 = require("../errors/AppError");
var TaskController = /** @class */ (function () {
    function TaskController() {
    }
    TaskController.prototype.show = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var tasksRepository, tasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tasksRepository = typeorm_1.getCustomRepository(TasksRespository_1.TasksRepository);
                        return [4 /*yield*/, tasksRepository.find({
                                order: {
                                    created_at: 'ASC'
                                },
                            })];
                    case 1:
                        tasks = _a.sent();
                        return [2 /*return*/, response.status(200).json(tasks)];
                }
            });
        });
    };
    TaskController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, is_done, schema, err_1, tasksRepository, taskAlreadyExists, task;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, name = _a.name, is_done = _a.is_done;
                        schema = yup.object().shape({
                            name: yup.string().required(),
                            is_done: yup.boolean().required().oneOf([false], 'The task cannot be registered as completed.'),
                        });
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, schema.validate(request.body, { abortEarly: false })];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _b.sent();
                        throw new AppError_1.AppError(err_1);
                    case 4:
                        tasksRepository = typeorm_1.getCustomRepository(TasksRespository_1.TasksRepository);
                        return [4 /*yield*/, tasksRepository.findOne({
                                name: name,
                            })];
                    case 5:
                        taskAlreadyExists = _b.sent();
                        if (taskAlreadyExists) {
                            throw new AppError_1.AppError('Task already exists!');
                        }
                        task = tasksRepository.create({
                            name: name,
                            is_done: is_done,
                        });
                        return [4 /*yield*/, tasksRepository.save(task)];
                    case 6:
                        _b.sent();
                        return [2 /*return*/, response.status(201).end()];
                }
            });
        });
    };
    TaskController.prototype.remove = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, tasksRepository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        tasksRepository = typeorm_1.getCustomRepository(TasksRespository_1.TasksRepository);
                        return [4 /*yield*/, tasksRepository.delete({ id: id })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(204).end()];
                }
            });
        });
    };
    TaskController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, is_done, schema, err_2, tasksRepository, task;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        is_done = request.body.is_done;
                        schema = yup.object().shape({
                            is_done: yup.bool().required(),
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, schema.validate(request.body, { abortEarly: false })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        throw new AppError_1.AppError(err_2);
                    case 4:
                        tasksRepository = typeorm_1.getCustomRepository(TasksRespository_1.TasksRepository);
                        return [4 /*yield*/, tasksRepository.findOne(id)];
                    case 5:
                        task = _a.sent();
                        if (!task) {
                            throw new AppError_1.AppError('Task not found!', 404);
                        }
                        return [4 /*yield*/, tasksRepository.update(id, {
                                is_done: is_done
                            })];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, response.status(200).json(task)];
                }
            });
        });
    };
    // Helpers
    TaskController.prototype.removeByName = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var name, schema, err_3, tasksRepository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = request.body.name;
                        schema = yup.object().shape({
                            name: yup.string().required(),
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, schema.validate(request.body, { abortEarly: false })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        throw new AppError_1.AppError(err_3);
                    case 4:
                        tasksRepository = typeorm_1.getCustomRepository(TasksRespository_1.TasksRepository);
                        return [4 /*yield*/, tasksRepository.delete({ name: name })];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, response.status(204).end()];
                }
            });
        });
    };
    TaskController.prototype.removeByName2 = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var task_name, tasksRepository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        task_name = request.params.task_name;
                        tasksRepository = typeorm_1.getCustomRepository(TasksRespository_1.TasksRepository);
                        return [4 /*yield*/, tasksRepository.delete({ name: task_name })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(204).end()];
                }
            });
        });
    };
    return TaskController;
}());
exports.TaskController = TaskController;
