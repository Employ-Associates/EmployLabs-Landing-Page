import type { BlogPost } from "../types";
import { P, H2, Pull, Bullets, Strong, CompareTable } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>The comparison that never gets written down</H2>
      <P>
        When a hiring team is underwater, the default response is to add a recruiter. It is the known
        move, it is defensible in a budget conversation, and nobody gets criticised for it.
      </P>
      <P>
        It is also frequently the wrong first move, and the reason is that the two options are not
        alternatives at all. They fix different halves of the problem, and which half you have is
        answerable in about an hour.
      </P>

      <H2>What each one actually adds</H2>
      <CompareTable
        head={["", "Another recruiter", "An AI recruiting platform"]}
        rows={[
          [
            "Adds",
            "Judgement, relationships, persuasion, and someone accountable for outcomes.",
            "Throughput on the repeatable work: sourcing, screening, follow-up, first-round interviews.",
          ],
          [
            "Time to useful",
            "Weeks to months. Ramp, context, relationships with hiring managers.",
            "Days, but only on roles with a clear brief.",
          ],
          [
            "Scales by",
            "Hiring more people.",
            "Adding roles, with spend as the limit rather than hours.",
          ],
          [
            "Weak at",
            "Volume repetition, out-of-hours responsiveness, consistency at candidate forty.",
            "Advocacy, negotiation, hiring-manager politics, anything needing judgement.",
          ],
          [
            "Failure mode",
            "A good recruiter buried in coordination work they are overqualified for.",
            "Automation pointed at a brief nobody thought hard about.",
          ],
          [
            "What you keep",
            "Their knowledge, until they leave.",
            "The pipeline, the scoring and the evidence, in your system.",
          ],
        ]}
      />

      <Pull>
        Adding a recruiter to fix a throughput problem usually produces a second recruiter doing
        coordination work.
      </Pull>

      <H2>Diagnose before you spend</H2>
      <P>
        Take a week of your existing recruiter&rsquo;s time and split it. How much went on judgement —
        assessing candidates, advising hiring managers, closing people — and how much went on the
        repeatable work of finding, contacting, chasing and scheduling?
      </P>
      <P>
        If the second number is large, a platform returns that time. If it is small and the person is
        genuinely at capacity on judgement work, you need another person, and no amount of automation
        will substitute.
      </P>

      <H2>Where a platform does not substitute</H2>
      <Bullets>
        <li>
          <Strong>Closing a hesitant candidate.</Strong> A person changes that outcome. Software does
          not.
        </li>
        <li>
          <Strong>Managing a hiring manager.</Strong> Telling someone their brief is unrealistic is a
          relationship task, even when the data is unambiguous.
        </li>
        <li>
          <Strong>Senior and executive roles.</Strong> Low volume, high judgement, relationship-driven.
          We run these with our own experienced recruiters for exactly that reason, with the platform
          carrying the market map and the administration underneath them.
        </li>
        <li>
          <Strong>Accountability.</Strong> Someone has to own whether the role gets filled. That is
          always a person.
        </li>
      </Bullets>

      <H2>The configuration that usually works</H2>
      <P>
        One good recruiter with a platform underneath them outperforms two recruiters without one, for
        most teams below a certain volume. The recruiter spends their week on the judgement work, and
        the repeatable half runs whether or not anyone is at their desk.
      </P>
      <P>
        The honest caveat is that this only holds if the briefs are good. Automation aimed at a badly
        specified role produces a great deal of confident activity and no hires, and a second recruiter
        would at least have noticed.
      </P>
    </>
  );
}

export const post: BlogPost = {
  slug: "employlabs-vs-hiring-another-recruiter",
  title: "EmployLabs vs hiring another in-house recruiter",
  dek: "The two are not alternatives. They fix different halves of the problem, and which half you have is answerable in about an hour.",
  answer:
    "Another recruiter adds judgement, relationships, persuasion and accountability. A platform adds throughput on repeatable work: sourcing, screening, follow-up and first-round interviews. Diagnose by splitting a week of an existing recruiter's time between judgement work and repeatable work. If the repeatable half is large, a platform returns that time; if the person is at capacity on judgement, hire someone.",
  category: "compare",
  motif: "versus",
  publishedAt: "2026-10-02",
  readingMinutes: 2,
  topics: ["recruiting team", "recruiter capacity", "in-house recruiting", "recruiter productivity", "hiring automation"],
  faq: [
    {
      q: "Should I hire another recruiter or buy an AI recruiting platform?",
      a: "Split a week of your current recruiter's time between judgement work (assessing, advising, closing) and repeatable work (finding, contacting, chasing, scheduling). A large repeatable share points to a platform; a person at capacity on judgement work points to hiring.",
    },
    {
      q: "What can an AI recruiting platform not replace in a recruiter?",
      a: "Closing a hesitant candidate, managing a hiring manager whose brief is unrealistic, senior and executive search, and accountability for whether the role gets filled. Those are judgement and relationship work.",
    },
    {
      q: "Does one recruiter with a platform beat two recruiters without one?",
      a: "For most teams below a certain volume, yes — provided the briefs are good. Automation aimed at a badly specified role produces confident activity and no hires, which a second recruiter would have caught.",
    },
  ],
  Body,
};
