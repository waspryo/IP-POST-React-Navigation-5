React NativeにおけるAPI通信のやり方

fetch(標準のもの)

  componentDidMount() {
    return fetch('http://localhost:5555/api/talent/profile')
      .then((res) => res.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.main_post_type[0]
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }
