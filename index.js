const quizKey = [
  {
    q: "How much electricity did solar power produce globally in 2022?",
    a: "In 2022, solar power produced around 1.3 terawatt-hours (TWh) of electricity worldwide."
  },
  {
    q: "What percentage of the world’s electricity came from solar power in 2022?",
    a: "Solar power accounted for 4.6% of the world’s electricity in 2022."
  },
  {
    q: "What factors affect the amount of solar energy that can be harnessed for electricity?",
    a: "The amount of solar energy that can be harnessed depends on weather conditions, geographic location, and time of day."
  },
  {
    q: "How does solar thermal energy generate electricity?",
    a: "Solar thermal energy generates electricity by using mirrors or lenses to focus sunlight onto a receiver, which heats water to produce steam that drives a turbine connected to a generator"
  },
  {
    q: "What are two advantages of solar thermal energy for residential use?",
    a: "Solar thermal energy can heat water for home use and store heated water, eliminating the need for a separate energy storage system."
  },
  {
    q: "Why is photovoltaic (solar panel) technology the fastest-growing renewable energy source?",
    a: "Because it is low-cost, scalable, low-maintenance, and has improved in efficiency and affordability."
  },
  {
    q: "How does photovoltaic technology work, and what is one environmental benefit of it?",
    a: "It converts sunlight into direct current electricity using the photoelectric effect. One environmental benefit is that solar panel recycling helps reduce electronic waste."
  },
  {
    q: "How has the use of wind energy evolved over time?",
    a: "Wind energy was first used around 3500 BC for ships, windmills, and water pumps. Today, it is mainly used to generate electricity using wind turbines ranging from 600 kW to 9 MW."
  },
  {
    q: " What makes offshore areas ideal for wind farms, and how significant is wind energy in certain countries?",
    a: "Offshore areas are ideal because wind speeds are about 90% higher than on land, greatly boosting energy output. In 2015, wind met over 40% of electricity demand in Denmark and around 20% in Ireland, Portugal, and Spain."
  },
  {
    q: "What trends and investment patterns have been seen in wind energy from 2013 to 2022?",
    a: "From 2013 to 2022, global wind capacity grew by 557 GW, with annual additions averaging 19%. Onshore wind made up 80% of total investments, while offshore wind investments nearly doubled from 2019 to 2020, reaching USD 41 billion due to growth in Europe and policy support in China."
  },
]

const quiz = document.getElementById("quiz");
const q = document.getElementById("question");
const a = document.getElementById("answer");
const answerHelper = document.getElementById("answerHelper");

quiz.style.display = "none";
a.hidden = true;

startQuiz.addEventListener("click", () => {
  quiz.style.display = "block";
  a.hidden = true;
  const random = Math.floor(Math.random() * quizKey.length);
  q.innerHTML = `Q${random + 1}. ${quizKey[random].q}`;
  a.innerHTML= `A${random + 1}. ${quizKey[random].a}`;
  answerHelper.style.display = "block";
  console.log("test: ", random, q, a)
});

answerHelper.addEventListener("click", () => {
  a.hidden = false;
  answerHelper.style.display = "none";
});


document.addEventListener("DOMContentLoaded", function() {
  function fade() {            
    const Header = document.querySelector("header");               
    
    let height = Header.offsetHeight;
    let position = document.documentElement.scrollTop;
    let o = height/(height + position);
    let opacity = o.toFixed(2);
    
    if (position <= height) {
      Header.style.opacity = opacity;
      
      // console.log(
      // `
      //   Height / Position: ${height} / ${position}
      //   <br>
      //   Opacity: ${Header.style.opacity}
      // `
      // )
    }
  }
  document.addEventListener("scroll", function() {
    fade();
  });
});