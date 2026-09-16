import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Every funnel number starts as somebody else&rsquo;s</H2>
      <P>
        Pipeline planning usually runs on borrowed figures. A reply rate from a conference talk, a
        screen-pass rate from an article, a rule of thumb a colleague brought from a previous employer.
        They are all averages of organisations you are not, and they are used because nothing better is
        to hand at the moment the planning happens.
      </P>
      <P>
        The trouble is not that borrowed rates are wrong in some general sense. It is that the
        direction of the error is unknowable. Your employer brand, your function, the seniority you
        hire at and the market you hire in all move those rates, and they do not move them the same
        way. A borrowed number will size your pipeline incorrectly and give you no indication of which
        way it is off.
      </P>

      <H2>You set one number</H2>
      <P>
        On EmployLabs you supply a single figure: how many finalists you want to end up with. Every
        other number in the funnel is derived from it by running the conversion cascade backwards, so
        nobody is asked how many profiles to source or how many people to contact. Those are
        consequences of the finalist target, not separate decisions.
      </P>
      <P>
        How hard the role is to fill then widens or narrows the top of that funnel. Two roles wanting
        the same number of finalists do not need the same volume at the top if one of them is a
        commodity hire and the other exists in a handful of companies, and the difficulty assessment is
        what keeps that from being a flat multiplier applied to everything.
      </P>
      <P>
        This is the part that is hardest to do by hand, because the relationship is not proportional.
        A role that is twice as hard to fill does not need twice the volume at the top, since the
        difficulty shows up at more than one stage at once: fewer people match, fewer of those who
        match reply, and fewer of those who reply are available. Compounded, small differences at each
        stage produce large differences in what the top of the funnel has to carry.
      </P>

      <Pull>
        A benchmark is somebody else&rsquo;s history. The only conversion rate that describes you is
        your own.
      </Pull>

      <H2>Then your own hiring replaces the assumptions</H2>
      <P>
        On the first roles, the cascade has to run on general assumptions, because there is nothing
        else to run on. That is worth saying plainly rather than leaving implied: the early projections
        are a hypothesis about your funnel, not a measurement of it.
      </P>
      <P>
        As your own hires accumulate, those assumptions are replaced by what your organisation actually
        converts at. How many sourced candidates clear your bar, how many of those answer, how many of
        those come through an interview well. Each of those stops being an imported figure and becomes
        an observation about you.
      </P>
      <P>
        Which means the projections correct themselves over time. Nobody sits down to recalibrate a
        planning spreadsheet, and nobody has to notice that the old assumption had drifted. The
        estimate for the next role is built from the evidence of the last ones, in the same way and
        without anyone deciding to do it.
      </P>
      <P>
        There is also no moment you have to manage. It is not a switch from assumptions to measurement
        that someone throws once enough roles have run; the assumptions give way as the evidence
        arrives, in the places where evidence exists. That matters because the alternative &mdash; a
        recalibration project scheduled for a quiet month &mdash; is the kind of work that never
        reaches the top of anyone&rsquo;s list, which is why most hiring plans are still sized on rates
        that were borrowed years ago and never revisited.
      </P>

      <H2>What this changes about trusting a projection</H2>
      <Bullets>
        <li>
          <Strong>The numbers have a provenance.</Strong> A derived target is a function of a finalist
          count, a difficulty assessment and a set of conversion rates, so disagreeing with it means
          disagreeing with one of those rather than with a figure that simply appeared.
        </li>
        <li>
          <Strong>Early projections should be held loosely.</Strong> They are honest arithmetic on
          general assumptions, and the assumptions are the weak part.
        </li>
        <li>
          <Strong>Later projections are about your organisation.</Strong> The same cascade, run on
          rates observed in your own hiring, is a materially different claim from the same cascade run
          on averages.
        </li>
        <li>
          <Strong>Improvements show up in the planning.</Strong> If your outreach or your screening
          gets better, the measured conversion moves, and the next role is sized on the better rate
          rather than on the one you had when you started.
        </li>
      </Bullets>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Set the finalist count to what the hiring manager will genuinely sit through. It is the one
          input, so an inflated number inflates everything derived from it.
        </li>
        <li>
          On early roles, read the derived figures as a starting hypothesis. They are the best
          available estimate and they are not yet evidence about you.
        </li>
        <li>
          Keep running roles on the platform even when a particular search feels unusual. Every
          completed role is what turns the general assumptions into your own measured rates, and the
          unusual ones carry as much information as the ordinary ones.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "targets-that-learn-from-your-data",
  title: "Targets that learn from your own hiring",
  dek: "You set how many finalists you want. Every other number is derived from it, and the conversion rates behind that arithmetic are replaced by your own as your hires accumulate.",
  answer:
    "EmployLabs asks a recruiter for one number, the finalist count, and derives every other figure in the funnel by running the conversion cascade backwards, widened or narrowed by how hard the role is. Early roles use general conversion assumptions; as an organisation's own hires accumulate, its measured conversion replaces them and the projections correct themselves.",
  category: "update",
  motif: "bars",
  publishedAt: "2026-10-21",
  readingMinutes: 4,
  topics: ["hiring funnel", "conversion rates", "recruiting benchmarks", "pipeline planning", "recruiting analytics"],
  faq: [
    {
      q: "What do I actually have to tell the system about pipeline volume?",
      a: "How many finalists you want. Sourcing, outreach and interview volumes are derived from that figure by working the conversion cascade backwards, and how hard the role is to fill widens or narrows the top of the funnel accordingly.",
    },
    {
      q: "Where do the conversion rates come from before I have any history?",
      a: "From general assumptions, which is stated rather than hidden. Early projections are honest arithmetic on borrowed rates, so they are a hypothesis about your funnel rather than a measurement of it, and they should be held loosely.",
    },
    {
      q: "Do the projections get more accurate over time?",
      a: "They correct themselves as your own hires accumulate, because the general assumptions are replaced by the conversion your organisation actually achieves. Nobody has to recalibrate anything by hand for that to happen.",
    },
  ],
  Body,
};
