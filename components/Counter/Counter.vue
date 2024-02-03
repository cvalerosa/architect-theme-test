<template>
  <div
    ref="wrapper"
    v-scroll="runCounter"
    class="root"
  >
    <v-container class="max-md">
      <div id="watched_counter" />
      <div class="counter-wrap">
        <v-card class="paper">
          <v-row
            align="center"
            justify="center"
            class="spacing6"
          >
            <v-col md="4" class="pa-6">
              <div class="counter-item">
                <i class="ion-ios-people-outline" />
                <div v-if="loaded" class="text">
                  <h4 class="use-text-title">
                    <span>
                      {{ !visible ? 0 : '' }}
                      <count-up
                        v-if="visible"
                        :start-val="0"
                        :end-val="20"
                      />
                    </span>
                  </h4>
                  <h6 class="use-text-subtitle2">
                    {{ $t('architectLanding.counter_expert') }}
                  </h6>
                </div>
              </div>
            </v-col>
            <v-col md="4" class="pa-6">
              <div class="counter-item">
                <i class="ion-ios-briefcase-outline" />
                <div v-if="loaded" class="text">
                  <h4 class="use-text-title">
                    <span>
                      {{ !visible ? 0 : '' }}
                      <count-up
                        v-if="visible"
                        :start-val="0"
                        :end-val="123"
                      />
                    </span>
                  </h4>
                  <h6 class="use-text-subtitle2">
                    {{ $t('architectLanding.counter_completed') }}
                  </h6>
                </div>
              </div>
            </v-col>
            <v-col md="4" class="pa-6">
              <div class="counter-item">
                <i class="ion-ios-heart-outline" />
                <div v-if="loaded" class="text">
                  <h4 class="use-text-title">
                    <span>
                      {{ !visible ? 0 : '' }}
                      <count-up
                        v-if="visible"
                        :start-val="0"
                        :end-val="89"
                      />
                    </span>
                  </h4>
                  <h6 class="use-text-subtitle2">
                    {{ $t('architectLanding.counter_happy') }}
                  </h6>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'counter-style.scss';
</style>

<script>
import CountUp from 'vue-countup-v3';
import { ref } from 'vue';

export default {
  components: {
    CountUp,
  },
  setup() {
    const visible = ref(false);
    const wrapper = ref(null);
    const offset = 500;
    function runCounter() {
      const windowBound = wrapper.value.getBoundingClientRect();

      if (windowBound.top < offset) {
        visible.value = true;
      }
    }

    return {
      visible,
      runCounter,
      wrapper,
    };
  },
  data() {
    return {
      loaded: false,
    };
  },
  mounted() {
    this.loaded = true;
  },
};
</script>
