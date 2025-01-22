This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run build
npm run deploy


echo > dist/.nojekyll && git add -f dist/.nojekyll && git commit -m "Add .nojekyll after deployment" && git push origin gh-pages --force
```

Because this is hosted on github there is a requirement to
apply .nojekyll to ensure access to resoureces.
The oneliner above resolves the issue but its dirty.
Requires a better solution. 