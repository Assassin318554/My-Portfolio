export default function PageHead({ no, title, tag, lede }: { no: string; title: string; tag: string; lede?: string }) {
  return (
    <header className="max-w-[820px]">
      <p className="page-no">{no}</p>
      <h1 className="page-title">{title}</h1>
      <p className="page-tag">{tag}</p>
      {lede ? <p className="page-lede">{lede}</p> : null}
    </header>
  );
}
