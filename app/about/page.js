"use client";

import CardSwap, { Card } from "@/components/CardSwap";
import classes from "./page.module.css";
import BlurText from "@/components/BlurText";
import Link from "next/link";
export default function About() {
  const handleAnimationComplete = () => {};

  return (
    <>
      <div className={classes.cont} >
        <div className={classes.info}>
          <h1>
            <BlurText
              text="My Main Skills"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-2xl mb-8 "
            />
          </h1>

          <BlurText
            text="Check Out My Socials"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8 "
          />

          <div className={classes.buttonContainer}>
            <button role="button"><Link href="https://www.instagram.com/d.absho/">Instagram</Link></button>
            <button role="button"><Link href="https://www.linkedin.com/in/davit-abshilava-8b010a371/">Linkedin</Link></button>
          </div>
        </div>

        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          <Card
            style={{
              background: "url('/ReactJS-scaled.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3>React.JS</h3>
          </Card>
          <Card
            style={{
              background: "url('/javascript.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3>Javascript</h3>
          </Card>
          <Card
            style={{
              background: "url('/nextjs.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3>Next.JS</h3>
          </Card>
          <Card
            style={{
              background: "url('/redux.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3>Redux.JS</h3>
          </Card>
          <Card
            style={{
              background: "url('/html.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3>HTML5</h3>
          </Card>
          <Card
            style={{
              background: "url('/css.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3>CSS</h3>
          </Card>
          <Card
            style={{
              background: "url('/sass.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3>SASS</h3>
          </Card>
        </CardSwap>
      </div>
    </>
  );
}
