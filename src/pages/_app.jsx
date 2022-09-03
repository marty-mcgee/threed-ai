import { useRouter } from 'next/router'
import { setState } from '~/stores/store'
import { useEffect } from 'react'
import Header from '~/components/seo/config'
import Dom from '@/components/layout/dom'
import '@/styles/index.css'
import dynamic from 'next/dynamic'

// ==============================================================
// CUSTOM IMPORT (SSR true|false)
const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
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
