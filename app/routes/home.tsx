import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/Navbar";
import { resumes } from "~/constants";
import { resume } from "react-dom/server";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/components/lib/puter";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI Resume Analyzer" },
    { name: "description", content: "Smart resume analysis powered by AI" },
  ];
}

export default function Home() {
  const {auth} = usePuterStore();
  const navigate = useNavigate();

  useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])



  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
           <div className="page-heading py-16">
               <h1>Track Your Applications & Resume Ratings</h1>
               <h2>Get AI-powered insights to improve your job applications</h2>
           </div>
      </section>


      {resumes.length > 0 && (
        <div className="resumes-section">
            {resumes.map(resume => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
        </div>
      )}
    
  </main>
}
