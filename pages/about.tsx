// pages/about.tsx
import React from 'react';
import Image from 'next/image';
import styles from '../app/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>About Cleo Labs</h1>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <p className={styles.text}>
            Welcome to Cleo Labs. This in itself is a prototype of a prototype library. How meta! 😅
          </p>
          <p className={styles.text}>
            It has been created with the intention of giving New Bets Dicsovery an extra tool in their arsenal when it comes
            to assessing user research candidates' opinions on potential new bets.
          </p>
          <p className={styles.text}>
            Sometimes a high-fidelity Figma image is perfect for getting a user's initial reaction. There are times however 
            in New Bets Pillar where we are trying things that we've never attempted before. We are stepping into the unknown and
            this in turn increases the chances of failure. This, however, should not put is off taking that step forwards and testing 
            our hypothesis. <strong>We need to uncover new and smarter ways of work to manage the risk - not avoid it</strong>.
          </p>
          <p className={styles.text}>
            Certain bets, such as gamification, are relative unknowns to Cleo. We have several tried-and-tested approaches to gaining user insights, 
            but they're not optimal for initiatives such as gamification. On one hand, a Figma file is potentially too 
            static to get a sense of a user's opinions when we're trying to understand their interactions with a dynamic, hands-on experience. 
            An alternative solution would be building the bet straight into the Cleo app alongside our legacy architecture, infrastructure and skillsets. 
            This can be quite a big investment of time and effory however when we still have no certainty over the user's desire for what we've built.
          </p>
          <p className={styles.text}>
            With this in mind, I created a prototype library - or <strong>Cleo Labs</strong> as I'm affectionately naming it. 
            <strong> Cleo Labs has been created first and foremost as an experiment in itself</strong> to see if it's a viable, desireable and feasible
             tool to build and invest further time in as we aim to learn fast.
          </p>
          <p >
            Some of the key features Cleo Labs offers and considerations made when building it include:
          </p>
          <ul className={styles.text}>
            <li>Built using technology found in our <strong>existing tech stack, JavaScript/TypeScript</strong></li>
            <li>Platform is web-based to enable <strong>User Researchers, Research Candidates and Internal Dogfooders</strong> alike to view and <strong>play with all the prototypes</strong></li>
            <li><strong>Secured using HTTPS</strong> within Vercel's <strong>free</strong> deployment and hosting plan</li>
            <li>Additional security added so that <strong>no one can enter Cleo Labs without a username and password</strong></li>
            <li>Users can play with the protoypes on their own phones with <strong>no need to visit the app store or download anything</strong>. Just scan a simple QR code!</li>
            <li><strong>Observability</strong> of the user's interactions using another piece of existing, Cleo tech - <strong>Smartlook</strong>. See how our users interact with our prototypes</li>
            <li>If a prototype is a resounding failure and our users hate it, we've learnt something valuable <strong>without the overhead of leaving dead-code in the Cleo app or accruing tech debt</strong> to remove the unwanted feature</li>
          </ul>
          <p >
            The main enabler to this tooling is the use of <strong>Progressive Web App (PWA)</strong> technology. Think of PWAs as being a slight variation of our existing React / React-Native tech with a sprinkle of magic. In a nutshell, it gives us the 
            best of both worlds when it comes to gaining user insights on interactive features whilst we're still trying to "build the right 
             <i>it</i> rather than building <i>it</i> right".
          </p>
          <p>
          <strong>PWAs are not here to replace our existing Cleo app</strong> - they are piece of tooling to be used for the specific purpose of learning fast. If users like 
            what they've experienced in a PWA, there's a greater chance that they'll love it when we build it into the Cleo app using our existing tech stack.
          </p>
          <p className={styles.text}>
            An overview of what PWAs are good / no so good for can be found below:
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/PWApros.png"
              alt="PWA Pros and Cons"
              width={100}
              height={50}
              layout="responsive"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
