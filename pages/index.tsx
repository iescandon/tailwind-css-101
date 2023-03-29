import Head from "next/head";
import Card from "@/components/card";
import Table from "@/components/table";
import CodeSnippet from "@/components/code-snippet";
import Tip from "@/components/tip";

const Home = () => {
  return (
    <>
      <Head>
        <title>Tailwind CSS 101</title>
        <meta name="description" content="Website to summarize Tailwind CSS" />
        <meta
          name="keywords"
          content="tailwind, css, tailwindcss, frameworks, styling, style, html, nextjs, vercel"
        />
      </Head>
      {/* nav */}
      <nav className="bg-[#121b2d] w-full h-[150px] flex flex-row justify-center items-center">
        <img className="h-20" src="https://i.imgur.com/W51r2v0.png" />
      </nav>
      <div className="bg-[#f9f9f9] bg-[url('https://tailwindcss.com/_next/static/media/docs@tinypng.d9e4dcdc.png')] bg-contain bg-no-repeat py-16 px-28">
        {/* hero image */}
        <section className="w-full flex flex-col justify-center items-center text-center">
          <h1 className="font-bold text-[60px] leading-[3.5rem] pt-8">
            Rapidly style modern websites<br></br>without ever leaving your HTML
          </h1>
          <img src="https://i.imgur.com/TnOumqJ.png" className="h-[325px]" />
        </section>
        <div className="space-y-28 py-16">
          {/* what is tailwind */}
          <section className="w-full flex flex-col justify-center">
            <h2>What is Tailwind CSS?</h2>
            <div className="text-darkGray space-y-4 w-3/4">
              <p>
                Tailwind CSS is a utility-first CSS framework that provides a
                collection of pre-designed CSS classes to create user interfaces
                quickly. It&apos;s designed to be highly customizable, and
                provides a set of building blocks that can be combined to create
                complex layouts and designs with minimal custom CSS. All without
                any annoying opinionated styles you have to fight to override.
              </p>
              <p>
                Tailwind CSS works by providing a set of utility classes that
                correspond to specific CSS properties, such as text color,
                padding, margin, and more. These classes can be applied directly
                to HTML elements to quickly apply the desired styles. For
                example, the class <CodeSnippet text="bg-blue-500" /> can be
                used to set the background color of an element to a specific
                shade of blue.
              </p>
              <p>
                Similar to regular CSS, there are no ready-made components
                provided for you. Simply, add the utility classes in your HTML,
                and watch how Tailwind automatically attaches the styles for
                you! You can think of it as shorthand for your CSS.
              </p>
            </div>
          </section>
          {/* tailwind advantages */}
          <section className="h-[325px] w-full flex flex-row justify-around items-center">
            <Card />
          </section>
          {/* how to use tailwind */}
          <section>
            <h2>How to use Tailwind CSS?</h2>
            <ol className="text-darkGray space-y-4">
              <li className="flex flex-row items-center">
                <div className="w-3/4">
                  <p className="font-bold">1. Install Tailwind CSS</p>
                  You can install Tailwind using the Tailwind CLI tool or by
                  importing the CDN directly in your code. For CodePen, we will
                  be using the CDN. Click on the cog button on the top right of
                  the JS pane and add{" "}
                  <CodeSnippet text="https://cdn.tailwindcss.com" /> under
                  External Scripts. If installing elsewhere, read{" "}
                  <a
                    href="https://tailwindcss.com/docs/installation"
                    className="underline text-blue-400"
                  >
                    docs
                  </a>{" "}
                  for detailed instructions on how to install Tailwind CSS for
                  your specific use case/framework.
                </div>
                <div className="w-1/4 pl-8">
                  <Tip>
                    If working in Codepen, click on <strong>Settings</strong> → <strong>Behavior</strong> → and enable <strong>Format on Save</strong> for better
                    readability.
                  </Tip>
                </div>
              </li>
              <li className="flex flex-row items-center">
                <div className="w-3/4">
                  <p className="font-bold">2. Search Docs</p>
                  Use the quick search in the{" "}
                  <a
                    href="https://tailwindcss.com/"
                    className="underline text-blue-400"
                  >
                    docs
                  </a>{" "}
                  to find the name of the class that corresponds with the CSS
                  you would like to add. (ex. I want to bold my text so I search
                  for &apos;bold&apos;. I click on Font Weight and see that the
                  Tailwind class I need to add is{" "}
                  <CodeSnippet text="font-bold" />
                  .)
                </div>
                <div className="w-1/4 pl-8">
                  <Tip>
                    Use{" "}
                    <a
                      href="https://flowbite.com/tools/tailwind-cheat-sheet/"
                      className="underline text-blue-400"
                    >
                      Tailwind CSS Cheatsheets
                    </a>{" "}
                    for easier to read documentation.
                  </Tip>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="w-3/4">
                  <p className="font-bold">3. Use classes</p>
                  Add classes to your code and watch your website come to life!
                </div>
                <div className="w-1/4 pl-8">
                  <Tip>
                    Use{" "}
                    <a
                      href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
                      className="underline text-blue-400"
                    >
                      Tailwind CSS VS Code Intellisense extension
                    </a>{" "}
                    to enhance your Tailwind development experience by providing
                    advanced features such as autocomplete, syntax highlighting,
                    and linting.
                  </Tip>
                </div>
              </li>
            </ol>
          </section>
          {/* tailwind docs photo */}
          <section className="">
            <img
              src="https://i.imgur.com/gqOfZqx.png"
              className="rounded-lg drop-shadow-2xl w-full"
            />
          </section>
          {/* pros and cons to tailwind */}
          <section>
            <h2>Pros and Cons of Tailwind CSS</h2>
            <Table />
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
