import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong, CompareTable } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Two documents wearing one name</H2>
      <P>
        A job description does two unrelated jobs. It advertises the role to people, and it specifies
        the role to whoever is searching. Those audiences want opposite things. The advert wants
        ambition and warmth. The specification wants precision and an honest account of what is
        actually required.
      </P>
      <P>
        Most JDs are written entirely as the advert, then handed to sourcing as though they were the
        specification. Everything that goes wrong afterwards follows from that.
      </P>

      <Pull>The advert is written for people who might apply. The spec is written for whoever searches.</Pull>

      <H2>What a sourcing system reads</H2>
      <P>
        Whether the search is run by a person or a system, the same handful of things determine whether
        it works: what the person will actually do, what they must genuinely have, what would make them
        stronger, where they need to be, and what the role pays. Everything else in a typical JD is
        decoration for this purpose, however good it is at attracting applicants.
      </P>

      <CompareTable
        head={["Instead of", "Write", "Why"]}
        rows={[
          [
            "“Rockstar engineer to join our fast-paced team”",
            "“Owns the payments service. Roughly 60% new build, 40% reliability work.”",
            "The first says nothing that narrows a search. The second names the work.",
          ],
          [
            "“5+ years experience required”",
            "“Has run this unsupervised before, because there is nobody senior to escalate to.”",
            "Years are a proxy. Naming what the years are standing in for lets a search match the real thing.",
          ],
          [
            "“Must have Kubernetes, Terraform, Go, AWS, gRPC”",
            "“Must have production ownership of a distributed service. Our stack is Go and AWS; adjacent stacks are fine.”",
            "Long tool lists reject people who would be productive in weeks.",
          ],
          [
            "“Competitive salary”",
            "The actual band.",
            "Without it, every search is guessing at seniority, and half the pipeline declines at the first honest conversation.",
          ],
          [
            "“Excellent communication skills”",
            "“Will present architecture decisions to non-technical stakeholders monthly.”",
            "The first is unsearchable and unassessable. The second is both.",
          ],
        ]}
      />

      <H2>Say what the role is not</H2>
      <P>
        The most useful line in a brief is often the exclusion. A senior engineering role that is
        deliberately hands-on rather than managerial, or a sales role that is expansion rather than new
        business, will attract precisely the wrong people if that is left implicit. Naming it costs one
        sentence and saves a fortnight.
      </P>

      <H2>Separate the dealbreakers</H2>
      <P>
        Somewhere in the document, list the things that genuinely reject a candidate, and keep that
        list to about four. Everything else belongs in a second list that makes a candidate stronger
        without excluding anyone.
      </P>
      <P>
        This is the single highest-leverage edit available, and almost nobody does it, because the
        conventional JD format has one bulleted list called Requirements that quietly mixes the two.
      </P>

      <H2>Common mistakes</H2>
      <Bullets>
        <li>
          <Strong>Copying the last one.</Strong> Requirements accumulate across versions and nobody
          ever removes one, so the brief slowly describes a person who cannot exist.
        </li>
        <li>
          <Strong>Writing the team&rsquo;s wish list.</Strong> Asking four engineers what they want
          produces a union of four preferences, not a role.
        </li>
        <li>
          <Strong>Hiding the band.</Strong> It does not stay hidden. It surfaces at the worst possible
          moment, after everyone has invested time.
        </li>
        <li>
          <Strong>Describing the company for three paragraphs before the job.</Strong> Fine in the
          advert. Useless in the spec.
        </li>
      </Bullets>

      <H2>A working method</H2>
      <Steps>
        <li>Write the advert as you normally would. It has a real job to do.</li>
        <li>
          Underneath it, write six lines: the work, the dealbreakers, the preferences, the location
          reality, the band, and what the role is not.
        </li>
        <li>
          Check the dealbreaker list is four or fewer. If it is longer, you are ranking, not
          specifying.
        </li>
        <li>
          Check every line against the market before you search. A brief that reads well and describes
          nobody is the most expensive document in recruiting.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "write-a-job-description-an-ai-can-source-from",
  title: "How to write a job description an AI can source from",
  dek: "A job description advertises the role and specifies it, and those are different documents for different audiences. How to write the second one.",
  answer:
    "A job description does two jobs: advertising the role to candidates and specifying it for whoever searches. To make it sourceable, add six explicit lines beneath the advert — the actual work, the dealbreakers (four or fewer), the preferences, the location reality, the salary band, and what the role is not. Replace proxies like years of experience with the capability they stand for.",
  category: "article",
  motif: "funnel",
  publishedAt: "2026-09-12",
  readingMinutes: 8,
  topics: ["job description", "hiring brief", "sourcing", "recruiting process", "job requirements"],
  faq: [
    {
      q: "How do you write a job description that AI sourcing can use?",
      a: "Separate the advert from the specification. Beneath the advert, state the actual work, the dealbreakers (four or fewer), the preferences, the location reality, the salary band, and what the role deliberately is not.",
    },
    {
      q: "Should a job description include the salary band?",
      a: "Yes. Without it, every search guesses at seniority and a large share of the pipeline declines at the first honest conversation, after both sides have invested time.",
    },
    {
      q: "Why are long tool and technology lists a problem in job descriptions?",
      a: "They reject candidates who would be productive within weeks. Naming the capability, such as production ownership of a distributed service, and treating the specific stack as a preference finds better people.",
    },
    {
      q: "What is the most common job description mistake?",
      a: "Mixing dealbreakers and preferences into a single Requirements list. That formatting convention quietly turns every nice-to-have into a rejection rule.",
    },
  ],
  Body,
};
