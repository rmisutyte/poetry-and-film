import PoemTile from "../PoemTile/PoemTile";
import styles from "./PoemList.module.css";

const poems = [
  {
    name: "Just Another Evening (In Black and You)",
    body: "Your voice floats\nLike a sleepy narcissus\nOn the evening's water\nAnd I am a shore\nThinking of drowning",
    author: "sinan antoon",
  },
  {
    name: "Antilamentation",
    author: "Dorianne Laux",
    body: "Regret nothing. Not the cruel novels you read\nto the end just to find out who killed the cook, not\nthe insipid movies that made you cry in the dark,\nin spite of your intelligence, your sophistication, not\nthe lover you left quivering in a hotel parking lot,\nthe one you beat to the punch line, the door or the one\nwho left you in your red dress and shoes, the ones\nthat crimped your toes, don't regret those.\nNot the nights you called god names and cursed\nyour mother, sunk like a dog in the living room couch,\nchewing your nails and crushed by loneliness.\nYou were meant to inhale those smoky nights\nover a bottle of flat beer, to sweep stuck onion rings\nacross the dirty restaurant floor, to wear the frayed\ncoat with its loose buttons, its pockets full of struck matches.\nYou've walked those streets a thousand times and still\nyou end up here. Regret none of it, not one\nof the wasted days you wanted to know nothing,\nwhen the lights from the carnival rides\nwere the only stars you believed in, loving them\nfor their uselessness, not wanting to be saved.\nYou've traveled this far on the back of every mistake,\nridden in dark-eyed and morose but calm as a house\nafter the TV set has been pitched out the window.\nHarmless as a broken ax. Emptied of expectation.\nRelax. Don't bother remembering any of it. Let's stop here,\nunder the lit sign on the corner, and watch all the people walk by. ",
  },
];

export default function PoemList() {
  return (
    <>
      <div className={styles.poemList}>
        {poems.map((poem, index) => (
          <PoemTile
            name={poem.name}
            body={poem.body}
            author={poem.author}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
