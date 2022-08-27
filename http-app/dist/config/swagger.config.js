"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerConfig = void 0;
const swagger_1 = require("@nestjs/swagger");
exports.swaggerConfig = new swagger_1.DocumentBuilder()
    .setTitle('BigNovaApi')
    .setDescription('The big Nova API description')
    .build();
//# sourceMappingURL=swagger.config.js.map