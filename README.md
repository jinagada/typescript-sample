# TypeScript 샘플
- URL : https://www.typescripttutorial.net/typescript-tutorial/typescript-array-type/
## 테스트를 위한 프로그램 버전
1. Node.js : v19.5.0
2. npm : 9.3.1
3. typescript 설치
```shell
$ npm install -g typescript
$ tsc --v
Version 5.1.6
```
4. ts-node 설치
```shell
$ npm install -g ts-node
```

## 추가 설치 프로그램
1. WebStorm에 “Run Configuration for TypeScript” 플러그인 설치
2. live-server대신 WebStorm에 내장된 HTML Preview를 사용

## Node.js 에서 TypeScript 설정
1. TypeScript 컴파일러 설정
```shell
$ mkdir src
$ mkdir build
$ tsc --init
```
2. tsconfig.json 파일에서 디렉토리 설정값 변경
```text
"outDir": "./build"
"rootDir": "./src"
```
3. Node.js 모듈 설치
```shell
$ npm init --yes
$ npm install --g nodemon concurrently
```
4. package.json 파일의 scripts 부분 변경
- AS-IS
```text
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
- TO-BE
```text
  "scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/app.js",
    "start": "concurrently npm:start:*"
  },
```
5. pachage.json 파일의 main 부분 변경
- AS-IS
```text
  "main": "index.js",
```
- TO-BE
```text
  "main": "app.js",
```
6. app.js 실행
```shell
$ npm start
```
