import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list-component',
  templateUrl: './content-list.component.html',
  styleUrls: ['../content-list-component/content-list.component.scss']
})

export class ContentListComponent implements OnInit {

  contents: Content[] = [];

  types = {action: "actionMovie", adventure: "adventureMovie"};

  constructor() {

  }

  @Input('query')

  query: String;

  onSearch(query: String) {

    /*Search array with find*/
    let found = this.contents.find(value => {
      return value.title.toLowerCase() === query.toString().toLowerCase();
    });
    /*Print that it is found*/
    if (found) {
      alert(`FOUND ${found.title}! :D`)
    } else {
      /*Print that it is not found*/
      alert(`${query} not found... :(`)
    }
  }

  ngOnInit(): void {

    this.contents.push({
      author: "Ian Fleming",
      body: "James Bond, an undercover agent, sets out to prevent a media baron, Elliot Carver, from waging a war between China and the United Kingdom after he is summoned by the Secret Intelligence Service." +
        "James Bond enter the most dangerous mission for an MI-6 Agent",
      id: 0x07,
      // imgUrl: "https://upload.0x07wikimedia.org/wikipedia/en/b/b3/Tomorrow_Never_Dies_%28UK_cinema_poster%29.jpg",
      tags: ["Action", "Adventure", "Shooting", "Spies"],
      title: "Tomorrow Never Dies",
      type: this.types.adventure
    });

    this.contents.push({
      author: "Ian Fleming",
      body: "Bond witnesses the theft by criminal organisation Janus of a prototype Eurocopter Tiger helicopter that can withstand an electromagnetic pulse. Janus uses the helicopter to steal the control disk for the dual GoldenEye satellite weapons, using the GoldenEye to destroy the complex with an electromagnetic pulse; there are two survivors of the attack, the programmers, Natalya Simonova and Boris Grishenko.\n" +
        "\n" +
        "Bond investigates the attack and travels to Russia where he locates Simonova and learns that Trevelyan, who had faked his own death, was the head of Janus. Simonova tracks computer traffic to Cuba and she and Bond travel there and locate Trevelyan, who reveals his plan to steal money from the Bank of England before erasing all of its financial records with the GoldenEye, concealing the theft and destroying Britain's economy. Bond and Simonova destroy the satellite facility, killing Trevelyan and Grishenko in the process. ",
      id: 0x08,
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/2/24/GoldenEye_-_UK_cinema_poster.jpg",
      tags: ["Action", "Adventure", "Shooting", "Spies"],
      title: "GoldenEye",
      type: this.types.adventure,
    });

    this.contents.push({
      author: "Ian Fleming",
      body: "SPECTRE's expert planner Kronsteen, known as \"Number Five\", upon order of the organisation's Number One, devises a plot to steal a Lektor cryptographic device from the Soviets and sell it back to them while exacting revenge on Bond for killing their agent Dr. No; ex-SMERSH operative Rosa Klebb, SPECTRE's Number Three, is in charge of the mission. She recruits Donald \"Red\" Grant as an assassin and Tatiana Romanova, a cipher clerk at the Soviet consulate in Istanbul, as the unwitting bait.\n" +
        "\n" +
        "Bond travels to Turkey and meets Ali Kerim Bey, the MI6 officer in Turkey. Between them, they obtain the Lektor, and the three escape with the device on the Orient Express. However, they are followed by Grant, who kills Kerim Bey and a Soviet security officer. Grant pretends to be another British agent and meets Bond. Over dinner Grant drugs Romanova, then overcomes Bond. Bond tricks Grant into opening Bond's attaché case in the manner that detonates its tear gas booby trap, allowing Bond to attack and kill him. Bond and Romanova escape with the Lektor to Venice. Rosa Klebb, disguised as a hotel maid, attempts to steal the Lektor and kill Bond, but ends up being shot by Romanova. ",
      id: 0x09,
      imgUrl: "https://www.filmink.com.au/wp-content/uploads/2020/04/James_Bond_007-_From_Russia_with_Love-793x446.jpg",
      tags: ["Action", "Adventure", "Shooting", "Spies"],
      title: "From Russia with Love (1963)",
      type: this.types.action,
    });
  }

}
