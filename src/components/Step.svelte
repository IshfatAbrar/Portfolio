<script>
    export let step;
</script>

<a
    href={step.href}
    target="_blank"
    class="p-4 mx-10 sm:p-6 md:p-8 flex flex-col gap-4 rounded-2xl border border-solid border-stone-700 text-center cursor-pointer group hover:border-cyan-400 duration-200"
>
    <div
        class="bg-zinc-900 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
    >
        <i class={step.icon + " text-slate-50"} />
    </div>
    <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">
        {step.name}
    </h3>
    <slot />
    <div class="flex-1 flex justify-betweeen gap-4 items-end">
        <div
            class="ml-auto cursor-pointer hover:text-zinc-500 duration-200 relative "
        >
            <p class="z-4">Go to &rarr;</p>
        </div>
    </div>
</a>
