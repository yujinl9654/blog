'use client'; //TypeError: Super expression must either be null or a function 해결을 위해

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

type Props = {
  content: string;
};
export default function MarkdownViewer({ content }: Props) {
  return (
    <ReactMarkdown
      className="prose lg:prose-xl max-w-none"
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const { ref, children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || '');

          return match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag="div"
              {...rest}
              style={materialDark}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
        img: (image) => (
          <Image
            className="w-full max-h-60 object-cover"
            src={image.src || ''}
            alt={image.alt || ''}
            width={500}
            height={350}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
