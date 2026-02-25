import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI Resume Analyzer" },
    { name: "description", content: "Smart resume analysis powered by AI" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
           <div className="page-heading">
               <h1>Track Your Applications & Resume Ratings</h1>
               <h2>Get AI-powered insights to improve your job applications</h2>
           </div>
      </section>
  </main>
}
