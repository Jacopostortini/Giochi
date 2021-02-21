<template>
  <div class="pregame-phase__main-panel">


    <header class="pregame-phase__header">
      <h1>Unseen</h1>
    </header>


    <div class="pregame-phase__players">
      <div class="pregame-phase__players-table"/>
      <PlayerLabel v-for="player in players"
                   :key="player.local_id"
                   :player="player"
                   :current-player="currentPlayer"
                   @kickplayer="$emit('kickplayer', $event)"/>
    </div>


    <div class="pregame-phase__information-panel">
      <CopyInformation message="Copy the url and share it with your friends!" :info="url.toString()"/>
      <CopyInformation message="Or send them this tag!" :info="id"/>
      <div class="pregame-phase__admin-badge">
        <p>The admin of this lobby is: <strong>{{ adminUsername }}</strong></p>
      </div>
    </div>


    <div class="pregame-phase__buttons">
      <button v-if="currentPlayer && !currentPlayer.is_mister_x"
              @click="showChangeColorPopup=true">Change your pawn</button>
      <button class="pregame-phase__buttons__join-game"
              v-if="!currentPlayer"
              @click="$emit('joingame')">Join game</button>
      <button v-if="currentPlayer && currentPlayer.is_admin"
              @click="startGame">Start game</button>
      <button :class="{'pregame-phase__buttons__change-mister-x': !misterXUsername, 'pulse-mister-x': pulseMisterXButton}"
              v-if="currentPlayer && currentPlayer.is_admin && !(players.length===1 && currentPlayer.is_mister_x)"
              @click="showChangeMisterXPopup=true">Choose Mister X</button>
      <button v-if="currentPlayer && players.length!==1"
              @click="$emit('quitgame')">Quit game</button>
    </div>




    <div class="pregame-phase__popup" v-if="showChangeColorPopup" @click="showChangeColorPopup=false">
      <ChangeColorPopup :players="players" @changecolor="$emit('changecolor', $event)"/>
    </div>
    <div class="pregame-phase__popup" v-if="showChangeMisterXPopup" @click="showChangeMisterXPopup=false">
      <ChangeMisterXPopup :players="players" :current-player="currentPlayer" @changemisterx="$emit('changemisterx', $event)"/>
    </div>


  </div>
</template>

<script>
import PlayerLabel from "./pregamePhaseComponents/PlayerLabel";
import {useRoute} from "vue-router";
import ChangeColorPopup from "./pregamePhaseComponents/ChangeColorPopup";
import ChangeMisterXPopup from "./pregamePhaseComponents/ChangeMisterXPopup";
import CopyInformation from "./pregamePhaseComponents/CopyInformation";
export default {
  name: "PreGamePhase",
  components: {CopyInformation, ChangeMisterXPopup, ChangeColorPopup, PlayerLabel},
  props: {
    players: {
      type: Array,
      required: true
    },
    currentPlayer: {
      required: true
    }
  },
  data(){
    return {
      showChangeColorPopup: false,
      showChangeMisterXPopup: false,
      hoverUrl: false,
      hoverTag: false,
      copiedUrl: false,
      copiedTag: false,
      pulseMisterXButton: false
    }
  },
  methods: {
    onCopiedUrl(){
      this.copiedUrl=true;
      const sleep = (s) => {
        return new Promise(resolve => setTimeout(resolve, (s*1000)))
      }
      sleep(1).then(()=>{this.copiedUrl=false});
    },
    onCopiedTag(){
      this.copiedTag=true;
      const sleep = (s) => {
        return new Promise(resolve => setTimeout(resolve, (s*1000)))
      }
      sleep(1).then(()=>{this.copiedTag=false});
    },
    startGame(){
      if(this.misterXUsername){
        this.$emit("startgame");
      } else {
        this.pulseMisterXButton = true;
        const sleep = (s) => {
          return new Promise(resolve => setTimeout(resolve, (s*1000)))
        }
        sleep(1).then(()=>{this.pulseMisterXButton = false});
      }
    }
  },
  computed: {
    url: function() {
      return window.location;
    },
    id: function() {
      return useRoute().params.gameId;
    },
    adminUsername: function() {
      for (let i=0; i<this.players.length; i++){
        if(this.players[i].is_admin) return this.players[i].username;
      }
      return null
    },
    misterXUsername: function() {
      for (let i=0; i<this.players.length; i++){
        if(this.players[i].is_mister_x) return this.players[i].username;
      }
      return null
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/global";

.pregame-phase__main-panel{
  background-image: url("../assets/background_image.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr auto;
  grid-template-rows: 20vh 50vh 30vh;
  grid-template-areas: "header header" "players info" "footer footer";
  height: 100%;
  padding-right: 5vw;

  .pregame-phase__header{
    grid-area: header;
    width: 100%;
    height: 100%;
    text-align: center;

    h1{
      margin: 0;
      color: white;
      font-family: Eutemia;
      font-size: 15vh;
      font-weight: normal;
    }
  }

  .pregame-phase__players{
    grid-area: players;
    color: white;
    position: relative;
    display: flex;
    flex-flow: row;
    justify-content: center;
    min-width: 30%;
    height: 100%;
    padding-left: 5%;
    margin-right: 25%;


    .pregame-phase__players-table{
      position: absolute;
      top: 56%;
      left: 0;
      width: 120%;
      height: 8%;
      background-color: white;
      transform: skewX(80deg);
    }
  }

  .pregame-phase__information-panel{
    grid-area: info;
    align-self: center;
    justify-self: center;

    .pregame-phase__admin-badge{
      color: white;
      font-size: 3vh;
    }
  }

  .pregame-phase__buttons{
    grid-area: footer;
    display: flex;
    flex-flow: row;
    width: 100%;
    justify-content: space-evenly;

    button{
      font-size: 5vh;

      &:hover{
        animation-play-state: paused;
      }

      &:focus{
        outline: none;
      }
    }

    .pregame-phase__buttons__join-game{
      animation: button-anim 2s infinite linear;
    }

    .pregame-phase__buttons__change-mister-x{
      animation: button-anim 2s infinite linear;
    }

    .pulse-mister-x{
      animation: pulse 1s;
    }

    @keyframes button-anim {
      0% {transform: rotate(0deg)}
      40% {transform: rotate(0deg)}
      42% {transform: rotate(5deg)}
      44% {transform: rotate(0deg)}
      46% {transform: rotate(-5deg)}
      48% {transform: rotate(0deg)}
      100% {transform: rotate(0deg)}
    }

    @keyframes pulse {
      0% {transform: rotate(0deg) scale(1); background-color: white; color: $theme-color-light}
      10% {transform: rotate(0deg) scale(1.1); background-color: white; color: $theme-color-light}
      30% {transform: rotate(0deg) scale(1.1); background-color: white; color: $theme-color-light}
      40% {transform: rotate(5deg) scale(1.1); background-color: white; color: $theme-color-light}
      50% {transform: rotate(0deg) scale(1.1); background-color: white; color: $theme-color-light}
      60% {transform: rotate(-5deg) scale(1.1); background-color: white; color: $theme-color-light}
      70% {transform: rotate(0deg) scale(1.1); background-color: white; color: $theme-color-light}
      90% {transform: rotate(0deg) scale(1.1); background-color: white; color: $theme-color-light}
      100% {transform: rotate(0deg) scale(1); background-color: white; color: $theme-color-light}
    }
  }

  .pregame-phase__popup{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>