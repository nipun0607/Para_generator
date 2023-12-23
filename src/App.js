import { useState } from "react";
import "./App.css";
import Header from "./Component/Header";

const para = [
  "1)Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.",
  "2)Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko.",
  "3).Humanity is a mosaic of diverse cultures, each contributing to the rich tapestry of global heritage. Embracing cultural diversity fosters understanding, tolerance, and unity. Celebrating our differences enhances the beauty of the human experience, promoting a world where people from all walks of life can coexist in harmony.",
  "4)Education is the cornerstone of personal and societal development. It empowers individuals, fosters critical thinking, and opens doors to opportunities. Investing in education, from early childhood to lifelong learning, is a powerful tool for building a knowledgeable and resilient society.",
  "5)Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds.",
  "6)This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them. I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.",
  "7)Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.",
  "8)Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.",
];
let i = 1;

function App() {
  const [paragraph, setParagraph] = useState(0);
  const paraCounter = (args) => {
    if (args > 10) {
      alert(
        " Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀"
      );
    } else {
      setParagraph(args);
    }
  };
  return (
    <div className="App">
      <Header counter={paraCounter} />
      {para.map((e, idx) => {
        if (paragraph > idx) {
          return (
            <p className="para_container" key={i++}>
              {e}
            </p>
          );
        }
      })}
    </div>
  );
}

export default App;
