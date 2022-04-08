import { FormEvent, useState, useEffect } from "react";
import axios from "axios";
import { FormState, Entries } from "../types";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Guestbook = () => {
  const [formState, setFormState] = useState<FormState>(initialState);

  function resetForm() {
    setFormState(initialState);
  }

  const [entries, setEntries] = useState<Entries[]>([]);

  function getEntries() {
    return axios
      .get(`http://localhost:3001/GBentries`)
      .then((res) => setEntries(res.data));
  }

  useEffect(() => {
    getEntries();
  }, []);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setFormState({ ...formState, name: formState.name.toLowerCase() });

    await axios.post("http://localhost:3001/GBentries", formState);
    await getEntries();
    resetForm();
  }

  return (
    <div className="flex flex-col space-y-6 min-h-screen">
      <h1 className="flex text-6xl text-white self-end mt-16">GUESTBOOK</h1>
      <div className="flex flex-row">
        <div className="flex items-center justify-center w-1/2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 w-64"
          >
            <input
              className="text-darkaltrose"
              type="text"
              value={formState.name}
              onChange={(event) =>
                setFormState({ ...formState, name: event.target.value })
              }
              placeholder="Your Name"
            />
            <input
              className="text-darkaltrose"
              type="email"
              value={formState.email}
              placeholder="Your Email"
              onChange={(event) =>
                setFormState({ ...formState, email: event.target.value })
              }
            />
            <textarea
              className="text-darkaltrose"
              value={formState.message}
              placeholder="Your Message"
              rows={8}
              onChange={(event) =>
                setFormState({ ...formState, message: event.target.value })
              }
            ></textarea>
            <button
              type="submit"
              className="bg-lightaltrose text:text-altrose hover:bg-paleblue hover:text-darkaltrose py-4 rounded-md"
            >
              SUBMIT
            </button>
          </form>
        </div>
        <div className="flex flex-col w-1/2 space-y-4">
          {entries.map((entries) => (
            <GBEntries key={entries.id} {...entries} />
          ))}
        </div>
      </div>
    </div>
  );
};

type Props = {
  id: number;
  name: string;
  message: string;
};

const GBEntries = ({ id, name, message }: Props) => {
  return (
    <div
      key={id}
      className="flex flex-row space-x-4 bg-paleblue text-darkaltrose"
    >
      <h1 className="text-2xl text-lightaltrose">{name}</h1>
      <p className="text-lg bg-red-200 text-slate-800">{message}</p>
    </div>
  );
};

export default Guestbook;
