<template>
  <div class="root">
    <v-dialog
      v-model="dialog"
      max-width="690"
    >
      <v-card class="video-popup">
        <v-card-title class="headline">
          <h2 class="title-main">
            {{ $t('architectLanding.featured_video') }}
            <v-btn variant="flat" icon @click="handleVideoClose()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </h2>
        </v-card-title>
        <div v-if="yt" class="text-center mx-auto pb-4">
          <YouTube
            ref="youtube"
            :src="videoId"
            :vars="playerVars"
            :width="640"
            :height="360"
            @ready="onReady"
          />
        </div>
      </v-card>
    </v-dialog>
    <v-container class="fixed-width">
      <v-row class="spacing6">
        <v-col class="pa-6" lg="7" md="10" cols="12">
          <div v-if="loaded" class="video-carousel">
            <splide ref="slick" :options="slickOptions">
              <splide-slide>
                <v-card class="item">
                  <img :src="imgAPI.architect[4]" alt="cover">
                  <v-btn
                    icon
                    class="play-btn"
                    @click="handleVideoOpen('ZGn8kSV9gAA')"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>
                </v-card>
              </splide-slide>
              <splide-slide>
                <v-card class="item">
                  <img :src="imgAPI.architect[5]" alt="cover">
                  <v-btn
                    icon
                    class="play-btn"
                    @click="handleVideoOpen('85V_u_R0zxM')"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>
                </v-card>
              </splide-slide>
              <splide-slide>
                <v-card class="item">
                  <img :src="imgAPI.architect[6]" alt="cover">
                  <v-btn
                    icon
                    class="play-btn"
                    @click="handleVideoOpen('ZGn8kSV9gAA')"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>
                </v-card>
              </splide-slide>
              <splide-slide>
                <v-card class="item">
                  <img :src="imgAPI.architect[7]" alt="cover">
                  <v-btn
                    icon
                    class="play-btn"
                    @click="handleVideoOpen('85V_u_R0zxM')"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>
                </v-card>
              </splide-slide>
            </splide>
          </div>
        </v-col>
        <v-col class="pa-6" lg="5" md="10" cols="12">
          <div>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              <div>
                <title-main
                  :head="$t('architectLanding.featured_title')"
                  :desc="$t('architectLanding.featured_subtitle')"
                />
                <p class="use-text-paragraph">
                  {{ $t('architectLanding.featured_desc1') }}
                </p>
                <p class="use-text-paragraph">
                  {{ $t('architectLanding.featured_desc2') }}
                </p>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './feature-style.scss';
</style>

<script>
import AOS from 'aos';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import youtube from '@/config/youtube';
import Title from '../Title';

export default {
  components: {
    'title-main': Title,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      dialog: false,
      imgAPI,
      yt: youtube,
      loaded: false,
      videoId: 'ZGn8kSV9gAA',
      slickOptions: {
        pagination: true,
        type: 'fade',
        autoplay: true,
        interval: 5000,
        speed: 750,
        direction: 'rtl',
        arrows: false,
        reducedMotion: {
          autoplay: true,
          speed: 500,
          rewindSpeed: 1000,
        },
      },
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: 'http://localhost:8002',
      },
    };
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
  mounted() {
    this.loaded = true;
    AOS.init({
      once: true,
    });

    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.slickOptions.direction = 'rtl';
      } else {
        this.slickOptions.direction = 'ltr';
      }
    }, 100);
  },
  methods: {
    handleVideoOpen(id) {
      this.videoId = id;
      if (this.yt.use) {
        this.dialog = true;
      }
    },
    onReady() {
      this.$refs.youtube.playVideo();
    },
    handleVideoClose() {
      this.dialog = false;
      this.$refs.youtube.pauseVideo();
    },
  },
};
</script>
