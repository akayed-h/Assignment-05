import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechGrid from "./components/TechGrid";
import YourStack from "./components/YourStack";


function App() {
  
  const [technologies, setTechnologies] = useState([]);
  
  const [stack, setStack] = useState([]);
  
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load technology data.");
        setLoading(false);
      });
  }, []);

  const handleAdd = (tech) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);

    if (alreadyAdded) {
      toast.warn(`${tech.name} is already in your stack.`);
      return;
    }

    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const handleRemove = (id) => {
    const removed = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (removed) toast.info(`${removed.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />

      <section className="container mx-auto my-16 px-6">
        <div className="space-y-2 mb-10">
          <h2 className="text-4xl font-bold text-slate-900">
            Explore the <span className="brand-gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-9">
            <TechGrid
              technologies={technologies}
              stack={stack}
              onAdd={handleAdd}
              loading={loading}
            />
          </div>

          <div className="lg:col-span-3">
            <YourStack
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </section>

      

      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}

export default App;
