import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="font-mono text-xs uppercase tracking-widest text-[#919191] mb-4 mt-12 first:mt-0"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-lg font-semibold text-[#EDEDED] mb-3 mt-8"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="text-[#EDEDED]/90 text-base sm:text-lg leading-relaxed mb-4"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="list-disc pl-5 space-y-3 mb-4" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal pl-5 space-y-3 mb-4" {...props} />
  ),
  li: (props) => (
    <li className="text-[#EDEDED]/90 text-base sm:text-lg leading-relaxed" {...props} />
  ),
  strong: (props) => (
    <strong className="text-[#EDEDED] font-semibold" {...props} />
  ),
  a: (props) => (
    <a
      className="text-[#F59E0B] underline underline-offset-2 hover:text-[#D97706] transition-colors duration-150 ease-out"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-[#F59E0B] pl-4 my-4 text-[#A1A1A1] italic"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="font-mono text-sm bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded px-1.5 py-0.5 text-[#F59E0B]"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-4 overflow-x-auto my-4 font-mono text-sm"
      {...props}
    />
  ),
  hr: () => (
    <hr className="border-t border-[rgba(255,255,255,0.08)] my-8" />
  ),
};
