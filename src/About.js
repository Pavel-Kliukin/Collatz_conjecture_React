import React from 'react';
import style from './About.module.css';

const About = () => {

  const readMoreHandler = () => {
    const aboutText = document.getElementById(style.About)
    aboutText.classList.add(style.aboutShowAll)
    const readMoreButton = document.getElementById(style.readMoreButton)
    readMoreButton.classList.add(style.hide)
  }

  return (
    <div id={style.About} className={style.About}>
      <div className={style.intro}>
        <p>Take a number, any number.</p>
        <p>If it’s even, halve it. If it’s odd, multiply by 3 and add 1.</p>
        <p>Repeat.</p>
        <div className={style.paragraphAndButton}>
          <p>Do all starting numbers lead to 1?</p>
          <button id={style.readMoreButton} onClick={readMoreHandler}>Read more</button>
        </div>
      </div>
      <h2 className={style.h2}>About Collatz Conjecture</h2>
      <div className={style.aboutParagraphs}>
        <p>Experienced mathematicians warn up-and-comers to stay away from the Collatz conjecture. It’s a siren song, they say: Fall under its trance and you may never do meaningful work again.</p>
        <p>The Collatz conjecture is quite possibly the simplest unsolved problem in mathematics — which is exactly what makes it so treacherously alluring.</p>
        <p>“This is a really dangerous problem. People become obsessed with it and it really is impossible,” said Jeffrey Lagarias, a mathematician at the University of Michigan and an expert on the Collatz conjecture.</p>
        <p>Earlier this year one of the top mathematicians in the world dared to confront the problem — and came away with one of the most significant results on the Collatz conjecture in decades.</p>
        <p>On September 8, Terence Tao posted a proof showing that — at the very least — the Collatz conjecture is “almost” true for “almost” all numbers. While Tao’s result is not a full proof of the conjecture, it is a major advance on a problem that doesn’t give up its secrets easily.</p>
        <p>“I wasn’t expecting to solve this problem completely,” said Tao, a mathematician at the University of California, Los Angeles. “But what I did was more than I expected.”</p>
      </div>
      <h2 className={style.h2}>The Collatz Conundrum</h2>
      <div className={style.aboutParagraphs}>
        <p>Lothar Collatz likely posed the eponymous conjecture in the 1930s. The problem sounds like a party trick. Pick a number, any number. If it’s odd, multiply it by 3 and add 1. If it’s even, divide it by 2. Now you have a new number. Apply the same rules to the new number. The conjecture is about what happens as you keep repeating the process.</p>
        <p>Intuition might suggest that the number you start with affects the number you end up with. Maybe some numbers eventually spiral all the way down to 1. Maybe others go marching off to infinity.</p>
        <p>But Collatz predicted that’s not the case. He conjectured that if you start with a positive whole number and run this process long enough, all starting values will lead to 1. And once you hit 1, the rules of the Collatz conjecture confine you to a loop: 1, 4, 2, 1, 4, 2, 1, on and on forever.</p>
        <p>Over the years, many problem solvers have been drawn to the beguiling simplicity of the Collatz conjecture, or the “3x + 1 problem,” as it’s also known. Mathematicians have tested quintillions of examples (that’s 18 zeros) without finding a single exception to Collatz’s prediction. You can even try a few examples yourself with the “Collatz calculator” of this site. The internet is awash in unfounded amateur proofs that claim to have resolved the problem one way or the other.</p>
      </div>

    </div>
  );
};

export default About;