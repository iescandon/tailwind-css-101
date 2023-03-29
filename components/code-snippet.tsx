// REUSABLE COMPONENT EXAMPLE
type CodeSnippetProps = {
  text: string;
};

const CodeSnippet = ({ text }: CodeSnippetProps) => {
  return (
    <>
      <span className="p-1 px-2 bg-zinc-300 rounded font-courier text-slate-700 text-sm leading-6 align-middle">
        {text}
      </span>
    </>
  );
};

export default CodeSnippet;
