import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

interface InputValues {
  card_type: string;
  account: string;
  amount: number;
  store_name: string;
}

interface Props {
  getTrackData: () => void;
}
const AddForm: React.FC<Props> = ({ getTrackData }) => {
  const { register, handleSubmit, reset } = useForm<InputValues>();

  const onSubmit = (values: InputValues) => {
    let newValues = { ...values, amount: Number(values.amount) };
    axios
      .post(`${process.env.REACT_APP_API_URL}/tracker/add`, newValues)
      .then((res) => {
        console.log(res.data);
        getTrackData();
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="AddForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="card_type">
          <select
            name="card_type"
            id="card_type"
            ref={register({ required: true })}
          >
            <option value="">card type</option>
            <option value="discover it">discover it</option>
            <option value="amex cash rewards">amex cash rewards 6%</option>
            <option value="amex cash back">amex cash back</option>
          </select>
        </label>
        <label htmlFor="account">
          <select
            name="account"
            id="account"
            ref={register({ required: true })}
          >
            <option value="">select account</option>
            <option value="hilda">hilda</option>
            <option value="anthony">anthony</option>
          </select>
        </label>
        <label htmlFor="amount">
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Amount"
            ref={register({ required: true })}
          />
        </label>
        <label htmlFor="store">
          <input
            type="text"
            id="store"
            name="store_name"
            placeholder="Store Name"
            ref={register({ required: true })}
          />
        </label>
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default AddForm;
