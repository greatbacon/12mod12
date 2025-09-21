<script lang="ts">	
	import Header from '$lib/ui/Header.svelte';    

    const CLEAR = "00"
    let buzzSound: HTMLAudioElement;

    let slot = [CLEAR,CLEAR,CLEAR]
    let locked: string[] = [];
    let index = 0;
	
    function clearBox() {
        buzzSound.pause();
        buzzSound.currentTime = 0;
        slot = [CLEAR,CLEAR,CLEAR]
        index = 0;
        locked = [];
    }

    function buzz(buzzer: string, key: string){
        if (index == 0){
            buzzSound.play();
        }
        slot[index] = buzzer;
        locked.push(key);
        index++;
    }

    function onKeyDown(e: KeyboardEvent) {
        if (e.code === "Space"){
            clearBox();
            return;
        }

        //block double buzz until box clears
        if (index > 2 || locked.includes(e.code)){
            return;
        }
		 switch(e.code) {
			 case "ArrowUp":
				 buzz("A1", e.code);
				 break;
             case "ArrowLeft":			 
				 buzz("A2", e.code);
				 break;
            case "ArrowDown":			
				 buzz("A3", e.code);
				 break;
			 case "ArrowRight":
                buzz("A4", e.code);
				break;
            case "KeyI":
                buzz("B1", e.code);
                break;
            case "KeyJ":
                buzz("B2", e.code);
                break;
            case "KeyK":
                buzz("B3", e.code);
                break;
            case "KeyL":
                buzz("B4", e.code);
                break;
            case "KeyW":
                buzz("C1", e.code);
                break;
            case "KeyA":
                buzz("C2", e.code);
                break;
            case "KeyS":
                buzz("C3", e.code);
                break;
            case "KeyD":
                buzz("C4", e.code);
                break;
		 }
	}
</script>

<Header />

<audio
    src='/quiz/697400__jamhamsterrofl__right-buzzer.mp3'
    preload="auto"
    bind:this={buzzSound}    
/>

<div class="brief">
    <section>
        <div class="row">
            <div>SPOT 1</div>
            <div class="slot">{slot[0]}</div>
        </div>
        <div class="row">
            <div>SPOT 2</div>
            <div class="slot">{slot[1]}</div>
        </div>
        <div class="row">            
            <div>SPOT 3</div>
            <div class="slot">{slot[2]}</div>
        </div>
    </section>
</div>

<button on:click={clearBox}>CLEAR</button>

<style>

	div.brief {
		padding-top: 1%;
		padding-bottom: 1%;
		padding-left: 10%;
		padding-right: 5%;
        color: #00ff00;
		overflow: auto;
		border-bottom-style: dotted;
		border-color: #00ff00;
        font-family: 'fixsys';
        font-size: 2rem;
        
	}

    .row {
        display: flex;
        flex-direction: row;
        margin-left: 1rem;
    }

    .slot {
        margin-left: 2rem;
    }
    button {
		width: 200px;
		height: 50px;
		font-size: 2em;
		text-align: center;
		background: none;
		border-style: dotted;
        border-color: #00ff00;
		color: #00ff00;
		font-family: 'fixsys';
        margin-top: 1rem;
	}
	button:hover {
		color: #017501;
	}
</style>

<svelte:window on:keydown|preventDefault={onKeyDown} />