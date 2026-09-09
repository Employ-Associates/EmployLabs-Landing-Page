# Drafts

Posts written but not yet approved for the schedule. Nothing in here is
registered in `../index.ts`, so nothing here can publish.

⛔ Do not move a file into `../posts/` without registering it in the same
change. `registry-completeness.test.ts` derives its expectations from the
posts directory on disk, so an unregistered file there fails the build — which
is the point, and how this directory came to exist.
