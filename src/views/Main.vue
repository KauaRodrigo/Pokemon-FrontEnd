<script setup>
import { onBeforeMount, onMounted } from 'vue'
import { api } from '../api.service'

let Pokemon = $ref()
let results = $ref([])
let attempt = $ref()
let search = $ref()
let attempts = $ref([])

onBeforeMount(async () => {
    Pokemon = await api.get('/').then((res) => {
        return res.data
    })    
    console.log(Pokemon)
})

async function getPokemons(name) {
    results = await api.get(`/pokemon/${name}`).then((res) => {
        return res.data
    })
}

async function select(name) {
    search = ''
    results = []
    attempt = await api.get(`/pokemon`, {
        params: {
            filter: name
        }
    }).then((res) => {
        attempts.push(res.data)
        return res.data
    })
    console.log(attempt)
}

</script>
<template>
    <div class="main">
        <!-- <div class="card">
            <div class="head">
                <img :src="Pokemon.frontSprite" alt="">
            </div>
            <div class="linha" />
            <div class="foot">
                <div v-if="Pokemon">
                    <p><b>Name:</b> <var>{{ Pokemon.name }}</var></p>
                    <p><b>Height:</b> <var>{{ Pokemon.height }}</var></p>
                    <p><b>Weight:</b> <var>{{ Pokemon.weight }}</var></p>
                    <p><b>Types:</b> <var>{{ Pokemon.type1 + ' ' }}</var><var>{{Pokemon.type2 || ''}}</var></p>                                
                </div>
            </div>
        </div> -->
        <div class="poke">
            <input :disabled="attempt?.name == Pokemon?.name" v-model="search" class="poke-input" type="text" @input="getPokemons($event.target.value)">        
            <div v-if="results.length > 0" class="results-box">        
                <div @click="select(result)" v-for="result in results" :key="result" class="result">                
                    <p>{{result}}</p>
                </div>
            </div>
        </div>
        <div  v-for="attempt of attempts" :key="attempt" style="display: flex; gap: 40px">
            <div :style="{background: attempt.name == Pokemon.name ? 'green' : 'red'}" style="border: 2px solid black; height: 80px; min-width: 80px; display: grid; color: black;  font-weight: bold; place-items: center" >{{ attempt.name }}</div>
            <div :style="{background: attempt.height == Pokemon.height ? 'green' : 'red'}" style="border: 2px solid black; height: 80px; min-width: 80px; display: grid; color: black;  font-weight: bold; place-items: center" >{{ attempt.height }}</div>
            <div :style="{background: attempt.weight == Pokemon.weight ? 'green' : 'red'}" style="border: 2px solid black; height: 80px; min-width: 80px; display: grid; color: black;  font-weight: bold; place-items: center" >{{ attempt.weight }}</div>
            <div :style="{background: attempt.type1 == Pokemon.type1 ? 'green' : 'red'}" style="border: 2px solid black; height: 80px; min-width: 80px; display: grid; color: black;  font-weight: bold; place-items: center" >{{ attempt.type1 }}</div>
            <div :style="{background: attempt.type2 && attempt.type2 == Pokemon.type2 ? 'green' : 'red'}" style="border: 2px solid black; height: 80px; min-width: 80px; display: grid; color: black;  font-weight: bold; place-items: center" v-if="attempt.type2">{{ attempt.type2 }}</div>
        </div>
        <p v-if="attempt?.name == Pokemon?.name">Acertou Garai</p>
    </div>
</template>
<style scoped>    
    .main {
        background: rgb(216, 32, 32, 0.7);   
        width: 100vw;                        
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        gap: 50px;
        padding: 2rem 1.4rem;
        justify-content: center; 
    }

    .poke {
        width: 50%;
    }
    

    .poke-input {
        width: 100%;
        padding: 2%;
        border: 4px solid gray;
        border-radius: 40px;        
        margin-bottom: 5px;
    }

    .results-box {
        margin: 0 3%;
        width: auto;
        height: 185px;
        overflow-y: scroll;
        color: black;
        background-color: white;
        
    }

    /*.results-box::-webkit-scrollbar {
        display: none;
    }

    
    */
    
    .results-box:hover::-webkit-scrollbar-thumb {
        display: block;
    } 

    ::-webkit-scrollbar {
        background: transparent;        
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {        
        display: none;
        background: rgba(30,30,30,0.2);
        border-radius: 20px;        
    }

    .result {
        font-size: 20px;        
        text-transform: capitalize;
        height: 60px;
        display: flex;
        place-items: center;
        padding: 2%;     
        cursor: pointer;   
    }

    .result:hover {
        background: rgba(40, 40, 40, 0.2);
    }

    .result > p {
        font-weight: 600;        
    }

    .head {
        height: 45%;
        background-color: rgba(255,255,255,0.7);       
        border-bottom: 4px solid black;         
    }

    .head > img {
        position: absolute;
        height: 12rem;        
        bottom: -3rem;
        left: 1rem;
        filter: drop-shadow(1px 1px 3px black) brightness(0);   
        transition: filter 1s;
        z-index: 10000;
    }

    .head > img:hover {
        filter: drop-shadow(1px 1px 3px black) brightness(1);   
    }

    .foot {     
        padding: 8%;
        height: 55%;
        background-color: rgba(255,255,255,0.8);                
        color: black;
    }

    .card {
        overflow: hidden;
        height: 300px;
        width: 220px;
        border: 2px solid black;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        gap: 0;
    }    

    .linha {
        width: 100%;
        border: 2px solid black;
    }

    b {
        font-weight: 600;
        font-size: 18px
    }

    var {
        text-transform: capitalize;
        font-style: normal;
    }
    
</style>
