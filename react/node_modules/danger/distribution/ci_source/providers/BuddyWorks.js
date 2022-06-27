"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ci_source_helpers_1 = require("../ci_source_helpers");
/**
 * ### CI Setup
 *
 * To make Danger run:
 *
 * - Create a new pipeline named, DangerJS, which is triggered on every push
 * - Add a NodeJS environment as an Action
 * - Go into it, head over to the bash editor and type the following
 *    - `yarn install && yarn danger ci`
 *    - or your npm script
 * - Set the `DANGER_GITHUB_API_TOKEN` at the Variables section
 * - You're done 🎉
 *
 */
var BuddyWorks = /** @class */ (function () {
    function BuddyWorks(env) {
        this.env = env;
    }
    Object.defineProperty(BuddyWorks.prototype, "name", {
        get: function () {
            return "Buddy.works";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuddyWorks.prototype, "isCI", {
        get: function () {
            return ci_source_helpers_1.ensureEnvKeysExist(this.env, ["BUDDY_PIPELINE_ID"]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuddyWorks.prototype, "isPR", {
        get: function () {
            var mustHave = ["BUDDY_PIPELINE_ID", "BUDDY_EXECUTION_PULL_REQUEST_NO", "BUDDY_REPO_SLUG"];
            var mustBeInts = ["BUDDY_EXECUTION_PULL_REQUEST_NO"];
            return ci_source_helpers_1.ensureEnvKeysExist(this.env, mustHave) && ci_source_helpers_1.ensureEnvKeysAreInt(this.env, mustBeInts);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuddyWorks.prototype, "pullRequestID", {
        get: function () {
            return this.env.BUDDY_EXECUTION_PULL_REQUEST_NO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuddyWorks.prototype, "repoSlug", {
        get: function () {
            return this.env.BUDDY_REPO_SLUG;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuddyWorks.prototype, "ciRunURL", {
        get: function () {
            return this.env.BUDDY_EXECUTION_URL;
        },
        enumerable: true,
        configurable: true
    });
    return BuddyWorks;
}());
exports.BuddyWorks = BuddyWorks;
// Default ENV vars provided by Buddy.works
// https://buddy.works/docs/pipelines/environment-variables#default-environment-variables
//# sourceMappingURL=BuddyWorks.js.map