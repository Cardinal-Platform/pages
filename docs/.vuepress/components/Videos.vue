<template>
    <div>
        <video-player
                class="video-player-box"
                ref="videoPlayer"
                :options="playerOptions"
                :playsinline="true">
        </video-player>
        <div>
            <dl class="jump-list">
                <dt v-for="(item, index) in part" @click="jumpTo(item.time)" v-bind:class="[index === nowPart ? 'now' : '', 'jump-item']">
                    <span class="jump-time-text">{{secondToTime(item.time)}}</span>
                    <span class="jump-title">{{item.title}}</span>
                </dt>
            </dl>
        </div>
    </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'

export default {
    props: {
        url: String,
        part: Object,
    },

    data() {
        return {
            player: null,
            playerOptions: {
                width: '700px',
                muted: false,
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [{
                    type: "video/mp4",
                    src: this.url
                }],
            },

            nowPart: 0
        }
    },

    mounted(){
        this.player = this.$refs.videoPlayer.player;

        this.player.on('timeupdate', (e) => {
            for(let i = 0; i < this.part.length; i++){
                if(this.player.currentTime() < this.part[i].time){
                    this.nowPart = i - 1;
                    return;
                }
            }
            this.nowPart = this.part.length - 1;
        })
    },

    methods: {
        secondToTime(timeInSeconds){
            var hour = Math.floor(timeInSeconds / 3600);
            var min = Math.floor(timeInSeconds % 3600 / 60);
            var sec = Math.floor(timeInSeconds % 60);
            sec = (sec < 10) ? '0' + sec : sec;
            min = (hour > 0 && min < 10) ? '0' + min : min;
            if (hour > 0) {
                return hour + ':' + min + ':' + sec;
            }
            return min + ':' + sec;
        },
        
        jumpTo(sec){
            this.player.currentTime(sec)
        }
    },

    components: {
        videoPlayer
    }
}
</script>

<style>
.video-player-box{

}

.jump-list{

}

.jump-item {
    border-radius: 50px;
    padding: 5px;
}

.jump-item:not(.now):hover {
    background-color: #4f92ce10;
    cursor: pointer;
}


.jump-item.now{
    background-color: #4f92ce50;
}

.jump-time-text{
    font-family: 'Helvetica Neue';
    color: #222;
    font-size: 16px;
    font-weight: bolder;
    margin-left: 15px;
    margin-right: 15px;
}

.jump-title{

}

</style>