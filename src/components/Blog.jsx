import React from "react";
import { Section } from "../Utilities";
import styled from "styled-components";
import { colors, H2 } from "../Utilities";
import blog1 from "../assets/Github-blog.jpg";
import webpack from "../assets/webpack.jpg";

const BlogContainer = styled.div`
  width: 100vw;
  height: max-content;
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    justify-content: center;
    align-items: center;
  }
`;

const BlogCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding-top: 0.8rem;
  background-color: ${colors.beige200};
  border-radius: 1.5rem;
  color: ${colors.nightblack};
  width: 30vw;
  @media (max-width: 1024px) {
    width: 32vw;
  }
  @media (max-width: 600px) {
    width: 75vw;
    height: max-content;
  }
  @media (max-width: 400px) {
    width: 90vw;
  }
`;

const BlogImage = styled.img`
  width: 90%;
  position: relative;
  border-radius: 1.5rem;
  object-fit: contain;
  margin-top: 0.5rem;
  &:hover {
    border: solid 2px transparent;
  }
`;

const BlogLink = styled.a`
  text-decoration: none;
  width: max-content;
  &:hover {
    border: solid 2px transparent;
    transform: translateY(-1%) translateX(-1%);
  }
  &:active {
    opacity: 0.8;
  }
`;

const Blog = () => {
  return (
    <Section id="blog">
      <div style={{ display: "flex", padding: "1rem" }}>
        <H2 style={{ color: colors.olive }}>Blog</H2>
        <H2 style={{ color: colors.hampton, transform: "translateX(-97%)" }}>
          Blog
        </H2>
      </div>

      <BlogContainer>
        <BlogLink href="https://medium.com/@nishr09/all-you-need-to-know-about-github-pages-to-deploy-your-first-static-website-33fb2d3b92ef">
          <BlogCard>
            <BlogImage src={blog1} />
            <p style={{ padding: "1rem" }}>
              All you need to know about GitHub Pages: to deploy your first static
              website.
            </p>
          </BlogCard>
        </BlogLink>
        <BlogLink href="https://blog.nishachauhan.studio/a-detailed-guide-to-webpack-and-module-bundlers-in-general">
          <BlogCard>
            <BlogImage src={webpack} />
            <p style={{ padding: "1rem" }}>
              A detailed guide to webpack and module bundlers in general.
            </p>
          </BlogCard>
        </BlogLink>
      </BlogContainer>
    </Section>
  );
};

export default Blog;
