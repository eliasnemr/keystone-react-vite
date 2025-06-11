import type { Route } from "./+types/about";

export async function clientLoader({ }: Route.ClientLoaderArgs) {
    // you can now fetch data here
    return {
      title: "This app is created with React, Vite, React-router 7, TailwindCSS, and TypeScript",
    };
  }
  
  export default function Component({ loaderData }: Route.ComponentProps) {
    return <h1>{loaderData.title}</h1>;
  }