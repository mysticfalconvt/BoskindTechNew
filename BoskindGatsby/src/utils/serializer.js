import urlBuilder from '@sanity/image-url';
import React from 'react';
import SyntaxHighligher from 'react-syntax-highlighter';
import {
  sunburst,
  atelierCaveDark,
  dark,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';

const urlFor = (source) =>
  urlBuilder({ projectId: 'jzq9n05y', dataset: 'production' }).image(source);

const serializer = {
  types: {
    image: (props) => (
      <figure>
        <img
          src={urlFor(props.node.asset).width(600).url()}
          alt={props.node.alt}
        />
      </figure>
    ),
    link: ({ mark, children }) => {
      // Read https://css-tricks.com/use-target_blank/
      const { blank, href } = mark;
      return blank ? (
        <a href={href} target="_blank" rel="noopener">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    },
    code: ({ node = {} }) => {
      const { code, language } = node;
      if (!code) {
        return null;
      }
      return (
        <SyntaxHighligher stlye={sunburst} language={language || 'js'}>
          {code}
        </SyntaxHighligher>
      );
    },
  },
};
export default serializer;
