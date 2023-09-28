import type { MetaFunction } from "@vercel/remix";

export const config = { runtime: 'edge' };

export const meta: MetaFunction = () => {
  return [
    { title: "My Edge" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function MyEdge() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>My Edge Page</h1>
      <ul>
        <li>
          <a href="/">
            Home
          </a>
        </li>
      </ul>
    </div>
  );
}
