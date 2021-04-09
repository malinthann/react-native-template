import { Provider } from 'mobx-react';
import * as React from 'react';
import { ActivityIndicator, LogBox, StatusBar } from 'react-native';
// Lazy load component
const Routes = React.lazy(() => import("routes"))

export interface Props { }

export interface State {
	ready: boolean;
}

LogBox.ignoreLogs(['Warning: componentWill']);
function App(stores: any) {
	return React.memo(function Setup() {
		const [ready, setReady] = React.useState<boolean>(false)

		React.useEffect(() => {
			let _mounted: boolean = true
			if (_mounted) {
				StatusBar.setBarStyle('dark-content')
				setReady(true)
			}
			return () => {
				_mounted = false
			}
		}, [])

		if (!ready) { return <ActivityIndicator /> }
		return (
			<Provider {...stores}>
				<React.Suspense fallback={true}>
					<Routes />
				</React.Suspense>
			</Provider>
		);
	})
}

export default App
