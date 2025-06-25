"use client";

import classes from "./page.module.css";
import DecryptedText from "@/components/decrypted-text";
import TrueFocus from "@/components/TrueFocus";
import TiltedCard from "@/components/TiltedCard";
import Link from "next/link";

export default function Home() {

  return (
    <main className={classes.container}>
      <section className={classes.info}>
        <TrueFocus
          sentence="David Abshilava"
          manualMode={false}
          blurAmount={5}
          borderColor="black"
          animationDuration={2}
          pauseBetweenAnimations={1}
          className={classes.h1}
        />
        <p>
          <DecryptedText
            text={`I'm David,Junior Frontend Developer From Georgia.`}
            speed={100}
            maxIterations={20}
            characters="ABCD1234!?"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />
        </p>
        <button role="button"><Link href="/contact">Contact Me</Link></button>
      </section>
      <section className={classes.imageCont}>
        <TiltedCard
          imageSrc="mainimg.jpg"
          altText="Davit Abshilava - Junior Frontend Developer"
          captionText="Davit Abshilava - Junior Frontend Developer"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text">Just ME</p>
          }
        />
      </section>
    </main>
  );
}
