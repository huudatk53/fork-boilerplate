import React, { useContext } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

import AppContext from '@/AppContext';

const MarkdownStyled = styled.div`
font-family: "Avenir Next", Helvetica, Arial, sans-serif;
  padding:1em;
  margin:auto;
  width:100%;
  background:#fefefe;
  color: #000000;
  margin-bottom: 0.25rem;
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }
  
  h1 {
    color: #000000;
    font-size: 28pt;
  }
  
  h2 {
    border-bottom: 1px solid #CCCCCC;
    color: #000000;
    font-size: 24px;
  }
  
  h3 {
    font-size: 18px;
  }
  
  h4 {
    font-size: 16px;
  }
  
  h5 {
    font-size: 14px;
  }
  
  h6 {
    color: #777777;
    background-color: inherit;
    font-size: 14px;
  }
  
  hr {
    height: 0.2em;
    border: 0;
    color: #CCCCCC;
    background-color: #CCCCCC;
  }
  
  p, blockquote, ul, ol, dl, li, table, pre {
    margin: 15px 0;
  }

  ul > li {
    list-style-type: circle;
    margin: 15px;
  }
  
  img {
    max-width: 100%;
  }
  
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  table, th, td {
    border: 1px solid #EAEAEA;
    
    border-radius: 3px;
    padding: 5px;
  }
  
  tr:nth-child(even) {
    background-color: #F8F8F8;
  }
  
  a, a:visited {
    color: #4183C4;
    background-color: inherit;
    text-decoration: none;
  }
  
  #message {
    border-radius: 6px;
    border: 1px solid #ccc;
    display:block;
    width:100%;
    height:60px;
    margin:6px 0px;
  }
  
  button, #ws {
    font-size: 10pt;
    padding: 4px 6px;
    border-radius: 5px;
    border: 1px solid #bbb;
    background-color: #eee;
  }
  
  code, pre, #ws, #message {
    font-family: Monaco, monospace;
    font-size: 10pt;
    border-radius: 3px;
    background-color: #F8F8F8;
    color: inherit;
  }
  
  code {
    border: 1px solid #EAEAEA;
    margin: 0 2px;
    padding: 0 5px;
    color: #ea3232;
  }
  
  pre {
    border: 1px solid #CCCCCC;
    overflow: auto;
    padding: 4px 8px;
  }
  
  pre > code {
    border: 0;
    margin: 0;
    padding: 0;
  }
  
  #ws { background-color: #f8f8f8; }
  
  .send { color:#77bb77; }
  .server { color:#7799bb; }
  .error { color:#AA0000; }
`
const CodeBlock = ({ language, value }) => {
  const { isDark } = useContext(AppContext);

  return (
    <SyntaxHighlighter
      language={language}
      style={isDark ? okaidia : coy}
    >
      {value}
    </SyntaxHighlighter>
  );
};

const Markdown = ({ md }) => {
  return (
    <MarkdownStyled className="guide-md">
      <ReactMarkdown
        source={md}
        renderers={{ code: CodeBlock }}
      />
    </MarkdownStyled>
  );
};

export default Markdown;
