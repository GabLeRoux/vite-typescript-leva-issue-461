# Example vite repository to reproduce an issue

https://github.com/pmndrs/leva/issues/461

```bash
npx create-vite-app --template react-ts vite-typescript-leva-issue-461 
cd vite-typescript-leva-issue-461 
git init 
git add . 
git commit -m "initial commit"
npm i leva --save
git add .
gcmsg "npm i leva"
# Update App.ts by adding leva and push to github
```

## How to reproduce

```bash
npm i
npm run build
```

🔥
