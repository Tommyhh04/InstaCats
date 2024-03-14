import CatCard from "../CardProp/CardProp";
import "./ProfileCardStyling.css";
import Cat1 from "./Images/Cat1.jpg";
import Cat2 from "./Images/Cat2.jpg";
import Cat3 from "./Images/Cat3.jpg";
import Cat4 from "./Images/Cat4.jpg";
import Cat5 from "./Images/Cat5.jpg";

export default function ProfileCard() {
  return (
    <div className="container--main">
      <CatCard img={Cat1} name="Luna" description="Me cat" />
      <CatCard
        img={Cat2}
        name="Mr.Meow"
        description="The Siamese beauty, communicates with melodic meows and loves sunbathing on the balcony, her azure eyes reflecting the sky."
      />
      <CatCard
        img={Cat3}
        name="Meowth"
        description="The dapper tuxedo cat, sports a distinguished white mustache and enjoys perching on high shelves, observing the world below."
      />
      <CatCard
        img={Cat4}
        name="Olly"
        description="Olly is a playful and mischievous feline who loves to chase after shadows and pounce on unsuspecting shoelaces."
      />
      <CatCard
        img={Cat2}
        name="Pippa"
        description="Pippa, with her elegant demeanor and striking green eyes, is the queen of the windowsill, surveying her kingdom with regal grace."
      />
      <CatCard
        img={Cat1}
        name="Sebastian"
        description="With his luxurious fur and dignified air, Sebastian enjoys curling up by the fireplace, contemplating the mysteries of the universe."
      />
      <CatCard
        img={Cat2}
        name="Luna"
        description=" Luna, the enchanting black cat, dances under moonlit beams, casting spells of curiosity and magic wherever she goes."
      />
      <CatCard
        img={Cat5}
        name="Mochi"
        description="Mochi, the fluffy tabby, is a gentle soul who adores cuddles and dreams of sunny afternoons in cozy nooks."
      />
      <CatCard
        img={Cat2}
        name="Catalina"
        description="Catalina’s sleek coat shimmers like midnight silk, and her playful antics keep the household entertained."
      />
      <CatCard
        img={Cat4}
        name="Jasper"
        description=" Jasper, the wise old tomcat, shares ancient tales with the neighborhood birds while basking in the sun"
      />
      <CatCard
        img={Cat2}
        name="Sage"
        description=" Sage, the contemplative calico, gazes out the window, pondering the secrets hidden in the rustling leaves."
      />
      <CatCard
        img={Cat5}
        name="Valentine"
        description=" Valentine’s heart-shaped nose and affectionate purrs make every day feel like a celebration of love."
      />
    </div>
  );
}
