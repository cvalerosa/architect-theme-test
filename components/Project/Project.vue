<template>
  <div class="root">
    <div class="parallax-wrap">
      <dot-parallax />
    </div>
    <v-container>
      <div class="floating-title">
        <title-main
          :head="$t('architectLanding.project_title')"
          :desc="$t('architectLanding.project_desc')"
        />
      </div>
    </v-container>
    <div class="slider-wrap">
      <div v-if="loaded" class="carousel">
        <splide ref="slick" :options="slickOptions">
          <splide-slide>
            <div class="props item-props-first">
              <div :style="{display: isDesktop ? 'block' : 'none'}" />
            </div>
          </splide-slide>
          <splide-slide
            v-for="(item, index) in projectData"
            :key="index"
          >
            <div class="item">
              <general-card
                :img="item.img"
                :title="item.title"
                :desc="item.desc"
              />
            </div>
          </splide-slide>
          <splide-slide>
            <div class="props item-props-first">
              <div :style="{display: isDesktop ? 'block' : 'none'}" />
            </div>
          </splide-slide>
        </splide>
      </div>
      <v-btn
        icon
        fab
        class="nav prev"
        @click="prev()"
      >
        <i class="ion-ios-arrow-back" />
      </v-btn>
      <v-btn
        icon
        fab
        class="nav next"
        @click="next()"
      >
        <i class="ion-ios-arrow-forward" />
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './project-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import GeneralCard from '../Cards/General';
import Title from '../Title';
import DotParallax from '../Parallax/Dot';

const projectData = [
  {
    img: imgAPI.architect[1],
    title: 'Vivamus sit amet',
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
  {
    img: imgAPI.architect[2],
    title: 'Vivamus sit amet',
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
  {
    img: imgAPI.architect[3],
    title: 'Vivamus sit amet',
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
  {
    img: imgAPI.architect[1],
    title: 'Vivamus sit amet',
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
  {
    img: imgAPI.architect[2],
    title: 'Vivamus sit amet',
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
  {
    img: imgAPI.architect[3],
    title: 'Vivamus sit amet',
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
];

export default {
  components: {
    'title-main': Title,
    DotParallax,
    GeneralCard,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      imgAPI,
      loaded: false,
      projectData,
      slickOptions: {
        pagination: false,
        speed: 500,
        perPage: 4,
        perMove: 1,
        direction: 'ltr',
        arrows: false,
        autoWidth: true,
        breakpoints: {
          1100: {
            perPage: 3,
          },
          800: {
            perPage: 2,
          },
          600: {
            perPage: 1,
          },
        },
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
        },
      },
    };
  },
  computed: {
    isDesktop() {
      const mdUp = this.$vuetify.display.mdAndUp;
      return mdUp;
    },
  },
  mounted() {
    this.loaded = true;
    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.slickOptions.direction = 'rtl';
      } else {
        this.slickOptions.direction = 'ltr';
      }
    }, 100);
  },
  methods: {
    next() {
      this.$refs.slick.go('>');
    },
    prev() {
      this.$refs.slick.go('<');
    },
  },
};
</script>
