import { useEffect, useRef, useState } from "react";

import Message from "./components/Message";
import PromptForm from "./components/PromptForm";
import Sidebar from "./components/Sidebar";
import { Menu } from "lucide-react";

function App() {

   const[isLoading, setIsLoading] = useState(false);
   const typingInterval = useRef(null);
   const messagesContainerRef = useRef(null);
   const [isSidebarOpen, setIsSidebarOpen] = useState(() => window.innerWidth > 768);

   const [theme, setTheme] = useState(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
         return savedTheme;
      }

      const prefersDark = window.matchMedia(
         "(prefers-color-scheme: dark)"
      ).matches;
      return prefersDark ? "dark" : "light";
   });



   return (
      <div
         className={`app-container ${
            theme === "light" ? "light-theme" : "dark-theme"
         }`}
      >

         <main className="main-container">
            <header className="main-header">
              <button className="sidebar-toggle">
                <Menu size={18} />
              </button>
            </header>
         </main>

      </div>
   );
}

export default App;
