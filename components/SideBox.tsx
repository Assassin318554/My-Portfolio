export default function SideBox({ title, items }: { title: string; items: string[] }) {
  return (
    <aside className="side-box" aria-label={title}>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </aside>
  );
}
