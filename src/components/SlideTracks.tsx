import React from "react";

interface Values {
  id: number;
  card_type: string;
  account: string;
  amount: number;
  store_name: string;
  created_at: string;
}
interface Props {
  t: Values;
}

const SlideTracks: React.FC<Props> = ({ t }) => {
  return (
    <div className="SlideTracks">
      <p>{t.card_type}</p>
      <p>{t.account}</p>
      <p>{t.amount}</p>
      <p>{t.store_name}</p>
      <span>{t.created_at}</span>
    </div>
  );
};

export default SlideTracks;
