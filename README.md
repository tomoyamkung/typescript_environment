# typescript_environment

TypeScript を webpack と組み合わせて使用する最小構成のパッケージ。

コンテナに入って、TypeScript をコンパイルして実行する：

```sh
$ docker exec -it typescript_sample bash
root@1df468d8d998:/usr/src/app# npm run build


> typescript-sample@1.0.0 build /usr/src/app
> webpack

asset index.js 909 bytes [compared for emit] (name: main)
./src/index.ts 44 bytes [built] [code generated]
webpack 5.1.3 compiled successfully in 3362 ms

root@1df468d8d998:/usr/src/app# node dist/index.js
Hello, world!
```
