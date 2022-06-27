"use strict";
// Please don't have includes in here that aren't inside the DSL folder, or the d.ts/flow defs break
Object.defineProperty(exports, "__esModule", { value: true });
/// End of Danger DSL definition
exports.isInline = function (violation) { return violation.file !== undefined && violation.line !== undefined; };
//# sourceMappingURL=Violation.js.map