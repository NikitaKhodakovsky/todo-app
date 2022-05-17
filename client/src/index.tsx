import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { ThemeManager, ThemeProvider } from 'react-theme-lib'
import ReactDOM from 'react-dom/client'

import './sass/main.scss'

import { App } from './components/App'

const client = new ApolloClient({
	uri: 'http://localhost:4200/graphql',
	cache: new InMemoryCache()
})

const manager = new ThemeManager({
	htmlElement: document.getElementById('body') as HTMLElement
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<ThemeProvider manager={manager}>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</ThemeProvider>
)
