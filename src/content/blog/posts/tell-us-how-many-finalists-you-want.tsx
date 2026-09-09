import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong, CompareTable } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Nobody knows how many people to source</H2>
      <P>
        Ask a recruiter how many candidates a role needs and the honest answer is that it depends on
        the role, and they will find out by running it. So the number gets set by whatever the tool
        defaults to, or by how much budget is left, and the pipeline is either starved or bloated for
        reasons nobody chose.
      </P>
      <P>
        The number is derivable. It just requires working backwards from the only figure the recruiter
        actually knows.
      </P>

      <H2>One knob</H2>
      <P>
        You say how many finalists you want to end up with. Everything else is calculated from that:
        how many to source, how many to contact, how many to interview, all scaled by how hard this
        particular role is to fill.
      </P>
      <P>
        A role needing three finalists is not a third of a role needing nine, because the conversion at
        each stage compounds. Running that cascade by hand is arithmetic nobody does, so in practice it
        gets guessed.
      </P>

      <Pull>The only number a recruiter reliably knows is how many finalists they need.</Pull>

      <H2>And the targets correct themselves</H2>
      <P>
        The starting conversion rates are assumptions. Once your roles have history, your own observed
        rates take over: how many sourced candidates clear your bar, how many of those reply, how many
        of those interview well.
      </P>
      <P>
        This matters most where intuition is worst. Reply rates vary enormously by function and
        seniority, and a rate imported from someone else&rsquo;s benchmark will size your pipeline
        wrongly in a direction you cannot predict.
      </P>

      <CompareTable
        head={["Stage", "Set by hand", "Derived from the finalist target"]}
        rows={[
          [
            "How many to source",
            "A round number, or whatever the credit budget allows.",
            "Back-calculated through every conversion, adjusted for role difficulty.",
          ],
          [
            "How many to contact",
            "Usually everyone who cleared the bar.",
            "Enough to produce the interviews the finalist count needs, and no more.",
          ],
          [
            "How many to interview",
            "However many say yes.",
            "Sized so the finalist count is met without burning interview slots.",
          ],
          [
            "When it is wrong",
            "You find out at the end, having spent the budget.",
            "The gap shows up as a stalled stage while there is still time to act.",
          ],
        ]}
      />

      <H2>What you still control</H2>
      <Bullets>
        <li>
          <Strong>The ceiling.</Strong> Derived targets propose; your spend cap disposes. Sourcing is free,
          so the cap bites on the stages that cost something, and it tells you when it does.
        </li>
        <li>
          <Strong>Any single stage.</Strong> Override one number and the rest still derive around it.
        </li>
        <li>
          <Strong>The finalist count itself.</Strong> Change it mid-role and everything downstream
          resizes.
        </li>
      </Bullets>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Set the finalist count to what the hiring manager will genuinely interview, not to what feels
          safe. Padding it multiplies through every stage.
        </li>
        <li>
          Leave the derived numbers alone on the first role. They are a hypothesis, and overriding them
          before there is data replaces one guess with another.
        </li>
        <li>
          Look at the derived source figure against your cap before arming. If the maths needs more
          than you will fund, that is worth knowing on day one rather than in week three.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "tell-us-how-many-finalists-you-want",
  title: "Tell us how many finalists you want. We size the rest.",
  dek: "One number you actually know, and every stage of the pipeline is calculated backwards from it, adjusted for how hard the role is to fill.",
  answer:
    "EmployLabs derives every pipeline stage from a single input: how many finalists the recruiter wants. Sourcing, outreach and interview volumes are back-calculated through the conversion at each stage and scaled by role difficulty. Starting rates are assumptions that get replaced by your own observed conversion once roles have history, and your spend cap always overrides the derived numbers.",
  category: "update",
  motif: "funnel",
  publishedAt: "2026-10-03",
  readingMinutes: 2,
  topics: ["recruiting pipeline", "hiring funnel", "sourcing volume", "recruiting metrics", "hiring automation"],
  faq: [
    {
      q: "How many candidates do you need to source to make one hire?",
      a: "It depends on the role's difficulty and your own conversion at each stage, which is why the number should be derived rather than guessed. Working backwards from the finalist count through sourcing, outreach and interview conversion gives a figure specific to your role.",
    },
    {
      q: "What happens if the derived outreach target exceeds my budget?",
      a: "The spend cap wins and you are told. Sourcing itself is free, so the ceiling bites on the stages that cost something, and a role whose maths requires more contact than you will fund surfaces that on day one rather than at the end.",
    },
    {
      q: "Do the pipeline targets adjust over time?",
      a: "Yes. Initial conversion rates are assumptions, and they are replaced by your organisation's own observed rates as roles accumulate history. This matters most for reply rates, which vary widely by function and seniority.",
    },
  ],
  Body,
};
