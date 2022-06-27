import { Env, CISource } from "../ci_source";
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
export declare class BuddyWorks implements CISource {
    private readonly env;
    constructor(env: Env);
    readonly name: string;
    readonly isCI: boolean;
    readonly isPR: boolean;
    readonly pullRequestID: string;
    readonly repoSlug: string;
    readonly ciRunURL: any;
}
