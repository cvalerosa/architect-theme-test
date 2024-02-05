// Colors
import colors from 'vuetify/lib/util/colors';

const palette = {
  greenLeaf: {
    primary: colors.teal.darken4, // primary main
    primarylight: colors.teal.darken4, // primary light
    primarydark: colors.teal.darken4, // primary dark
    secondary: colors.teal.darken4, // secondary main
    secondarylight: colors.teal.lighten4, // secondary light
    secondarydark: colors.teal.darken4, // secondary dark
    anchor: colors.blue.lighten3, // link
  },
  // greenLeaf: {
  //   primary: colors.teal.darken4, // primary main
  //   primarylight: colors.teal.lighten4, // primary light
  //   primarydark: colors.teal.darken2, // primary dark
  //   secondary: colors.red.accent2, // secondary main
  //   secondarylight: colors.red.accent1, // secondary light
  //   secondarydark: colors.red.accent3, // secondary dark
  //   anchor: colors.blue.lighten3, // link
  // },
};

const theme = {
  ...palette.greenLeaf,
};

export default theme;
