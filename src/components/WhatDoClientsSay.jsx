import "./WhatDoClientsSay.css";

function WhatDoClientsSay() {
  return (
    <div className="WhatDoClientsSay">
      <h3>What do clients say?</h3>
      <h4>Here are some reviews from our EarnIT community.</h4>
      <div className="boxes">
        <div className="box">
          <article>
          “EarnIT changed my life. I know which career steps to take now and where I want to go.”
          </article>
          <img src="./user1.png" alt="AI-pic1" />
          <p>Mike, Software Developer at Google</p>
        </div>

        <div className="box">
        <article>
          “I felt stuck in my career and didn’t know what I should do. EarnIT helped me find a new career path!”
          </article>
          <img src="./user2.png" alt="AI-pic22"/>
          <p>Mara, UX/UI Designer at Delivery Hero</p>
        </div>
        <div className="box">
        <article>
          “I’m just here because EarnIT offered free Pizza. I really really love Pizza so I went for it.”
          </article>
          <img src="./user3.png" alt="AI-pic3" />
          <p>Henry, Product Manager at Amazon</p>
        </div>
      </div>
    </div>
  );
}

export default WhatDoClientsSay;
