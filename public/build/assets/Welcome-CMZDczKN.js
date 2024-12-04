import{j as e,a as t,r as a,Y as i}from"./app-DCgECjQO.js";function l({auth:s}){return e.jsxs("div",{className:"flex justify-between items-center h-[100px] ",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h1",{className:" text-4xl tracking-tighter font-bold",children:"SITE MAKER"}),e.jsxs("div",{className:"hidden sm:flex items-center ml-[100px] gap-11 text-[18px]",children:[e.jsx("p",{children:"About"}),e.jsx("p",{children:"Blog"}),e.jsx("p",{children:"News"}),e.jsx("p",{children:"About"})]})]}),e.jsx("div",{className:" items-center gap-5 hidden sm:flex",children:s.user?e.jsx(t,{href:route("dashboard"),className:"h-[40px] bg-slate-200 w-[90px] rounded-[30px] font-medium flex items-center justify-center",children:"Dashboard"}):e.jsxs(e.Fragment,{children:[e.jsx(t,{href:route("login"),className:"h-[40px] bg-slate-200 w-[90px] rounded-[30px] font-medium flex items-center justify-center",children:"Log in"}),e.jsx(t,{href:route("register"),className:"h-[40px] bg-[#6dc7be] w-[120px] rounded-[30px] font-medium flex items-center justify-center",children:"Site maken"})]})})]})}function c(){return e.jsxs("div",{className:"flex min-h-[60vh] px-5  items-center justify-between",children:[e.jsxs("div",{className:"flex flex-col gap-9  max-w-[50%] ",children:[e.jsx("h1",{className:"font-bold sm:text-6xl text-1xl",children:"Website aanvragen zonder gedoe"}),e.jsx("p",{children:"Begin nu met onze geavanceerde cv-maker voor het maken van een professioneel cv en ontdek ons carrière platform gratis. Activeer je abonnement voor onbeperkte toegang tot alle functionaliteiten. Tarieven vind je op de prijzen pagina. Boost vandaag nog je carrière!"}),e.jsx("button",{className:"h-[50px] bg-[#6dc7be] w-[130px] rounded-[30px] font-semibold",children:"Maak je site"})]}),e.jsx("div",{className:"hidden sm:block"})]})}function d({auth:s,laravelVersion:n,phpVersion:r}){return a.useEffect(()=>{console.log("Component.loaded")},[]),e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Welcome"}),e.jsx("div",{className:"bg-white text-black z-10 ",children:e.jsx("div",{className:"relative flex min-h-screen flex-col items-center  ",children:e.jsxs("div",{className:"relative w-full  px-6 lg:max-w-7xl",children:[e.jsx(l,{auth:s}),e.jsx(c,{}),e.jsxs("footer",{className:"py-16 text-center text-sm text-black dark:text-white/70",children:["Laravel v",n," (PHP v",r,")"]})]})})})]})}export{d as default};
