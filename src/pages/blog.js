import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

// const BlogPage = () => {
//     return (
//         <Layout pageTitle="My Blog Posts">
//             <p>My cool posts will go in here</p>
//         </Layout>
//     )
// }

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {
                    data.allFile.nodes.map(node => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const ff = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
`


export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage