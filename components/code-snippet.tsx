// REUSABLE COMPONENT EXAMPLE
type CodeSnippetProps = {
  text: string;
  size?: string;
};

const CodeSnippet = ({ text, size }: CodeSnippetProps) => {
  return (
    <>
      <span
        className={`p-1 px-2 bg-zinc-300 rounded font-courier text-slate-700 text-${size} leading-6 align-middle`}
      >
        {text}
      </span>
    </>
  );
};

export default CodeSnippet;
