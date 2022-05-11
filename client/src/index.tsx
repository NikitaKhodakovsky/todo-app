import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import ReactDOM from 'react-dom/client'

import './sass/main.scss'

import { App } from './components/App'
import { ThemeManager, ThemeProvider } from './lib/theme'

const client = new ApolloClient({
	uri: 'http://localhost:4200/graphql',
	cache: new InMemoryCache()
})

const manager = new ThemeManager({
	htmlElement: document.getElementById('body') as HTMLElement
})

const rootElement = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(rootElement)
root.render(
	<ThemeProvider manager={manager}>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</ThemeProvider>
)
