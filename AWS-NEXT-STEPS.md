# AWS next steps

## Phase 1: Amplify Hosting
Use AWS Amplify Hosting for the first AWS deployment because this is a static site and GitHub is the source of truth for implementation.

1. Sign in to the intended AWS account.
2. Open **AWS Amplify**.
3. Choose **Host web app / Deploy an app**.
4. Connect GitHub and select `dinididit/BRING-THE-LAB-HOME`.
5. Select branch `main`.
6. Confirm Amplify sees `amplify.yml`.
7. Deploy.
8. After the default Amplify URL works, add a custom domain only if desired.

## Security rules
- Do not commit AWS access keys, secret keys, MFA codes, wallet seed phrases, or private keys.
- Prefer AWS-managed GitHub integration or GitHub OIDC for future Actions-based deployments.
- Keep the public campaign repository separate from the experimental `$NINJA` token repositories.
- Keep source evidence and private archive material out of the public repository unless intentionally approved for publication.

## Phase 2: infrastructure when needed
If the site later needs more control, move to S3 + CloudFront + Route 53 or add backend services deliberately. Do not add infrastructure just because it exists. Static first, complexity only when the mission needs it.
