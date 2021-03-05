export type ThemeType = typeof lightTheme;

export const lightTheme = {
    borderColor: '#303030',
    backgroundColor: 'rgb(14, 14, 14)',
    textColor: 'whitesmoke',
    primary: 'rgb(0, 153, 255)'
}
export const darkTheme: ThemeType = {
    borderColor: '#303030',
    backgroundColor: 'rgb(14, 14, 14)',
    textColor: 'whitesmoke',
    primary: 'rgb(0, 153, 255)'
}

const theme = lightTheme;
export default theme;