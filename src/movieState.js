import athlete from "./img/athlete-small.png";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";

export const MovieState = () => {
  return [
    {
      title: "The Athlete",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Best Documentary Feature Film",
          description:
            "A mixture of fiction and stock footage, The Athlete is a portrait of the marathon runner from Ethiopia, Abebe Bikila.",
        },
        {
          title: "Best Documentary",
          description:
            "Running the streets of Rome in 1960, an unknown, barefooted Ethiopian man stunned the world by winning Olympic gold in the marathon. Overnight, Abebe Bikila became a sports legend.",
        },
        {
          title: "Best Drama Documentary ",
          description:
            " A hero in his own country and to the continent, Bikila was the first African to win a gold medal, and four years later in Tokyo would become the first person in history to win consecutive Olympic gold medals in the marathon.",
        },
      ],
    },
    {
      title: "Good Times",
      mainImg: goodtimes,
      url: "/work/good-times",
      secondaryImg: goodtimes2,
      awards: [
        {
          title: "Truly a masterpiece",
          description: `“By exposing the falsehood of one's presumption of power, the Safdies awaken viewers to the inescapable consequences of their actions and weaknesses, along with the vulnerability of their own fate.”`,
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Good Time is a frantic ride, but at the core of the film is the brothers' relationship. ”",
        },
        {
          title: "An emotion carousel",
          description:
            "“Pattinson exudes pure energy, as though he's leaped into the role so completely that Connie has taken over.”",
        },
      ],
    },
    {
      title: "The Racer",
      mainImg: theracer,
      url: "/work/the-racer",
      secondaryImg: theracer2,
      awards: [
        {
          title: "Outstanding Actor in a Motion Picture",
          description:
            "“This is a sad film about the limits of the body and the rationalizations we can make when we sacrifice our integrity.”",
        },
        {
          title: "Performance by an Actor in a Leading Role",
          description:
            "“A morality tale/drama combo with intelligence and style and a muscular performance from Louis Talpe, it suffers from reflecting the distant central character's reluctance to engage.”",
        },
        {
          title: "Achievement in Visual Effects",
          description:
            "“It's a compelling story and one that left me intrigued.”",
        },
      ],
    },
  ];
};
