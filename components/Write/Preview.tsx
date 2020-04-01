import { useEffect, createRef } from 'react';
import styled from 'styled-components';
import showdown from 'showdown';
import '../../lib/styles/github-markdown.css';
import { breakpoints } from '../../lib/styles/responsive';
import Prism from "prismjs";
import { colors } from '../../lib/styles/global';
import 'prismjs/themes/prism-okaidia.css';

interface PreviewProps {
  inputValue: string;
  onChange: (html: string) => void;
  mdRef: React.RefObject<HTMLDivElement>;
}
export default function Preview({ inputValue, mdRef, onChange }: PreviewProps) {
  const converter = new showdown.Converter();
  console.log(inputValue);
  const html = converter.makeHtml(inputValue);
  useEffect(() => {
    onChange(html);
    Prism.highlightAll();
  }, [html]);

 
  return (
    <>
      <Wrapper ref={mdRef}>
        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }}>

        </div>
      </Wrapper>
  </>);
}

const Wrapper = styled.div`
  padding: 3rem 1rem;
  width: calc(50% - 2rem);
  background-color: white;
  overflow-y: scroll;
  word-break: break-all;
  white-space: normal;
  margin-left: 1px;
  line-height: 1.4;
  .md {
    line-height: 2.4rem;
  p, ol, ul, dl {
    margin-bottom: 1.6rem;
  }
  li {
    display: list-item;
    text-align: -webkit-match-parent;
    list-style-position: inside;
    list-style-type: disc;
  }
  pre {
    border: none;
    margin-bottom: 1.6rem;
    code {
      font-size: 1.3rem;
      border-radius: .8rem;
      padding: 1.6rem;
    }
  }
  iframe, img, embed, object, video {
    max-width: 90%;
    display: block;
    margin: 0 auto;
    margin-top: 4.8rem;
    margin-bottom: 4.8rem;
    pointer-events: none;
  }
  blockquote {
    color: ${colors.gray5};
    margin-top: 3.2rem;
    margin-bottom: 3.2rem;
    padding: 1.6rem 1.5rem 1.6rem 1.5rem;
    border-left: 0.8rem ${colors.gray2} solid;
    @media screen and (max-width: ${breakpoints.small}) {
      font-size: 1.6rem;
    }
    :first-child {
      margin: 0;
    }
    :last-child {
      margin: 0;
    }
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    margin: 1.6rem 0;
  }
  td,
  th {
    padding: 0
  }
  p,
  ol,
  ul,
  dl {
    line-height: 2.8rem;
    margin-bottom: 1.6rem;
  }
  p + p {
    margin-top: 2.4rem;
  }
  li p {
    display: inline;
    line-height: 2.8rem;
    font-weight: 400;
  }
  ul > li,
  li > ul,
  li > ol {
    margin-bottom: 0;
    margin-left: 1.6rem
  }
  ul {
    list-style-position: inside;
    list-style-type: disc;
  }
  ol {
    display: block;
    list-style-type: decimal;
    margin-block-start: 1.6rem;
    margin-block-end: 1.6rem;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 4rem;
  }
  p, li {
    @media screen and (max-width: ${breakpoints.small}) {
      font-size: 1.6rem;
    }
  }
  hr {
    border: 0;
    border-top: .1rem solid rgba(0, 0, 0, 0.1);
    border-bottom: .1rem solid #fff;
    margin: 1.6rem 0
  }
  a {
    color: ${colors.gray7};
    text-decoration: none
  }
  strong {
    color:  ${colors.gray9};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 2.43rem;
    color: ${colors.gray9};
    font-weight: 700;
    margin-top: 3.6rem;
    margin-bottom: 1.6rem;
    & code {
      font-weight: 600;
    }
  }
  h1 a,
  h2 a,
  h3 a,
  h4 a,
  h5 a,
  h6 a {
    color:  ${colors.gray8};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    code {
      font-size: 1.3rem;
      padding: .326rem .39rem;
      border-radius: .3rem;
      background-color: rgba(27, 31, 35, .05);
      border: .1rem solid ${colors.markdownCodeColor};
      color: ${colors.markdownCodeColor};
      margin: 0 .39rem;
    }
  }
  h2{
    margin-top: 7rem;
    margin-bottom: 3rem;
    font-size: 3.4rem;
    line-height: 4.4rem;
  }
  h3{
    font-size: 2.1rem;
    margin-top: 4.6rem;
    margin-bottom: 2rem;
  }
  tr {
    border-top: .1rem solid ${colors.whiteL1};
    background: ${colors.whiteColor};
  }
  th,
  td {
    padding: .6rem 1.3rem;
    border: .1rem solid ${colors.whiteL2};
  }
  table tr:nth-child(2n) {
    background: ${colors.whiteL3};;
  }
  }
`;
