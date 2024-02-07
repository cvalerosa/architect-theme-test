<template>
  <div class="root">
    <div class="deco" />
    <v-container v-if="loaded" :class="{ 'fixed-width': isDesktop }">
      <div>
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="200"
          data-aos-duration="600"
        >
          <title-main
            :head="$t('architectLanding.team_title')"
            :desc="$t('architectLanding.team_desc')"
          />
        </div>
      </div>
      <div class="team-wrap">
        <div>
          <v-row :class="[ isMobile ? 'spacing2' : 'spacing6' ]">
            <v-col
              v-for="(item, index) in team"
              :key="index"
              md="4"
              cols="6"
            >
              <div
                :data-aos-delay="(200 + (100 * index))"
                data-aos-offset="100"
                data-aos="fade-up"
                data-aos-duration="300"
              >
                <div>
                  <profile-card
                    :photo="item.photo"
                    :name="item.name"
                    :title="item.title"
                  />
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './team-style.scss';
</style>

<script>
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';
import ProfileCard from '../Cards/Profile';
import Title from '../Title';

const team = [
  {
    photo: imgAPI.architect[9],
    name: 'Carolina Vale Rosa',
    title: 'Co-founder',
  },
  {
    photo: imgAPI.architect[10],
    name: 'Julia Larikova',
    title: 'Co-founder',
  },
];

export default {
  components: {
    'title-main': Title,
    ProfileCard,
  },
  data: () => ({
    loaded: false,
    team,
    imgAPI,
  }),
  computed: {
    isDesktop() {
      const mdUp = this.$vuetify.display.mdAndUp;
      return mdUp;
    },
    isMobile() {
      const xsDown = this.$vuetify.display.smAndDown;
      return xsDown;
    },
  },
  mounted() {
    this.loaded = true;
    AOS.init({
      once: true,
    });
  },
};
</script>
