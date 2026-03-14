import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <nav 
          className="flex flex-col md:flex-row justify-between px-5 py-2 sticky"
        >
          <div>
            Movie Site
          </div>
          <div>
            
          </div>
          <ul
            className="flex gap-8"
          >
            <li>Home</li>
            <li>Genre</li>
            <li>Latest</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
