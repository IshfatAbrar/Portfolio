import { c as create_ssr_component, b as add_attribute, d as escape, v as validate_component, e as each } from "../../chunks/ssr.js";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  return `<a${add_attribute("href", step.href, 0)} target="_blank" class="p-4 mx-10 sm:p-6 md:p-8 flex flex-col gap-4 rounded-2xl border border-solid border-stone-700 text-center cursor-pointer group hover:border-cyan-400 duration-200"><div class="bg-zinc-900 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"><i${add_attribute("class", step.icon + " text-slate-50", 0)}></i></div> <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">${escape(step.name)}</h3> ${slots.default ? slots.default({}) : ``} <div class="flex-1 flex justify-betweeen gap-4 items-end" data-svelte-h="svelte-t77un4"><div class="ml-auto cursor-pointer hover:text-zinc-500 duration-200 relative "><p class="z-4">Go to →</p></div></div></a>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      name: "LOTR Info",
      icon: "fa-solid fa-ring"
    },
    {
      name: "Simple Calculator",
      icon: "fa-solid fa-calculator"
    },
    {
      name: "Awesome Portfolio",
      icon: "fa-regular fa-address-book"
    }
  ];
  let benefits = [
    {
      metric: "10x",
      name: "a self taught developer",
      description: "I taught myself to code using free online resources and absolutely fell in love with the creativity and problem solving that is involved in developing and engineering innovative new online experiences. Starting of with JavaScript, HTML & CSS and evolving my knowledge base to include JavaScript frameworks, backend programming, design, cloud services and much much more."
    },
    {
      name: "a product design & UX finatic",
      description: "Carefully crafting and designing amazing user experiences allows me to express and experiment with every morsel of creativity I have. I love the challenge of learning new design concepts and enabling users with amazing online experiences."
    },
    {
      name: "an excellent communicator",
      description: "Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team."
    }
  ];
  return `<main class="flex flex-col flex-1 p-4"><section id="introPage" class="grid lg:grid-cols-2 gap-10 py-8 md:px-14" data-svelte-h="svelte-1wqpvu4"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"><h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">Hi! I&#39;m <span class="poppins text-cyan-400">Ishfat</span> Abrar
                <br>Full Stack
                <span class="poppins text-cyan-400">Developer</span></h2> <p class="text-base sm:text-xl md:text-2xl">My <span class="text-cyan-400">favorite tech</span> includes JavaScript
                (NEXT.JS or SvelteKit), TailwindCSS, Node.js + Express.js &amp; PostgreSQL
                or Firebase/Firestore!</p> <a href="mailto:ishfat0001abrar@gmail.com" target="_blank" class="blueShadow mx-auto lg:mr-auto lg:ml-0 relative overflow-hidden px-7 py-3 group rounded-full bg-white text-zinc-950"><div class="absolute top-0 right-full w-full h-full bg-cyan-400 opacity-20 group-hover:translate-x-full z-0 duration-300"></div> <h4 class="relative text-xl z-9">Get in touch →</h4></a></div> <div class="z-[0]"><img style="filter: drop-shadow(5 0 5px #0d9488)" class="shadow-4xl grayscale-[85%] hover:grayscale-[45%] rounded-[20px] duration-700" src="./assets/Ishfat.jpg" alt="Ishfat Abrar Islam working on his laptop"></div></section> <section id="projects" class="py-16 flex flex-col gap-24"><div class="flex flex-col gap-2 text-center" data-svelte-h="svelte-oanbe2"><h6 class="text-lg sm:text-xl md:text-2xl">A few of my creative endeavours</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl ">Curius to <span class="poppins text-cyan-400">see</span> my works?</h3></div> <div class="grid drid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">${validate_component(Step, "Step").$$render($$result, { step: steps[0] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-56obhx">Lord of The Rings Info Website is a merchanising store created with <strong class="text-cyan-400">Next.js, Commerce.js, Stripe &amp; Node.js + Express.js!</strong> Commerce.js is a product CMS and Stripe is used for all transaction
                    handling.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[1] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-56obhx">Lord of The Rings Info Website is a merchanising store created with <strong class="text-cyan-400">Next.js, Commerce.js, Stripe &amp; Node.js + Express.js!</strong> Commerce.js is a product CMS and Stripe is used for all transaction
                    handling.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[2] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-56obhx">Lord of The Rings Info Website is a merchanising store created with <strong class="text-cyan-400">Next.js, Commerce.js, Stripe &amp; Node.js + Express.js!</strong> Commerce.js is a product CMS and Stripe is used for all transaction
                    handling.</p>`;
    }
  })}</div></section> <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-12 md:gap-14"><div class="flex flex-col gap-2 text-center relative py-8 " data-svelte-h="svelte-1d67qt0"><h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-cyan-400">about</span> me.</h3></div> <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl" data-svelte-h="svelte-1q8im4p">I am . . .</p> <div class="flex flex-col gap-20 w-[60%] mx-auto maz-w-[800px]">${each(benefits, (benefit, index) => {
    return `<div class="flex gap-6 sm:gap-8"><p class="poppins text-4xl sm:text-5xl md:text-6xl text-zinc-500 font-semibold">0${escape(index + 1)}</p> <div class="flex flex-col gap-6 sm:gap-8"><h3 class="text-2xl sm:text-3xl md:text-5xl">${escape(benefit.name)}</h3> <p>${escape(benefit.description)}</p></div> </div>`;
  })}</div> <div class="mx-auto -mt-12 italic sm:hidden opacity-50" data-svelte-h="svelte-zp0ubu"><p>Scroll to see more →</p></div></section></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
