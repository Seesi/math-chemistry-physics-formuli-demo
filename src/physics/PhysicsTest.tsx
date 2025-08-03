import { MathJax } from "better-react-mathjax";


const PhysicsTest = () => {
  return (
    <>
      <div className="question">
        <h4>Question 1: Newton’s Second Law</h4>
        <p>
          A box with a mass of 10 kg is pushed across a smooth surface with a
          constant force of 50 N. What is the acceleration of the box? Use the
          formula: <MathJax>{"\\(a = \\frac{F}{m}\\)"}</MathJax>
        </p>
         <hr />
      </div>
      <div className="question">
        <h4>Question 2: Kinetic Energy</h4>
        <p>
          A ball with a mass of 2 kg is moving at a velocity of 3 m/s. What is
          its kinetic energy? Use the formula:{" "}
          <MathJax>{"\\(KE = \\frac{1}{2}mv^2\\)"}</MathJax>
        </p>
         <hr />
      </div>
      <div className="question">
        <h4>Question 3: Ohm’s Law</h4>
        <p>
          A circuit has a resistance of 5 Ω and a current of 2 A. Calculate the
          voltage across the circuit. Use the formula:{" "}
          <MathJax>{"\\(V = IR\\)"}</MathJax>
        </p>
         <hr />
      </div>
    </>
  );
};

export default PhysicsTest;
