import React from "react";
import { Image, StyleSheet, View } from "react-native";
import MapboxGL from "@rnmapbox/maps";

MapboxGL.setAccessToken(
  "pk.eyJ1IjoiaG9hbmducW00NSIsImEiOiJjbDhnNWZuNDMwM21zNDJvMThlamdmbXVtIn0.aNNmgWRcSvFG5fkj-crXcw"
);

const App = () => {
  const coordinate1 = [106.830403, 10.838832];

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView
          style={styles.map}
          styleURL="https://tiles.goong.io/assets/goong_map_dark.json?api_key=xvi1SSCyoXoDHaL7kWZHxeoR6vUZDfygzvwnqgwQ"
        >
          <MapboxGL.Camera zoomLevel={15} centerCoordinate={coordinate1} />
          <MapboxGL.MarkerView
            coordinate={coordinate1}
            children={
              <Image
                source={{
                  uri: "data:image/png;base64,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",
                }}
                style={{ width: 25, height: 25, borderRadius: 30 }}
              />
            }
            anchor={{ x: 0, y: 0.5 }}
          />
          <MapboxGL.MarkerView
            coordinate={coordinate1}
            children={
              <Image
                source={{
                  uri: "https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/275555020_3002507519974139_299585765480531837_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2OYDsx4DmPQAX-ClV0s&_nc_oc=AQlW7aO7_FtL8F7A9iO46_uMzzoLxjypH0pg4INoiQnuu5xnZEzjpoU7FLl1ro21f7A&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT-U-sStJNeQXuckYbxSjFoTFz8JKv9iqlQjag5oS574tQ&oe=633590AE",
                }}
                style={{ width: 25, height: 25, borderRadius: 30 }}
              />
            }
            anchor={{ x: 1, y: 0.8 }}
          />
        </MapboxGL.MapView>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: "100%",
    width: "100%",
  },
  map: {
    flex: 1,
  },
});
