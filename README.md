React NativeにおけるAPI通信のやり方



# fetch(標準のもの)

* fetchでレスポンスオブジェクトに対して json（）関数 で呼ぶ。

```bash
componentDidMount() {
      return fetch('http://localhost:5555/api/talent/profile')
        .then((res) => res.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson
          })
          console.log(this.state.dataSource)
        })
        .catch((error) => {
          console.log(error)
        });
    }
```

# axios

* Axiosはdataプロパティ を呼び出す

```bash
componentDidMount() {
        axios.get('http://localhost:5555/api/talent/projects')
          .then((responseJson) => {
            this.setState({
              isLoadding: false,
              projects: responseJson.data
            })
            console.log(this.state.projects)
          })
          .catch((err) => {
            console.log(err)
          })
        }
```

# MEMO
* Fetchの本体は stringified である必要があって、Axiosのデータには object が含まれている
* axiosはほぼ全てのブラウザに対応している。
<img width="567" alt="スクリーンショット 2020-06-30 23 59 39" src="https://user-images.githubusercontent.com/44771173/86143243-26617680-bb2f-11ea-9339-dc716813bbee.png">

        
