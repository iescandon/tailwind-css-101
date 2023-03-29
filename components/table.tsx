const Table = () => {
  const prosArr: string[] = [
    "✅ Not opinionated on how you should style your project",
    "✅ Faster styling process",
    "✅ Easy to build responsive UIs",
    "✅ Ability to add custom styles",
    "✅ Compatible with many popular FE frameworks",
    "✅ Optimization using PurgeCSS removes unused styles",
    "✅ Proven to be a stable framework",
    "✅ Makes the changes only in the file desired",
    "✅ No more silly names for CSS classes and ids",
    "✅ Minimum lines of code in CSS file",
  ];
  const consArr: string[] = [
    "⛔ Styling and HTML are mixed",
    "⛔ Large HTML files",
    "⛔ Lack of ready-made components",
    "⛔ Difficult if you are not familiar with CSS",
    "⛔ Could prevent you from learning CSS properly",
    "⛔ Small learning curve",
    "⛔ Can not do everything",
    "⛔ A build step is required",
    "",
    "",
  ];

  return (
    <>
      <table className="w-3/4 h-full bg-white">
        <colgroup>
          <col className="bg-green-100"></col>
          <col className="bg-red-100"></col>
        </colgroup>
        <tbody>
          <tr>
            <th className="w-1/2 p-4 bg-green-500 text-white text-xl">PROS</th>
            <th className="w-1/2 p-4 bg-red-500 text-white text-xl">CONS</th>
          </tr>
          <>
            {prosArr?.map((item, i) => {
              return (
                <tr>
                  <td className="p-4">{item}</td>
                  <td className="p-4">{consArr[i]}</td>
                </tr>
              );
            })}
          </>
        </tbody>
      </table>
    </>
  );
};

export default Table;
