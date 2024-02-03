<template>
  <div class="root">
    <v-container class="fixed-width">
      <v-row class="spacing10" :class="{ 'column-reverse' : !isDesktop }">
        <v-col md="3" cols="12">
          <hidden point="smDown">
            <div v-if="current > 1">
              <h5 class="use-text-title2">
                <span v-if="current < 10">0</span>{{ current - 1 }}
              </h5>
              <p class="use-text-paragraph">
                {{ blogContent[current - 2].title }}
              </p>
            </div>
          </hidden>
          <nav>
            <v-btn
              :disabled="current >= blogContent.length"
              icon
              color="secondary"
              class="next"
              @click="next()"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
            <v-btn
              :disabled="current <= 1"
              icon
              color="secondary"
              class="prev"
              @click="prev()"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </nav>
        </v-col>
        <v-col md="6" cols="12">
          <div class="blog-wrap">
            <article class="px-2">
              <h3 class="use-text-title2">
                {{ blogContent[current - 1].title }}
              </h3>
              <p class="use-text-paragraph">
                {{ blogContent[current - 1].desc }}
              </p>
            </article>
            <v-btn text class="read-more">
              Read More
            </v-btn>
          </div>
        </v-col>
        <v-col md="3" cols="12">
          <hidden point="smDown">
            <div v-if="current < blogContent.length">
              <h5 class="use-text-title2">
                <span v-if="current < 10">0</span>{{ current + 1 }}
              </h5>
              <p class="use-text-paragraph">
                {{ blogContent[current].title }}
              </p>
            </div>
          </hidden>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './blog-style.scss';
</style>

<script>
import Hidden from '../Hidden';

const blogContent = [
  {
    title: 'Sed imperdiet enim ligula eget suscipit orc',
    desc:
      'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non, gravida est.',
  },
  {
    title: 'Donec commodo convallis ligula eget suscipit orc',
    desc:
      'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non, gravida est.',
  },
  {
    title: 'Vivamus sit amet interdum elit',
    desc:
      'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non, gravida est.',
  },
  {
    title:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.',
    desc:
      'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non, gravida est.',
  },
  {
    title: 'Aliquam nec ex aliquet, aliquam neque non, gravida est.',
    desc:
      'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non, gravida est.',
  },
];

export default {
  components: {
    Hidden,
  },
  data() {
    return {
      blogContent,
      current: 2,
    };
  },
  computed: {
    isDesktop() {
      const mdUp = this.$vuetify.display.mdAndUp;
      return mdUp;
    },
  },
  methods: {
    next() {
      this.current += 1;
    },
    prev() {
      this.current -= 1;
    },
  },
};
</script>
