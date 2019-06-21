import React, { Component } from "react";
import Section from '../Section';
import Divider from '../Divider';
import ItemBlog from '../ItemBlog';

const blog = [
  {
    src: 'https://manualdousuario.net/wp-content/uploads/2019/06/Deltan-vazamento-Telegram-960x540.png',
    title: 'Como as conversas da Lava Jato no Telegram podem ter sido vazadas ao The Intercept Brasil',
    url: 'https://manualdousuario.net/lava-jato-the-intercept-telegram-vazamento/',
    description: 'Neste domingo (9), o site The Intercept Brasil publicou uma série de reportagens revelando diálogos em que o procurador do Ministério Público Federal (MPF), Deltan Dallagnol, e o ex-juiz federal Sergio Moro trocavam informações e colaboravam nos bastidores quando integravam a força-tarefa da Lava Jato. A origem das conversas, desenroladas no aplicativo Telegram, teria sido uma fonte anônima, e o material, segundo o jornalista e fundador da publicação, Glenn Greenwald, é vasto — “um vazamento muito maior do que o do caso Snowden”, disse à Folha. ...'
  },
  {
    src: 'https://manualdousuario.net/wp-content/uploads/2019/06/Deltan-vazamento-Telegram-960x540.png',
    title: 'Como as conversas da Lava Jato no Telegram podem ter sido vazadas ao The Intercept Brasil',
    url: 'https://manualdousuario.net/lava-jato-the-intercept-telegram-vazamento/',
    description: 'Neste domingo (9), o site The Intercept Brasil publicou uma série de reportagens revelando diálogos em que o procurador do Ministério Público Federal (MPF), Deltan Dallagnol, e o ex-juiz federal Sergio Moro trocavam informações e colaboravam nos bastidores quando integravam a força-tarefa da Lava Jato. A origem das conversas, desenroladas no aplicativo Telegram, teria sido uma fonte anônima, e o material, segundo o jornalista e fundador da publicação, Glenn Greenwald, é vasto — “um vazamento muito maior do que o do caso Snowden”, disse à Folha. ...'
  },
]

class Blog extends Component {
  constructor(props){
    super(props)
    this.state = { ...props }
  }
  render() {
    return (
      <Section className="page-section" id="blog">
        {/* <!-- About Section Heading --> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Blog</h2>
        <Divider className="divider-light"/>
        {
          this.state.blog.map( (item, index) =>{
            return <ItemBlog key={index} item={item}></ItemBlog>
          })
        }
      </Section>
    );
  }
}

export default Blog;
