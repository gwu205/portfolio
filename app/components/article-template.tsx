import { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

const ArticleTemplate: React.FC<WrapperProps> = ({ children }) => {
  const year = new Date().getFullYear();
  return (
    <main className="article">
      <nav>
        <a className="text-slate-500 hover:text-slate-700" href="/">
          〱 Back to Home
        </a>
      </nav>
      {children}
      <footer className="flex flex-row justify-between mt-20 text-slate-400 text-sm">
        <a className="hover:text-slate-700" href="/">
          〱 Back
        </a>
        <span>© Copyright Geoffrey Wu {year}</span>
      </footer>
    </main>
  );
};

export default ArticleTemplate;
