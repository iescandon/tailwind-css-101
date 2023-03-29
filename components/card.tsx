// SINGLE USE COMPONENT EXAMPLE
interface CardObject {
  imageURL: string;
  caption: string;
  link: string;
}

const Card = () => {
  const cardArr: CardObject[] = [
    {
      imageURL: "https://i.imgur.com/clUEuRp.png",
      caption: "Responsive Design",
      link: "https://tailwindcss.com/docs/responsive-design",
    },
    {
      imageURL: "https://i.imgur.com/HdlHh5K.png",
      caption: "Customizable",
      link: "https://tailwindcss.com/docs/adding-custom-styles",
    },
    {
      imageURL: "https://i.imgur.com/HkdUOh0.png",
      caption: "Compatible",
      link: "https://tailwindcss.com/docs/installation/framework-guides",
    },
  ];
  return (
    <>
      {cardArr?.map((card, i) => {
        return (
          <a href={card.link} className="h-full w-1/4 relative" key={`a-${i}`}>
            <img
              src={card.imageURL}
              className="w-full h-full object-cover rounded-md drop-shadow-2xl"
              key={`img-${i}`}
            />
            <div
              className="w-full h-full absolute inset-0 bg-black bg-opacity-40 rounded-md drop-shadow-2xl flex flex-row justify-center items-center text-center hover:animate-pulse"
              key={`div-${i}`}
            >
              <p className="text-white font-bold text-3xl" key={`p-${i}`}>
                {card.caption}
              </p>
            </div>
          </a>
        );
      })}
    </>
  );
};

export default Card;
