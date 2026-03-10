import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/intro")({
  component: IntroPage,
});

function IntroPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-bold text-4xl">Hi I am Eran</h1>
    </div>
  );
}
