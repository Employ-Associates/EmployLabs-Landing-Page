import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>One job description, several different people</H2>
      <P>
        Read almost any job description carefully and you will find that it describes more than one
        kind of candidate. Not variations on a theme, but genuinely different people, who have had
        different careers, who describe their work in different words, and who would each be a
        perfectly good hire for reasons that have very little in common.
      </P>
      <P>
        This is not sloppy writing. It is what happens when a team writes down the outcome they want
        rather than the biography they expect, which is the right way round. The difficulty appears
        one step later, at the point where the description has to become a search, because those
        different people do not live in the same place and do not answer the same message.
      </P>

      <H2>What a single averaged search does</H2>
      <P>
        The usual response is to write one search that tries to cover everything the description
        mentions. The filters end up as a compromise: a title list broad enough to catch both groups,
        a seniority range wide enough to include both, keywords chosen because they are the ones the
        two halves share.
      </P>
      <P>
        The result sits in the gap between two real groups and reaches neither of them well. Each
        group is under-represented, because the filters were loosened to admit the other. The message
        is pitched at nobody in particular, because it had to work for both. And the response rate
        looks like weak demand for the role, when what it actually shows is a search that was aimed
        halfway between two targets.
      </P>

      <Pull>
        A search aimed halfway between two real groups reaches neither. The averaging happens in the
        filters and shows up in the replies.
      </Pull>

      <H2>So the role is carved into personas</H2>
      <P>
        On EmployLabs a role is broken into personas first, and each persona is then sourced as its own
        search, with its own filters. Not one search with a wider net, but several searches, each one
        narrow enough to be about somebody in particular.
      </P>
      <P>
        Because each persona is a separate search, each one can be specific in the way that actually
        finds people. The titles can differ. The seniority signals can differ. The companies worth
        looking at can differ entirely. Nothing has to be loosened to accommodate a group it was never
        about.
      </P>

      <H2>A worked example: one backend role</H2>
      <P>
        Take a single backend engineering role. One persona is a platform engineer already working at a
        product company: they have owned a service in production, the vocabulary on their profile is
        the product world&rsquo;s vocabulary, and the move you are offering them is a sideways one
        between similar environments.
      </P>
      <P>
        The second persona is an engineer at a services firm who is ready to make the switch. Strong,
        often very experienced, and describing that experience in terms of clients and projects rather
        than products and ownership. The search terms are different. The seniority signals are
        different, because a title means something different on each side of that line.
      </P>
      <P>
        And the message that lands for one does not land for the other. The platform engineer is being
        asked to consider a comparable job at a different company, and wants to know what is
        interesting about the system. The services engineer is being asked to make a change of
        direction, and wants to know that the change is real and that the move is credible. Send
        either message to the other person and it reads as though it was meant for somebody else,
        because it was.
      </P>

      <H2>You see the personas before anything is spent</H2>
      <P>
        The personas are shown to you before any sourcing spend happens, which is the point at which
        they are still cheap to change. They are a plan you approve rather than a decision taken on
        your behalf and discovered afterwards.
      </P>
      <Bullets>
        <li>
          <Strong>Drop one.</Strong> If a persona is not a hire your team would actually make, it
          should not be consuming any part of the search.
        </li>
        <li>
          <Strong>Add one.</Strong> Hiring managers usually recognise a missing group instantly, even
          when they could not have described it in the brief.
        </li>
        <li>
          <Strong>Rebalance them.</Strong> How much of the search goes to each persona is yours to
          set, so a long-shot group can be explored without taking the search over.
        </li>
      </Bullets>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Read the personas as a description of who you are about to contact. If one of them does not
          sound like a person you would interview, that is the moment to say so.
        </li>
        <li>
          Show them to the hiring manager. A list of two or three recognisable kinds of candidate is a
          far better prompt than a job description, and they will often correct it in a sentence.
        </li>
        <li>
          Revisit the balance when replies start arriving. If one persona is answering and another is
          not, that is information about the market, and the weighting can move to follow it.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "one-role-is-rarely-one-search",
  title: "One role is rarely one search",
  dek: "A job description usually describes several genuinely different candidates. Each becomes its own persona, sourced as its own search, with its own filters and its own message.",
  answer:
    "A single job description usually describes several genuinely different kinds of candidate, who do not live in the same place or answer the same message. EmployLabs carves the role into personas and sources each as its own search with its own filters, instead of one averaged search that sits between two real groups and reaches neither well.",
  category: "update",
  motif: "market",
  publishedAt: "2026-10-18",
  readingMinutes: 4,
  topics: ["candidate personas", "sourcing strategy", "boolean search", "talent pools", "recruiter outreach"],
  faq: [
    {
      q: "Why split one role into several searches?",
      a: "Because one job description usually describes several different kinds of candidate, and they do not sit in the same places or respond to the same message. A single averaged search compromises its filters to cover both groups and ends up reaching neither of them well.",
    },
    {
      q: "What does a persona actually change about the search?",
      a: "Each persona is sourced as its own search with its own filters, so the titles, the seniority signals and the companies worth looking at can all differ, and the outreach can be written for that group rather than pitched between two of them.",
    },
    {
      q: "Can I change the personas before any money is spent?",
      a: "Yes. You see the personas before anything is spent on sourcing, and you can drop one, add one, or rebalance how much of the search goes to each. Hiring managers tend to recognise a missing group immediately.",
    },
  ],
  Body,
};
