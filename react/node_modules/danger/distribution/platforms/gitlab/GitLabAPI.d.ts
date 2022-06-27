import { RepoMetaData } from "../../dsl/BitBucketServerDSL";
import { api as fetch } from "../../api/fetch";
import { GitLabDiscussionTextPosition, GitLabInlineNote, GitLabMR, GitLabMRChange, GitLabMRCommit, GitLabNote, GitLabUserProfile } from "../../dsl/GitLabDSL";
import { Env } from "../../ci_source/ci_source";
export declare type GitLabAPIToken = string;
export interface GitLabAPICredentials {
    host: string;
    token: GitLabAPIToken;
}
export declare function getGitLabAPICredentialsFromEnv(env: Env): GitLabAPICredentials;
declare class GitLabAPI {
    readonly repoMetadata: RepoMetaData;
    readonly repoCredentials: GitLabAPICredentials;
    fetch: typeof fetch;
    private api;
    private readonly hostURL;
    private readonly d;
    constructor(repoMetadata: RepoMetaData, repoCredentials: GitLabAPICredentials);
    readonly projectURL: string;
    readonly mergeRequestURL: string;
    getUser: () => Promise<GitLabUserProfile>;
    getMergeRequestInfo: () => Promise<GitLabMR>;
    getMergeRequestChanges: () => Promise<GitLabMRChange[]>;
    getMergeRequestCommits: () => Promise<GitLabMRCommit[]>;
    getMergeRequestNotes: () => Promise<GitLabNote[]>;
    getMergeRequestInlineNotes: () => Promise<GitLabInlineNote[]>;
    createMergeRequestDiscussion: (content: string, position: GitLabDiscussionTextPosition) => Promise<string>;
    createMergeRequestNote: (body: string) => Promise<GitLabNote>;
    updateMergeRequestNote: (id: number, body: string) => Promise<GitLabNote>;
    deleteMergeRequestNote: (id: number) => Promise<boolean>;
    getFileContents: (path: string, slug?: string | undefined, ref?: string | undefined) => Promise<string>;
}
export default GitLabAPI;
