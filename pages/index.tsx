import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  console.log("home page");
  return (
    <>
      {/* nav section */}
      <nav className="bg-[#121b2d] w-full h-[150px] flex flex-row justify-center items-center">
        <img className="h-20" src="https://i.imgur.com/W51r2v0.png" />
      </nav>
      {/* content */}
      <div className="bg-[#f9f9f9] bg-[url('https://tailwindcss.com/_next/static/media/docs@tinypng.d9e4dcdc.png')] bg-contain bg-no-repeat py-16 px-28">
        {/* hero image section */}
        <section className="w-full flex flex-col justify-center items-center text-center">
          <h1 className="font-bold text-[60px] leading-[3.5rem] pt-8">
            Rapidly style modern websites without ever leaving your HTML
          </h1>
          <img src="https://i.imgur.com/TnOumqJ.png" className="h-[325px]" />
        </section>
        <section className="space-y-28 py-16">
          {/* what is tailwind */}
          <section className="w-full flex flex-col justify-center">
            <h1 className="font-bold text-3xl mb-2">What is Tailwind CSS?</h1>
            <div className="text-[#263238] space-y-4 w-3/4">
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
                example, the className &apos;bg-blue-500&apos; can be used to
                set the background color of an element to a specific shade of
                blue.
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
            <a
              href="https://tailwindcss.com/docs/responsive-design"
              className="h-full w-1/4 relative"
            >
              <img
                src="https://i.imgur.com/clUEuRp.png"
                className="w-full h-full object-cover rounded-md drop-shadow-2xl"
              />
              <div className="w-full h-full absolute inset-0 bg-black bg-opacity-40 rounded-md drop-shadow-2xl flex flex-row justify-center items-center text-center">
                <p className="text-white font-bold text-3xl">
                  Responsive Design
                </p>
              </div>
            </a>
            <a
              href="https://tailwindcss.com/docs/adding-custom-styles"
              className="h-full w-1/4 relative"
            >
              <img
                src="https://i.imgur.com/HdlHh5K.png"
                className="w-full h-full object-cover rounded-md drop-shadow-2xl"
              />
              <div className="w-full h-full absolute inset-0 bg-black bg-opacity-40 rounded-md drop-shadow-2xl flex flex-row justify-center items-center text-center">
                <p className="text-white font-bold text-3xl">Customizable</p>
              </div>
            </a>
            <a
              href="https://tailwindcss.com/docs/installation/framework-guides"
              className="h-full w-1/4 relative"
            >
              <img
                src="https://i.imgur.com/HkdUOh0.png"
                className="w-full h-full object-cover rounded-md drop-shadow-2xl"
              />
              <div className="w-full h-full absolute inset-0 bg-black bg-opacity-40 rounded-md drop-shadow-2xl flex flex-row justify-center items-center text-center">
                <p className="text-white font-bold text-3xl">Compatible</p>
              </div>
            </a>
          </section>
          <section>
            <h1 className="font-bold text-3xl mb-2">
              How to use Tailwind CSS?
            </h1>
            <ol className="text-[#263238] w-3/4 space-y-4">
              <li>
                <span className="font-bold">1. Install Tailwind CSS</span>You
                can install Tailwind using the Tailwind CLI tool or by importing
                the CDN directly in your code. For CodePen, we will be using the
                CDN. Click on the cog button on the top right of the JS pane and
                add{" "}
                <span className="font-bold underline">
                  https://cdn.tailwindcss.com
                </span>{" "}
                under External Scripts.
                <span className="italic">
                  {" "}
                  PRO-TIP: Click on Settings - Behavior - and toggle to enable
                  Format on Save for better readability.
                </span>{" "}
                If installing elsewhere, read{" "}
                <a
                  href="https://tailwindcss.com/docs/installation"
                  className="underline text-blue-400"
                >
                  docs
                </a>{" "}
                for detailed instructions on how to install Tailwind CSS for
                your specific use case/framework.
              </li>
              <li>
                <span className="font-bold">2. Search Docs</span>Use the quick
                search in the{" "}
                <a
                  href="https://tailwindcss.com/"
                  className="underline text-blue-400"
                >
                  docs
                </a>{" "}
                or a{" "}
                <a
                  href="https://flowbite.com/tools/tailwind-cheat-sheet/"
                  className="underline text-blue-400"
                >
                  Tailwind cheatsheet
                </a>{" "}
                to find the name of the className that corresponds with the CSS
                you would like to add. (ex. I want to bold my text so I search
                for &apos;bold&apos;. I click on Font Weight see that the
                Tailwind className I need to add is &apos;font-bold&apos;.)
              </li>
              <li>
                <span className="font-bold">3. Use classes</span>Add classes to
                your code and watch your website come to life!
                <span className="italic">
                  PRO-TIP: Using VS Code as an IDE? Install Tailwind CSS
                  Intellisense extension{" "}
                  <a
                    href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
                    className="underline text-blue-400"
                  >
                    here
                  </a>{" "}
                  to enhance your Tailwind development experience by providing
                  advanced features such as autocomplete, syntax highlighting,
                  and linting.
                </span>
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
          <section className="">
            <h1 className="font-bold text-3xl mb-2">
              Pros and Cons of Tailwind CSS
            </h1>
            <table className="w-3/4 h-full bg-white">
              <tbody>
                {/* <colgroup>
                  <col className="bg-green-100"></col>
                  <col className="bg-red-100"></col>
                </colgroup> */}
                <tr>
                  <th className="w-1/2 p-4 bg-green-500 text-white text-xl">
                    PROS
                  </th>
                  <th className="w-1/2 p-4 bg-red-500 text-white text-xl">
                    CONS
                  </th>
                </tr>
                <tr>
                  <td className="p-4">
                    ✅ Not opinionated on how you should style your project
                  </td>
                  <td className="p-4">⛔ Styling and HTML are mixed</td>
                </tr>
                <tr>
                  <td className="p-4">✅ Faster styling process</td>
                  <td className="p-4">⛔ Large HTML files</td>
                </tr>
                <tr>
                  <td className="p-4">✅ Easy to build responsive UIs</td>
                  <td className="p-4">⛔ Lack of ready-made components</td>
                </tr>
                <tr>
                  <td className="p-4">✅ Ability to add custom styles</td>
                  <td className="p-4">
                    ⛔ Difficult if you are not familiar with CSS
                  </td>
                </tr>
                <tr>
                  <td className="p-4">
                    ✅ Compatible with many popular FE frameworks
                  </td>
                  <td className="p-4">
                    ⛔ Could prevent you from learning CSS properly
                  </td>
                </tr>
                <tr>
                  <td className="p-4">
                    ✅ Optimization using PurgeCSS removes unused styles
                  </td>
                  <td className="p-4">⛔ Small learning curve</td>
                </tr>
                <tr>
                  <td className="p-4">✅ Proven to be a stable framework</td>
                  <td className="p-4">⛔ Can&apos;t do everything</td>
                </tr>
                <tr>
                  <td className="p-4">
                    ✅ Makes the changes only in the file desired
                  </td>
                  <td className="p-4">⛔ A build step is required</td>
                </tr>
                <tr>
                  <td className="p-4">
                    ✅ No more silly names for CSS classes and ids
                  </td>
                  <td className="p-4"></td>
                </tr>
                <tr>
                  <td className="p-4">✅ Minimum lines of code in CSS file</td>
                  <td className="p-4"></td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>
      </div>
    </>
  );
};

export default Home;
