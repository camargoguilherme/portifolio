import React, { Component } from "react";
import Section from '../Section';
import Divider from '../../components/Divider';
import ItemBlog from '../../components/ItemBlog';
import './styles.css';

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = { ...props }
  }
  render() {
    return (
      <Section className="page-section" id="blog">
        {/* <!-- About Section Heading --> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Blog</h2>
        <Divider className="divider-light" />
        <content className="blog-content">
          {
            this.state.blog.map((item, index) => {
              return <ItemBlog key={index} item={item}></ItemBlog>
            })
          }
        </content>
      </Section>
    );
  }
}

export default Blog;
