"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ci_source_helpers_1 = require("../ci_source_helpers");
var fs_1 = require("fs");
// https://developer.github.com/actions/
/**
 * ### CI Setup
 *
 *  * <!-- JS --!>
 * There are two ways to use Danger with GitHub Actions. If you include Danger as a dev-dependency, then
 * you can call danger directly as another build-step after your tests:
 *
 * ```ruby
 * name: Node CI
 * on: [pull_request]
 *
 * jobs:
 *   test:
 *     runs-on: ubuntu-latest
 *
 *     steps:
 *     - uses: actions/checkout@master
 *     - name: Use Node.js 10.x
 *       uses: actions/setup-node@v1
 *       with:
 *         version: 10.x
 *     - name: install yarn
 *       run: npm install -g yarn
 *     - name: yarn install, build, and test
 *       run: |
 *         yarn install  --frozen-lockfile
 *         yarn build
 *         yarn test
 *     - name: Danger
 *       run: yarn danger ci
 *       env: GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
 *  ```
 *
 * If you are not running in a JavaScript ecosystem, or don't want to include the dependency then
 * you can use Danger JS as an action.
 *
 * ```yml
 * name: "Danger JS"
 * on: [pull_request]
 *
 * jobs:
 *   build:
 *     name: Danger JS
 *     runs-on: ubuntu-latest
 *     steps:
 *     - uses: actions/checkout@v1
 *     - name: Danger
 *       uses: danger/danger-js@9.1.6
 *       env:
 *         GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
 * ```
 *
 * Note it's likely the version number should change, but you get the point. This will run Danger
 * self-encapsulated inside a GitHub action.
 *
 * <!-- !JS --!>
 * <!-- Swift --!>
 *
 * There are two ways to use Danger with GitHub Actions. If you include Danger as a dependency, then
 * you can call danger directly as another build-step after your tests:
 *
 * ```ruby
 * name: CI
 * on: [pull_request]
 * jobs:
 *   build:
 *     runs-on: macos-latest
 *
 *     steps:
 *     - uses: actions/checkout@master
 *     - name: Build
 *       run: swift build
 *
 *     - name: Test
 *       run: swift test
 *
 *     - name: Danger
 *       run: danger-swift ci
 *       env: GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
 *  ```
 *
 * If don't want to include the dependency then you can use Danger Swift via an action.
 *
 * ```yml
 * name: "Danger Swift"
 * on: [pull_request]
 *
 * jobs:
 *   build:
 *     name: Danger JS
 *     runs-on: ubuntu-latest
 *     steps:
 *     - uses: actions/checkout@v1
 *     - name: Danger
 *       uses: danger/swift@2.0.1
 *       env:
 *         GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
 * ```
 *
 * Note it's likely the version number should change, but you get the point. This will run Danger
 * self-encapsulated inside a GitHub action.
 *
 * <!-- !Swift --!>
 *
 * You can pass additional CLI to Danger via an action via the args:
 *
 * ```
 *  - uses: danger/...
 *    with:
 *      args: "--dangerfile artsy/peril-settings/org/allPRs.ts"
 * ```
 *
 * This runs the file [`org/allPRs.ts`](https://github.com/artsy/peril-settings/blob/master/org/allPRs.ts)
 * from the repo [artsy/peril-settings](https://github.com/artsy/peril-settings). This gives you the ability
 * to have Danger acting on non-pull-requests via GitHub Actions.
 *
 * ### Token Setup
 *
 * You need to make sure that the secret `"GITHUB_TOKEN"` is
 * enabled in your workspace. This is so that Danger can connect
 * to GitHub.
 *
 * ```yml
 *   - name: Danger JS
 *     uses: danger/danger-js@9.1.6
 *     env: GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
 * ```
 *
 */
var GitHubActions = /** @class */ (function () {
    function GitHubActions(env, event) {
        if (event === void 0) { event = undefined; }
        this.env = env;
        var GITHUB_EVENT_PATH = env.GITHUB_EVENT_PATH;
        var eventFilePath = GITHUB_EVENT_PATH || "/github/workflow/event.json";
        if (event !== undefined) {
            this.event = event;
        }
        else if (fs_1.existsSync(eventFilePath)) {
            var event_1 = fs_1.readFileSync(eventFilePath, "utf8");
            this.event = JSON.parse(event_1);
        }
    }
    Object.defineProperty(GitHubActions.prototype, "name", {
        get: function () {
            return "GitHub Actions";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitHubActions.prototype, "isCI", {
        get: function () {
            return ci_source_helpers_1.ensureEnvKeysExist(this.env, ["GITHUB_WORKFLOW"]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitHubActions.prototype, "isPR", {
        get: function () {
            // This one is complicated, because it needs to not *just* support PRs
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitHubActions.prototype, "useEventDSL", {
        get: function () {
            return this.event.pull_request === undefined && this.event.issue === undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitHubActions.prototype, "pullRequestID", {
        get: function () {
            if (this.event.pull_request !== undefined) {
                return this.event.pull_request.number;
            }
            else if (this.event.issue !== undefined) {
                return this.event.issue.number;
            }
            throw new Error("pullRequestID was called on GitHubActions when it wasn't a PR");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitHubActions.prototype, "repoSlug", {
        get: function () {
            if (this.event.pull_request !== undefined) {
                return this.event.pull_request.base.repo.full_name;
            }
            else if (this.event.repository !== undefined) {
                return this.event.repository.full_name;
            }
            throw new Error("repoSlug was called on GitHubActions when it wasn't a PR");
        },
        enumerable: true,
        configurable: true
    });
    return GitHubActions;
}());
exports.GitHubActions = GitHubActions;
//# sourceMappingURL=GitHubActions.js.map