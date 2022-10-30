import { StyleSheet } from 'react-native';
import { transparentBgColor } from '../constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
      },
      mainContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      },
      inputField: {
        backgroundColor: transparentBgColor,
        color: 'white',
        fontSize: 18,
        paddingLeft: 7,
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 15
      },
      row: {
        display: "flex",
        flexDirection: "row"
      }
});