import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>A brief is prose. A search is a query.</H2>
      <P>
        Every search begins as a sentence somebody wrote. &ldquo;Senior backend engineer, fintech
        background, has run a small team, Bangalore or remote within India.&rdquo; That is how briefs
        are written, and there is nothing wrong with it. It is simply not a search. A search is a set
        of constraints applied to a population, and the distance between the sentence and the
        constraints is where most sourcing quietly goes wrong.
      </P>
      <P>
        Usually that distance is crossed out of sight. Something reads the brief, does whatever it
        does, and hands back a list. If the list is good you are pleased. If it is poor you have no
        way of knowing which part of your sentence caused it, so you rewrite the sentence and try
        again.
      </P>

      <H2>The brief becomes named axes</H2>
      <P>
        On EmployLabs the brief is turned into an explicit structured query along named axes &mdash;
        seniority, function, industry, location and the like. Each axis holds the value that was read
        out of your prose, written down rather than held in the model&rsquo;s head.
      </P>
      <P>
        So &ldquo;senior backend engineer at a fintech&rdquo; does not remain a phrase. It becomes a
        seniority band, a function, an industry and a place, each one a separate thing with a separate
        value. The interpretation is now an object on the screen instead of an assumption inside a
        process.
      </P>

      <H2>Every axis is shown to you, and every axis can be changed</H2>
      <P>
        The axes are not internal machinery we describe in a blog post. They are on the role, in front
        of you, before the search runs, and you can adjust any of them. The system has made a reading
        of your brief and it shows you the reading rather than only the consequence of it.
      </P>
      <P>
        This is the difference between a tool you have to trust and a tool you can check. Trust is
        what you are left with when there is nothing to inspect, and it is a poor substitute for
        looking.
      </P>

      <Pull>A black box cannot be corrected. It can only be asked again, differently, and hoped at.</Pull>

      <H2>When the results look wrong, you can see which axis is wrong</H2>
      <P>
        This is the part that changes a recruiter&rsquo;s day. A disappointing result set is no longer
        one undifferentiated problem called &ldquo;the AI got it wrong&rdquo;. It is almost always one
        axis carrying a value you would not have chosen, and you can read the axes and find it.
      </P>
      <Bullets>
        <li>
          <Strong>Everyone is too junior.</Strong> Look at the seniority band. Your brief probably
          described the work rather than the level, and the level was inferred from the work.
        </li>
        <li>
          <Strong>The companies are wrong.</Strong> Look at industry. A brief that mentions a domain in
          passing can have that domain read as a hard constraint, or the reverse.
        </li>
        <li>
          <Strong>Nobody would realistically move.</Strong> Look at location. A place named once in a
          long paragraph carries a great deal of weight in a search, and it may be narrower or broader
          than you meant.
        </li>
      </Bullets>
      <P>
        In each case the fix is a change to one value, not a rewrite of the brief. Rewording prose to
        move a search is guesswork, because you are editing the input to a translation you cannot see.
        Changing an axis is an edit to the search itself.
      </P>

      <H2>Why the prose still matters</H2>
      <P>
        None of this makes the brief unimportant. The axes are what a search can act on, and a brief
        carries a good deal that no axis holds &mdash; why the role exists, what the first ninety days
        look like, what would make somebody say yes. That context is used elsewhere in the pipeline and
        it is worth writing well.
      </P>
      <P>
        What the axes do is stop the searchable part of the brief from staying implicit. Two things
        were being asked of one paragraph, and only one of them is a query.
      </P>

      <H2>The axes are also a shared language</H2>
      <P>
        There is a second, quieter benefit. A brief lives in one person&rsquo;s head as much as on the
        page, and when a role changes hands &mdash; a colleague covering a week of leave, a hiring
        manager wanting to know why a particular profile keeps appearing &mdash; the prose does not
        travel well. Two people can read the same paragraph and picture different candidates, and
        neither of them is obviously wrong.
      </P>
      <P>
        A set of named axes with values on them does travel. It is short enough to read in a minute and
        specific enough to argue with, which makes the disagreement a useful one: not whether the search
        feels right, but whether this seniority band and this industry are the ones the role needs. Most
        of the arguments worth having about a search are arguments about a single value, and prose keeps
        them from ever getting that far.
      </P>
      <P>
        It is a small thing on one role and a large one on twenty. The searchable definition of a role
        stops being folklore and becomes something written down, in the same shape every time, which a
        person can check.
      </P>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Read the axes before you read the results. It takes a few seconds and it tells you what the
          search is about to do, while it is still cheap to change.
        </li>
        <li>
          When a result set is wrong, change one axis and run it again. Changing three at once tells
          you the next set is different, not which change made it so.
        </li>
        <li>
          If an axis keeps coming back with a value you did not intend, the brief is ambiguous at that
          point. Fixing the sentence there is worth more than fixing the axis every time.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "from-a-brief-to-a-real-search",
  title: "From a written brief to a real search",
  dek: "A brief written in prose becomes an explicit query along named axes. You can see each one and change it, so a poor result set is something you diagnose rather than reword.",
  answer:
    "EmployLabs turns a written brief into an explicit structured query with named axes — seniority, function, industry, location and the rest. The axes are shown to you and can be adjusted, so a search is inspectable rather than a black box. When results look wrong, you can see which axis is wrong and change it.",
  category: "update",
  motif: "market",
  publishedAt: "2026-10-23",
  readingMinutes: 4,
  topics: ["job brief", "structured search", "sourcing filters", "AI sourcing", "recruiter control"],
  faq: [
    {
      q: "How does EmployLabs turn my brief into a search?",
      a: "The brief is read into an explicit structured query along named axes such as seniority, function, industry and location. Each axis holds the value taken from your prose, so the interpretation is written down rather than left inside the process.",
    },
    {
      q: "Can I change the search the system built from my brief?",
      a: "Yes. The axes are shown on the role before the search runs and each one can be adjusted. You are not limited to rewriting the brief and running it again.",
    },
    {
      q: "What should I do when the search results look wrong?",
      a: "Read the axes rather than the brief. A poor result set is usually one axis carrying a value you would not have chosen — a seniority band, an industry, a location — and changing that one value is a more direct fix than rewording prose.",
    },
  ],
  Body,
};
