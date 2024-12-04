import React from "react";

export default function Hero() {
  return (
    <div className="flex min-h-[60vh] px-5  items-center justify-between">
      <div className="flex flex-col gap-9  max-w-[50%] ">
        <h1 className="font-bold sm:text-6xl text-1xl">
          Website aanvragen zonder gedoe
        </h1>
        <p>
          Begin nu met onze geavanceerde cv-maker voor het maken van een
          professioneel cv en ontdek ons carrière platform gratis. Activeer je
          abonnement voor onbeperkte toegang tot alle functionaliteiten.
          Tarieven vind je op de prijzen pagina. Boost vandaag nog je carrière!
        </p>
        <button className="h-[50px] bg-[#6dc7be] w-[130px] rounded-[30px] font-semibold">
          Maak je site
        </button>
      </div>
      <div className="hidden sm:block">
        {/* <img src={img} className="clip max-h-[450px]" /> */}
      </div>
    </div>
  );
}
