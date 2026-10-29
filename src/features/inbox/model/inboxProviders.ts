import type { InboxProvider } from "./githubTasks";

export const INBOX_PROVIDER_LABELS: Record<InboxProvider, string> = {
  github: "GitHub",
  linear: "Linear",
  jira: "Jira",
  sonar: "Sonar",
  gitlab: "GitLab",
  azuredevops: "ADO",
  bitbucket: "Bitbucket",
};

export function isTrackerSource(source?: string): boolean {
  return source === "linear" || source === "jira" || source === "sonar";
}
