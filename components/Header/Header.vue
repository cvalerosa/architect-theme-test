<template>
  <v-navigation-drawer
    v-if="isMobile"
    v-model="openDrawer"
    fixed
    temporary
    style="background: none"
  >
    <mobile-menu :open="openDrawer" />
  </v-navigation-drawer>
  <v-app-bar
    id="header"
    v-scroll="handleScroll"
    :class="{ fixed: fixed, 'open-drawer': openDrawer }"
    class="header"
    fixed
    app
  >
    <v-container :class="{ 'fixed-width': isDesktop }">
      <v-row>
        <v-col sm="2" cols="7" class="py-sm-0 px-0">
          <div class="logo" :class="{ invert: invert }">
            <v-btn
              v-if="isMobile"
              :class="{ 'is-active': openDrawer }"
              class="hamburger hamburger--spin mobile-menu"
              text
              icon
              @click.stop="handleToggleOpen"
            >
              <span class="hamburger-box">
                <span class="bar hamburger-inner" />
              </span>
            </v-btn>
            <nuxt-link
              v-if="invert"
              :to="routeLink.architect.home"
            >
              <img
                :src="logo"
                alt="logo"
              >
              <span v-if="isDesktop">
                {{ brand.architect.name }}
              </span>
            </nuxt-link>
            <span v-if="!invert && loaded">
              <a
                v-smooth-scroll="{ offset: 100 }"
                href="#home"
                class="anchor-link scrollactive-item"
              >
                <img
                  :src="logo"
                  alt="logo"
                >
                <span v-if="isDesktop">
                  {{ brand.architect.name }}
                </span>
              </a>
            </span>
          </div>
        </v-col>
        <v-col :sm="isTablet ? 10 : 9" cols="5" class="py-sm-0 px-0">
          <div class="header-content">
            <nav
              :class="{ invert: invert }"
              class="nav-menu"
            >
              <div v-if="isDesktop">
                <ul class="scrollactive-nav">
                  <li
                    v-for="(item, index) in menuList"
                    :key="index"
                  >
                    <v-btn
                      v-if="!invert"
                      v-smooth-scroll="{ offset: -100 }"
                      :href="item.url"
                      :class="{ active: activeMenu === item.name }"
                      class="menu-link"
                      variant="text"
                      @click="scrollToMyEl(item.name)"
                      v-text="$t('architectLanding.header_'+item.name)"
                    />
                    <v-btn
                      v-if="invert"
                      :href="'/' + item.url"
                      variant="text"
                    >
                      {{ $t('architectLanding.header_'+item.name) }}
                    </v-btn>
                  </li>
                  <li>
                    <v-btn
                      :href="routeLink.architect.contact"
                      v-text="$t('architectLanding.header_contact')"
                    />
                  </li>
                </ul>
              </div>
            </nav>
            <nav>
              <setting-menu :invert="invert" />
            </nav>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import { inject } from 'vue';
import logo from '@/assets/images/architect-logo.svg';
import link from '@/assets/text/link';
import brand from '@/assets/text/brand';
import navMenu from './menu';
import Settings from './Settings';
import MobileMenu from './MobileMenu';
import { useRouter } from '#app';

let counter = 0;
function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset,
  };
}

export default {
  components: {
    'setting-menu': Settings,
    MobileMenu,
  },
  props: {
    invert: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const smoothScroll = inject('smoothScroll');
    function scrollToMyEl(elemId) {
      const myEl = document.getElementById(elemId);
      const router = useRouter();

      router.push(`#${elemId}`);
      smoothScroll({
        scrollTo: myEl, // scrollTo is also allowed to be number
        hash: `#${elemId}`, // required if updateHistory is true
        offset: -100,
      });
    }

    return {
      scrollToMyEl,
    };
  },
  data() {
    return {
      logo,
      routeLink: link,
      loaded: false,
      brand,
      activeMenu: '',
      sections: {},
      fixed: false,
      openDrawer: null,
      menuList: [
        createData(navMenu[0], '#' + navMenu[0]),
        createData(navMenu[1], '#' + navMenu[1]),
        createData(navMenu[2], '#' + navMenu[2]),
        createData(navMenu[3], '#' + navMenu[3]),
        createData(navMenu[4], '#' + navMenu[4]),
      ],
    };
  },
  computed: {
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
    isTablet() {
      const mdDown = this.$vuetify.display.mdAndDown;
      return mdDown;
    },
    isDesktop() {
      const mdUp = this.$vuetify.display.mdAndUp;
      return mdUp;
    },
  },
  mounted() {
    this.loaded = true;
    const id = window.location.hash;
    const content = id.replace('#', '');
    const element = document.getElementById(content);
    if (element) {
      element.scrollIntoView();
    }

    const section = document.querySelectorAll('.scroll-nav-content > *');
    Array.prototype.forEach.call(section, (e) => {
      this.sections[e.id] = e.offsetTop;
    });
  },
  methods: {
    handleScroll() {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      const topPosition = scrollPosition + 100;

      Object.keys(this.sections).forEach((i) => {
        if (this.sections[i] <= topPosition) {
          this.activeMenu = i;
        }
      });

      if (scrollPosition > 70) {
        this.fixed = true;
      } else {
        this.fixed = false;
      }
    },
    handleToggleOpen() {
      this.openDrawer = !this.openDrawer;
    },
  },
};
</script>
