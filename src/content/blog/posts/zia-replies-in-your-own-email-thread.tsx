import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Most automated replies are not replies</H2>
      <P>
        A candidate answers your outreach email. What usually comes back is a fresh message with a new
        subject line, sometimes with a fabricated &ldquo;Re:&rdquo; in front of it, sitting on its own
        in their inbox with no connection to what they wrote.
      </P>
      <P>
        Two things go wrong. The candidate has to reconstruct the context of a conversation they were
        already having, and the mail client treats the message as a new cold approach rather than a
        continuation, which is the difference between the primary inbox and the promotions tab.
      </P>

      <H2>A real reply, in their thread</H2>
      <P>
        When a candidate replies, Zia answers inside that thread. Not a new message dressed as one: a
        genuine reply built from the candidate&rsquo;s own message identifier, so the mail client
        threads it under the conversation they started.
      </P>
      <P>
        The prefix on the subject line is honest for the same reason. It is a reply to a message they
        genuinely sent, which is the only circumstance in which that marker is truthful. Putting it on
        a cold approach that never replied to anything is a deceptive subject line, and we do not do it
        anywhere in the product.
      </P>

      <Pull>Threading is the strongest lever anyone has on where a message lands.</Pull>

      <H2>Why the reply is where the useful links go</H2>
      <P>
        Cold messages earn attention. They rarely convert, and loading them with links and calls to
        action makes them look more like marketing and land accordingly.
      </P>
      <P>
        The reply is different. The candidate has opted in by writing back, so that is where the two
        things that actually do something belong: the page with the full role detail and a way to book
        time, and a route into a live conversation. A person receiving those has asked to hear from
        you.
      </P>

      <H2>What this changes for your week</H2>
      <Bullets>
        <li>
          <Strong>Replies land in the inbox rather than a promotions tab.</Strong> The same content,
          threaded, is treated as conversation by mail clients.
        </li>
        <li>
          <Strong>Candidates do not have to re-establish context.</Strong> Their message and the answer
          sit together, the way any normal exchange does.
        </li>
        <li>
          <Strong>Nobody on your team writes the reply.</Strong> It goes out at whatever hour the
          candidate wrote, which is frequently outside working hours.
        </li>
      </Bullets>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Let the reply do the converting. Keep the first approach short and save the detail for the
          people who answer it.
        </li>
        <li>
          Check what your candidates are actually asking in replies. The recurring question is usually
          something the job description should have answered.
        </li>
        <li>
          Never add a fabricated reply prefix to a cold rung anywhere else in your process. It is
          deceptive and it trains people to distrust the marker when it is real.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "zia-replies-in-your-own-email-thread",
  title: "Zia replies inside the candidate's own email thread",
  dek: "Not a fresh email with a fabricated “Re:”. A genuine threaded reply, which is also the strongest lever anyone has on inbox placement.",
  answer:
    "When a candidate replies to outreach, Zia answers inside that same email thread using the candidate's own message identifier, so mail clients treat it as a continuation rather than a new cold approach. Threading strongly influences inbox placement. The reply is also where the role detail and booking links belong, because the candidate has opted in by writing back.",
  category: "update",
  motif: "timeline",
  publishedAt: "2026-09-18",
  readingMinutes: 4,
  topics: ["email deliverability", "candidate outreach", "email threading", "recruiting email", "candidate replies"],
  faq: [
    {
      q: "Does email threading affect inbox placement?",
      a: "Substantially. A message that threads under a conversation the recipient started is treated as correspondence, while a fresh subject line from an unfamiliar sender is far more likely to be filtered as promotional.",
    },
    {
      q: "Is it acceptable to put “Re:” on a recruiting email?",
      a: "Only when it genuinely replies to a message the person sent. Prefixing a cold approach that never replied to anything is a deceptive subject line and carries real compliance exposure.",
    },
    {
      q: "Where should booking links go in a recruiting sequence?",
      a: "In the reply rather than the cold approach. Cold messages loaded with calls to action read as marketing; a candidate who has written back has opted in and is the right person to hand a scheduling link.",
    },
  ],
  Body,
};
