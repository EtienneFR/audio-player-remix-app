import type { MetaFunction } from "remix";
import { useLoaderData, Link } from "remix";

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Audio Player thanks XState!",
    description: "Welcome to remix!"
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {

  return (
    <div className="remix__page">
      <main>
        <h2>Audio Player with Xstate!</h2>
        <p>
          This is an audio player with some basics features.
          It uses {" "}
          <a href="https://xstate.js.org/" target="_blank">Xstate</a> to manage the state of the
          player.
        </p>
        <p>
          You can find the source code for this project on the{" "}
          <a href="https://github.com/EtienneFR/audio-player-remix-app" target="_blank">Github project</a>
        </p>
      </main>
    </div>
  );
}
