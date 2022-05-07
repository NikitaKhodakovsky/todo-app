import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import ReactDOM from 'react-dom/client'

import './sass/main.scss'

import { App } from './components/App'

const client = new ApolloClient({
	uri: 'http://localhost:4200/graphql',
	cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
)
