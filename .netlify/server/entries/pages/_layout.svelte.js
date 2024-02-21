import { c as create_ssr_component, e as each, b as add_attribute, d as escape, v as validate_component } from "../../chunks/ssr.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let socials = [
    {
      name: "github",
      icon: "fa-brands fa-github",
      link: "https://github.com/IshfatAbrar"
    },
    {
      name: "linkedIn",
      icon: "fa-brands fa-linkedin",
      link: "https://www.linkedin.com/in/ishfat0001/"
    },
    {
      name: "instagram",
      icon: "fa-brands fa-instagram",
      link: "https://www.instagram.com/ishfat_abrar/"
    }
  ];
  return `<footer class="py-8 sm:py-10 bg-zinc-950 max-w-[2000] border-t border-solid border-cyan-950 flex flex-col gap-4 sm:gap-8 justify-center items-center"><p class="px-4 py-2 poppins text-2xl text-slate-50" data-svelte-h="svelte-1abb9df">Connect with me!</p> <div class="flex flex-row gap-5 items-center justify-center z-[10]">${each(socials, (social, index) => {
    return `<a${add_attribute("href", social.link, 0)} target="_blank" class="button py-2 px-4 bg-zinc-950 rounded-lg cursor-pointer hover:translate-y-2 hover:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] hover:border-b-[1px] transition-all duration-150 [box-shadow:7px_7px_0_0_#0891b2] border-[1px] border-cyan-100"><i${add_attribute("class", social.icon + " text-white text-2xl sm:text-3xl md:text-4xl", 0)}></i> </a>`;
  })}</div></footer>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { y } = $$props;
  let tabs = [{ name: "Projects", link: "#projects" }, { name: "About me", link: "#about" }];
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  return `<header${add_attribute(
    "class",
    "sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " + (y > 0 ? "py-4 bg-zinc-900 border-cyan-950 " : "py-6 bg-transparent border-transparent"),
    0
  )}><h1 class="font-medium text-stone-400 lg:text-xl sm:text-lg" data-svelte-h="svelte-e393xh"><b class="font-bold text-stone-200 poppins">Ishfat</b> Abrar Islam</h1> <div class="flex gap-5 items-center"><div class="sm:flex items-center gap-4 hidden">${each(tabs, (tab, index) => {
    return `<a${add_attribute("href", tab.link, 0)} class="duration-200 hover:text-cyan-400"${add_attribute("target", index === 2 ? "_blank" : "", 0)}><p>${escape(tab.name)}</p> </a>`;
  })}</div> <a href="mailto:ishfat0001abrar@gmail.com" target="_blank" class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-zinc-950" data-svelte-h="svelte-2ypfsx"><div class="absolute top-0 right-full w-full h-full bg-cyan-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">Get in touch</h4></a></div></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let y;
  return `<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"><div${add_attribute(
    "class",
    "fixed bottom-0 w-full duration-100 flex p-10 z-[10]pointer-event-none opacity-0",
    0
  )}><button class="ml-auto rounded-full bg-zinc-950 text-cyan-400 px-3 py-2 sm:px-4 hover:bg-zinc-800 cursor-pointer" data-svelte-h="svelte-1k2qrpw"><i class="fa-solid fa-arrow-up grid place-items-center aspect-square"></i></button></div> ${validate_component(Header, "Header").$$render($$result, { y }, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> `;
});
export {
  Layout as default
};
