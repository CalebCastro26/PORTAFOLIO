import { Cursor, useTypewriter } from "react-simple-typewriter";

export function ContentSider() {
  const [text] = useTypewriter({
    words: ["Guy-who-love-videogames.jsx", "<But-Loves-To-Code-More/>"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <h2 className="text-[#1f1f25] text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-[900] font-['Montserrat'] px-10">
      <span className="mr-3">{text}</span>
      <Cursor cursorColor="#379fab" />
    </h2>
  );
}
