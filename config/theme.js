// Colors
import colors from 'vuetify/lib/util/colors';

const palette = {
  greenLeaf: {
    primary: colors.teal.base, // primary main
    primarylight: colors.teal.lighten5, // primary light
    primarydark: colors.teal.darken3, // primary dark
    secondary: colors.blueGrey.base, // secondary main
    secondarylight: colors.blueGrey.lighten4, // secondary light
    secondarydark: colors.blueGrey.darken3, // secondary dark
    anchor: colors.green.base, // link
  },
};

const theme = {
  ...palette.greenLeaf,
};

export default theme;
