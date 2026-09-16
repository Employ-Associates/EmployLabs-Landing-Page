import type { BlogPost } from "../types";
import { P, H2, Pull, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Something will interrupt it</H2>
      <P>
        Automation that runs for weeks without anybody watching it will be interrupted. A machine
        restarts. A release goes out at two in the afternoon. A call to another service hangs long
        enough that something gives up waiting. None of this means anything is wrong; it is simply
        what running continuously looks like over a long enough period.
      </P>
      <P>
        So the interesting question is not how to avoid interruption. It is what the work does on the
        way back, in the seconds after it resumes and has to work out what it had already done.
      </P>

      <H2>The duplicates that actually cost something</H2>
      <P>
        Three of them matter, and a recruiter meets all three from the wrong end.
      </P>
      <Bullets>
        <li>
          <Strong>A second email to the same candidate.</Strong> Two copies of the same follow-up in
          one afternoon does not read as enthusiasm. It reads as a machine that is not being watched,
          and it is the one piece of evidence a candidate needs to stop replying to your address.
        </li>
        <li>
          <Strong>A duplicate interview booking.</Strong> Two holds on a calendar for one
          conversation, or a candidate asked to choose a slot they have already chosen. Both make the
          candidate do your reconciliation for you.
        </li>
        <li>
          <Strong>A second charge.</Strong> Some steps in a search cost money. Paying twice for one
          piece of work is the version of this that shows up in a budget rather than in an inbox.
        </li>
      </Bullets>
      <P>
        They are not equal in cost, but they say the same thing to whoever receives them: nobody is
        home.
      </P>

      <H2>Claimed before it runs, recorded once it has</H2>
      <P>
        Every piece of outbound work on EmployLabs is claimed before it is carried out, and recorded
        once it has been.
      </P>
      <P>
        The claim is the part that does the real work. Once a piece of work has been claimed it cannot
        be picked up a second time, so a process coming back after a restart is reading a ledger of
        what is already in hand rather than a list of intentions it has to run again from the top.
      </P>
      <P>
        The record closes it. When the email has gone, the booking is made or the paid step is done,
        that outcome is written down as a fact rather than inferred later from whatever state the
        system happens to be in.
      </P>
      <P>
        The order of those two is the whole point. The dangerous window in any unattended system is
        the gap between deciding to act and knowing that you did, and claiming first is what keeps
        anything from entering that gap twice.
      </P>

      <Pull>
        A resumed sequence should look, from the candidate&rsquo;s side, exactly like one that was
        never interrupted.
      </Pull>

      <H2>Why this cannot be a retry setting</H2>
      <P>
        The usual answer to unreliable work is to retry it, and retrying is genuinely necessary. A
        step that failed because something was briefly unavailable should be tried again.
      </P>
      <P>
        But a retry count is a guess, and the failure that produces duplicates is exactly the one
        where you cannot tell whether the first attempt worked. Send it once more to be safe, and
        somebody gets two emails. Hold it back in case it already went, and somebody gets none. Both
        instructions are wrong, because the question they are answering is a question about the past
        and neither of them looks at the record.
      </P>
      <P>
        Claiming and recording remove the guess rather than tuning it. There is no number to set, and
        no threshold that is nearly right.
      </P>

      <H2>What this changes for your week</H2>
      <Bullets>
        <li>
          <Strong>You do not audit outreach after a release.</Strong> Nothing needs checking for
          double sends, because the resumed work is reading what already happened.
        </li>
        <li>
          <Strong>Candidates never see the machinery.</Strong> The experience of a sequence that was
          interrupted is the same as the experience of one that was not.
        </li>
        <li>
          <Strong>An interruption does not spend twice.</Strong> Work that costs money is claimed
          before it is paid for, so coming back does not re-buy it.
        </li>
      </Bullets>

      <H2>There is nothing to switch on</H2>
      <P>
        This is a property of how work is carried out rather than a feature with a setting, which
        means the only evidence you will ever have of it is an absence. No candidate writing back to
        ask why they received the same message twice. No second hold to cancel on a hiring
        manager&rsquo;s calendar. No line in the spend you cannot account for.
      </P>
      <P>
        That is an unsatisfying thing to demonstrate and a very good thing to have. Unattended
        automation is judged on its worst day rather than its ordinary one, and its worst day is
        almost always the one where something stopped halfway through.
      </P>
    </>
  );
}

export const post: BlogPost = {
  slug: "a-retry-that-never-double-sends",
  title: "A retry that never sends twice",
  dek: "Automation that runs unattended for weeks will be interrupted at some point. What matters is whether the candidate on the other end can tell.",
  answer:
    "EmployLabs claims every piece of outbound work before carrying it out and records it once done, so a crash, a restart or a redeploy midway through a sequence cannot produce a second email to the same candidate, a duplicate interview booking, or a second charge. Interruptions happen; the candidate never sees one.",
  category: "update",
  motif: "timeline",
  publishedAt: "2026-10-27",
  readingMinutes: 4,
  topics: ["outreach automation", "recruiting automation", "candidate experience", "duplicate emails", "spend control"],
  faq: [
    {
      q: "Can a candidate receive the same outreach email twice?",
      a: "Not through an interruption. Each send is claimed before it is carried out and recorded once it has been, so work that resumes after a crash or a restart reads what already happened rather than running the sequence again from the start.",
    },
    {
      q: "What happens to a sequence if the system restarts halfway through it?",
      a: "It carries on from what was already claimed and recorded. A message that went out is not sent again, and a message that had not yet been claimed still goes. From the candidate's side a resumed sequence is indistinguishable from one that was never interrupted.",
    },
    {
      q: "Could an interruption make us pay twice for the same step?",
      a: "No. Steps that cost money are claimed before they are carried out, so a process that comes back after a failure does not buy the same piece of work a second time, and a duplicate interview booking is prevented the same way.",
    },
  ],
  Body,
};
