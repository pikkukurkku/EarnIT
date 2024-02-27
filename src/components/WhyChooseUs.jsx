import "./WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <div className="WhyChooseUs">
      <h1>Why choose us?</h1>
      <h2>A short introduction of how we work and what we do</h2>
      <div className="boxes">
        <div className="box">
          <h5>What is EarnIT?</h5>
          <article>
            We're here to help you advance in your career step by step. Our
            platform provides personalized guidance and recommendations based on
            your career profile and goals.
          </article>
        </div>

        <div className="box">
          <h5>How does it work?</h5>
          <article>
            It's simple. We start by getting to know you through a friendly
            quiz. This helps us understand your unique situation and create a
            customized career plan just for you.
          </article>
        </div>
        <div className="box">
          <h5>What’s the quiz about?</h5>
          <article>
          We ask about your background, education, skills, goals, and the challenges you've faced in your career. It's all about understanding your journey so we can support you effectively.
          </article>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
