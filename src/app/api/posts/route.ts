import { NextResponse } from "next/server";

const posts = [
  {
    id: 1,
    title: "Intégration d'un MCP dans une application React",
    content:
      "La démocratisation de l'IA via les LLM a rendu l'accès à tout type d'information extrêmement facile et rapide...",
    author: "Hugo",
    slug: "integration-mcp-dans-une-app-react",
    featured: true,
    date: new Date("2025-01-01"),
  },
  {
    id: 2,
    title:
      "Doter votre site d'un agent IA sur mesure, c'est simple (et c'est souvent par là que tout commence)",
    content:
      "Découvrez comment créer un agent IA personnalisé pour votre site web. Une solution simple et efficace pour...",
    author: "Baptiste",
    slug: "agent-ia-site-web",
    featured: false,
    date: new Date("2025-01-01"),
  },
  {
    id: 3,
    title: "TanStack Start: la relève des frameworks React ?",
    content:
      "Il y a quelques semaines de ça, une faille de sécurité a été découverte dans NextJS au niveau de la gestion...",
    author: "Hugo",
    slug: "tanstack-start-react-frameworks",
    featured: false,
    date: new Date("2025-01-01"),
  },
  {
    id: 4,
    title: "Comment fonctionne un RAG ?",
    content:
      "Découvrez comment le Retrieval-Augmented Generation (RAG) révolutionne les modèles de langage...",
    author: "Baptiste et Colin",
    slug: "comment-fonctionne-rag",
    featured: false,
    date: new Date("2025-01-01"),
  },
  {
    id: 5,
    title: "Mon premier projet en React : Picksale",
    content:
      "Dans cet article, je vais vous parler de Picksale, le tout premier projet de ma carrière...",
    author: "Han",
    slug: "premier-projet-react-picksale",
    featured: false,
    date: new Date("2025-01-01"),
  },
  {
    id: 6,
    title: "Lynx: le remplaçant de React Native ?",
    content:
      "Sorti en open source il y a maintenant plusieurs semaines, Lynx est un nouvel arrivant dans le monde du...",
    author: "Hugo",
    slug: "lynx-remplacant-react-native",
    featured: false,
    date: new Date("2025-01-01"),
  },
  {
    id: 7,
    title: "View Transition API et son intégration dans NextJS",
    content:
      "Découvrez comment NextJS intègre l'API View Transition de React pour créer des animations CSS fluides. Un...",
    author: "Quentin",
    slug: "view-transition-api-nextjs",
    featured: false,
    date: new Date("2025-01-01"),
  },
];

export async function GET() {
  return NextResponse.json(posts);
}
