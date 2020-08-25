import React from 'react';
import { Provider } from 'mobx-react';
import { ActivityIndicator, StatusBar, LogBox } from 'react-native';
import App from '../app/routes';

export interface Props { }

export interface State {
	ready: boolean;
}
LogBox.ignoreLogs(['Warning: componentWill']);
function app(stores: any) {
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

		if (!ready) { <ActivityIndicator /> }
		return (
			<Provider {...stores}>
				<App />
			</Provider>
		);
	})
}

export default app
