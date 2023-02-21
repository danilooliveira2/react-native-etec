import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


//Instalar o Pacote de Icones Nativos
//npm i react-native-vector-icons


function ButtonWithIcon(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Icon.Button
        // name={props.icone}
        name="forward"
        size={16}
        color="blue"
      />
    </TouchableOpacity>
  );
}

export default ButtonWithIcon;
