<script>
    let socials = [
        {name:'github', icon:'fa-brands fa-github', link:'https://github.com/IshfatAbrar'},
        {name:'linkedIn', icon:'fa-brands fa-linkedin', link:'https://www.linkedin.com/in/ishfat0001/'},
        {name:'instagram', icon:'fa-brands fa-instagram', link:'https://www.instagram.com/ishfat_abrar/'}
    ]
</script>

<footer
    class="py-8 sm:py-10 bg-zinc-950 max-w-[2000] border-t border-solid border-cyan-950 flex flex-col gap-4 sm:gap-8 justify-center items-center"
>
    <p class="px-4 py-2 poppins text-2xl text-slate-50">
        Connect with me!
    </p>
    <div class="flex flex-row gap-5 items-center justify-center z-[10]">
        {#each socials as social, index}
        <a href={social.link} target="_blank" class="button py-2 px-4 bg-zinc-950 rounded-lg cursor-pointer
        hover:translate-y-2  hover:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
        hover:border-b-[1px]
        transition-all duration-150 [box-shadow:7px_7px_0_0_#0891b2]
        border-[1px] border-cyan-100">
            
              <i class={social.icon +" text-white text-2xl sm:text-3xl md:text-4xl"}></i>
            
          </a>
                    
        {/each}
    </div>
</footer>