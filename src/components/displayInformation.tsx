import React, { useState } from "react";
import SlideTracks from "./SlideTracks";

interface Values {
  id: number;
  card_type: string;
  account: string;
  amount: number;
  store_name: string;
  created_at: string;
}
interface Props {
  data: Values[];
}

const DisplayInformation: React.FC<Props> = ({ data }) => {
  const [types, setTypes] = useState([
    "discover it",
    "amex cash rewards",
    "amex cash back",
  ]);

  const discover = data.filter((t) => t.card_type === types[0]);
  const amex_rewards = data.filter((t) => t.card_type === types[1]);
  const amex_cash = data.filter((t) => t.card_type === types[2]);

  //   for (let i = 0; i < data.length; i++) {
  //     console.log("here ", data[i]);
  //   }
  function displayInfo(cardName: Values[]) {
    return (
      cardName.length && (
        <div>
          {cardName.map((t) => (
            <SlideTracks key={t.id} t={t} />
          ))}
        </div>
      )
    );
  }

  const displayDiscover = displayInfo(discover);
  const displayAmexReward = displayInfo(amex_rewards);
  const displayCash = displayInfo(amex_cash);

  return (
    <div className="DisplayInformation">
      <div className="card-names">
        <h3>discover it</h3>
        {displayDiscover}
      </div>
      <div className="card-names">
        <h3>Amex cash rewards</h3>
        {displayAmexReward}
      </div>{" "}
      <div className="card-names">
        <h3>Amex cash</h3>
        {displayCash}
      </div>
    </div>
  );
};
export default DisplayInformation;
