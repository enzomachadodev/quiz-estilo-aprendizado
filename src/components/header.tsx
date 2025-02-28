import Image from "next/image";

export const Header = () => {
  return (
    <header className="border-b border-yellow-500 shadow-sm">
      <div className="wrapper flex items-center justify-center py-10">
        <Image
          alt="Logo eMentor"
          src="./logo_amarela.svg"
          width={180}
          height={56}
        />
      </div>
    </header>
  );
};
