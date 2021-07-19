import React, { Component } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import TabsOptions from "./Navigation/Tabs";
import { Provider as PaperProvider } from 'react-native-paper';


class App extends Component {

  render(){
    return(
      <PaperProvider>
        <NavigationContainer>
          <TabsOptions/>
        </NavigationContainer>
      </PaperProvider>
    )
  }
}

export default App;
