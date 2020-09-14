import React from "react";

interface Values {
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
  return (
    <div className="DisplayInformation">
      <h3>hello</h3>
    </div>
  );
};
export default DisplayInformation;
