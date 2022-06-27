import { Env, CISource } from "../ci_source";
/**
 * ### CI Setup
 *
 *  You need to edit your `.cirrus.yml` to add a `script` like this:
 *
 *   ```yaml
 *     danger_script:
 *       - yarn danger ci
 *   ```
 *
 *  ### Token Setup
 *
 *  You need to add the `DANGER_GITHUB_API_TOKEN` environment variable, to do this,
 *  go to your repo's settings, by clicking the gear at `https://cirrus-ci.com/github/[user]/[repo]`.
 *  Generate the encrypted value, and add it to your `env` block.
 *
 *  Once you have added it, trigger a build.
 */
export declare class Cirrus implements CISource {
    private readonly env;
    constructor(env: Env);
    readonly name: string;
    readonly isCI: boolean;
    readonly isPR: boolean;
    readonly pullRequestID: string;
    readonly repoSlug: string;
    readonly ciRunURL: string;
}
