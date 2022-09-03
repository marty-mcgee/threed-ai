import { useEffect } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { setState } from 'src/stores/store'
import Header from 'src/components/seo/config'
import Dom from 'src/components/layout/dom'
import 'src/styles/index.css'

// ==============================================================
// CUSTOM IMPORT (SSR true|false)
const LCanvas = dynamic(() => import('src/components/layout/canvas'), {
  ssr: true,
})

// ==============================================================
// GRAPHQL -- APOLLO (SERVER, NOT CLIENT)
// const doBootApollo = true

// if (doBootApollo) {
//   const { ApolloServer } = require('apollo-server')
//   const gql = require('graphql-tag')

//   const typeDefs = gql`
//     type Query {
//       word:  String
//     }
//   `

//   const resolvers = {
//     Query: {
//       word: () => "HEY HEY HEY"
//     }
//   }

//   const schema = new ApolloServer({ typeDefs, resolvers })

//   schema.listen({ port: process.env.PORT }).then(({ url }) => {
//     console.debug(`schema ready at ${url}`)
//   })
// }

// ==============================================================
// NEXT APP
const App = ({ Component, pageProps = { title: 'index' } }) => {
  const router = useRouter()

  useEffect(() => {
    setState({ router })
  }, [router])

  return (
    <>
      <Header title={pageProps.title} />
      <Dom>
        <Component {...pageProps} />
      </Dom>
      {Component?.r3f && <LCanvas>{Component.r3f(pageProps)}</LCanvas>}
    </>
  )
}

export default App
