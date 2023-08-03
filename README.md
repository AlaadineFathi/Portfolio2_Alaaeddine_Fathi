This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Dans notre projet Next.js, Redux est une bibliothèque d'état prévisible utilisée pour gérer l'état global de l'application. Il fournit un moyen centralisé de stocker et de gérer les données de l'application, ce qui facilite la communication entre les différents composants et pages.

Next.js est un framework de développement Web basé sur React, et il facilite la création d'applications Web modernes côté client et côté serveur. Cependant, React lui-même ne fournit pas d'outil intégré pour gérer l'état global de l'application. C'est là que Redux intervient.

Redux suit le principe de l'architecture Flux et propose un flux de données unidirectionnel pour gérer l'état. Voici comment il fonctionne généralement dans un projet Next.js :

Store: Le cœur de Redux est le "store", qui est un objet JavaScript qui stocke l'état global de l'application. Le store détient l'ensemble des données que l'application utilise, et il est unique pour toute l'application.

Actions: Les actions sont des objets JavaScript

le code fournit deux actions :

1. `ADD` : Une action de type "ADD" utilisée pour ajouter un nouvel élément (témoignage) à l'état global de l'application. L'action a un payload qui contient les propriétés du nouvel élément telles que le nom, l'email, le message et le genre.

2. `DELETE` : Une action de type "DELETE" utilisée pour supprimer un élément (témoignage) de l'état global de l'application. L'action a un payload qui contient l'id de l'élément à supprimer.

Ces actions peuvent être utilisées dans les composants pour déclencher des mises à jour de l'état global via le `dispatch`. Lorsqu'une action est émise avec le `dispatch`, elle est traitée par un reducer qui mettra à jour l'état de l'application en fonction de l'action émise.

un reducer qui gère l'état global de l'application en fonction des actions ADD et DELETE émises. L'état initial contient une liste d'éléments vide, et le reducer met à jour cette liste en ajoutant ou en supprimant des éléments selon l'action reçue.
