<script>
    export let y;

    let tabs = [
        {name:'Projects', link: '#projects'},
        {name: 'About me', link: '#about' },
    ];
</script>

<header class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " + 
    (y > 0 
        ? "py-4 bg-zinc-900 border-cyan-950 "
        : "py-6 bg-transparent border-transparent")}
>
    <h1 class="font-medium text-stone-400 lg:text-xl sm:text-lg">
        <b class="font-bold text-stone-200 poppins">Ishfat</b> Abrar Islam
    </h1>
    <div class="flex gap-5 items-center">
        <div class="sm:flex items-center gap-4 hidden">
            {#each tabs as tab, index}
                <a
                    href={tab.link}
                    class="duration-200 hover:text-cyan-400"
                    target={index === 2 ? "_blank" : ""}
                >
                    <p>{tab.name}</p>
                </a>
            {/each}
        </div>
        <a href="mailto:ishfat0001abrar@gmail.com" target="_blank" class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-zinc-950">
            <div class="absolute top-0 right-full w-full h-full bg-cyan-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
            <h4 class="relative z-9">Get in touch</h4>
        </a>
    </div>
</header>
