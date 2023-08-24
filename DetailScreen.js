const DetailScreen = ({ route }) => {
    const { level } = route.params;
  
    return (
      <View>
        <Text>Detail Screen for {level} Level</Text>
      </View>
    );
  };

  export default DetailScreen