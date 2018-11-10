# ionic4-kids-quiz

Original code from https://www.joshmorony.com/create-a-data-driven-quiz-app-in-ionic-2-part-1/

このページは、上記サイトをほぼ写経して、ionic4アプリ作成の練習を行っているものです。



src/environments/environment.ts を作成して頂き、ご自身のfirebaseのAPIキーその他をコピペしてください。

```javascript:environment.ts
// <>となっている部分は、自分のapiKeyを入力
export const environment = {
  production: false,
  config: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};
```

## インストール方法

`git clone https://github.com/adash333/ionic4-kids-quiz.git`

Create a new file "src/environments/environment.ts"

Run `npm install` to install all dependencies.

Run `ionic serve` to start the development environment.


作成経過は以下に記載しています。

http://i-doctor.sakura.ne.jp/dokuwiki/doku.php/z_blog/2018/181109_ionic4_quiz



## 開発環境

```
Windows 8.1 Pro
VisualStudioCode
git version 2.16.1.windows.4

Node v8.12.0
npm 6.4.1
Ionic (Ionic CLI) 4.3.1
Ionic Framework @ionic/angular 4.0.0-beta.15
```
