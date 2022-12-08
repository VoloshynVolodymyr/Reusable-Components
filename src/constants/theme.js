export const theme = {
  colors: {
    profileBgColor: 'honeydew',
    avatarBgColor: 'steelblue',
    labelBgColor: 'steelblue',
    statsBgColor: 'rgb(247, 244, 241)',
    mainTextColor: 'black',
    white: '#ffffff',
    secondaryTextColor: 'grey',
    isOnline: 'lightgreen',
    isOffline: 'lightcoral',
    isOnlineText: 'tomato',
    isOfflineText: 'darkmagenta',
    tableBgColor: '#00bcd5',
    tableRowMainColor: '#85929e',
    tableRowSecondaryColor: '#f0f8fd',
  },
  fontSizes: [12, 14, 16, 20, 24, 32],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  spacing: (value) => `${value*4}px`,
  fontWeights: {
    normal: 400, 
    bold: 700,
  }
};
