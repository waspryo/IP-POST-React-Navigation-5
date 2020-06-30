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
            dataSource: responseJson.main_post_type[0]
          })
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
              projects: responseJson.data.projects
            })
            console.log(this.state.projects)
          })
          .catch((err) => {
            console.log(err)
          })
        }
```
        
        
        
分かりやすくてカッコイイ名前をつける（今回は"hoge"という名前をつける）
 
"hoge"が何かを簡潔に紹介する
 
# DEMO
 
"hoge"の魅力が直感的に伝えわるデモ動画や図解を載せる
 
# Features
 
"hoge"のセールスポイントや差別化などを説明する
 
# Requirement
 
"hoge"を動かすのに必要なライブラリなどを列挙する
 
* huga 3.5.2
* hogehuga 1.0.2
 
# Installation
 
Requirementで列挙したライブラリなどのインストール方法を説明する
 
```bash
pip install huga_package
```
 
# Usage
 
DEMOの実行方法など、"hoge"の基本的な使い方を説明する
 
```bash
git clone https://github.com/hoge/~
cd examples
python demo.py
```
 
# Note
 
注意点などがあれば書く
 
# Author
 
作成情報を列挙する
 
* 作成者
* 所属
* E-mail
 
# License
ライセンスを明示する
 
"hoge" is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).
 
社内向けなら社外秘であることを明示してる
 
"hoge" is Confidential.
