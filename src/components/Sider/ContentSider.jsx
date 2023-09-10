import { Cursor, useTypewriter } from "react-simple-typewriter";

export function ContentSider() {
  const [text, count] = useTypewriter({
    words: ["Guy-who-love-videogames.jsx", "<ButLovesToCodeMore />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col">
      <p className="px-10 text-sm tracking-widest mb-5 md:text-2xl lg:text-2xl">
        Full Stack Developer
      </p>
      <h1 className="text-[#1f1f25]  text-3xl md:text-5xl lg:text-6xl font-[900] font-['Montserrat'] px-10">
        Hello, I'm <span className="text-[#379fab]">Caleb Castro</span>
      </h1>
      <h2 className="text-[#1f1f25] text-3xl md:text-5xl lg:text-6xl font-[900] font-['Montserrat'] px-10">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="#379fab" />
      </h2>
    </div>
  );
}
