import { Counter } from "./components/Counter";
import { LightSwitch } from "./components/LightSwitch";
import { SecretMessage } from "./components/SecretMessage";
export default function Home() {
  return (
    <>
      <div className="m-auto flex gap-7">
        <Counter />
        <LightSwitch />
        <SecretMessage />
      </div>
    </>
  );
}
