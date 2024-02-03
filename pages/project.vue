<template>
<div>
    <div class="main-wrap">
      <main-header invert />
      <div class="container-wrap scroll-nav-content">
        <section id="project" :class="[isMobile ? 'space-top-short' : 'space-top']">
          <project />
        </section>
        <section id="featured" :class="[isMobile ? 'space-top-short' : 'space-top']">
          <featured />
        </section>
        <section id="subscribe" class="space-top-short">
          <subscribe-form />
        </section>
        <main-footer />
      </div>
      <hidden point="mdDown">
        <page-nav />
      </hidden>
      <hidden point="mdDown">
        <notification />
      </hidden>
    </div>
  </div>
</template>

<style scoped lang="scss">
@function section-margin($margin) {
  @return $margin * 20;
}
.main-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  @include palette-text-primary;
  .v-theme--dark & {
    background-color: $dark-background-default;
  }
  .v-theme--light & {
    background-color: $light-background-paper;
  }
}
.space-bottom {
  margin-bottom: section-margin($spacing1);
}
.space-top {
  margin-top: section-margin($spacing1);
}
.container-wrap {
  margin-top: $spacing10;
  padding: $spacing4;
  > section {
    position: relative;
  }
}
</style>

<script>
import Header from '@/components/Header';
import Project from '@/components/Project';
import Featured from '@/components/Featured';
import SubscribeForm from '@/components/SubscribeForm';
import Footer from '@/components/Footer';
import PageNav from '@/components/PageNav';
import Hidden from '@/components/Hidden';
import Notification from '@/components/Notification';
import brand from '@/assets/text/brand';

export default {
  components: {
    'main-header': Header,
    Project,
    Featured,
    SubscribeForm,
    'main-footer': Footer,
    PageNav,
    Hidden,
    Notification,
  },
  head() {
    return {
      title: brand.architect.name + ' - Home Page',
    };
  },
  computed: {
    isTablet() {
      const mdDown = this.$vuetify.display.mdAndDown;
      return mdDown;
    },
    isMobile() {
      const xsDown = this.$vuetify.display.xsAndDown;
      return xsDown;
    },
  },
};
</script>
