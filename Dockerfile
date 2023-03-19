FROM node:lts-alpine

# 静的コンテンツを配信するシンプルな http サーバをインストールする
RUN yarn global add http-server

# カレントワーキングディレクトリとして 'app' フォルダを指定する
WORKDIR /app

# `package.json` と `package-lock.json` （あれば）を両方コピーする
COPY package*.json ./

COPY yarn.lock ./

# プロジェクトの依存ライブラリをインストールする
RUN yarn install

# カレントワーキングディレクトリ(つまり 'app' フォルダ)にプロジェクトのファイルやフォルダをコピーする
COPY . .

# 本番向けに圧縮しながらアプリケーションをビルドする
RUN yarn build

EXPOSE 8080
CMD [ "http-server", "dist" ]