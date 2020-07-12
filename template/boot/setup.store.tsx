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
	return class Setup extends React.Component<Props, State> {
		constructor(props: any) {
			super(props);
			this.state = {
				ready: true, //TODO: default false when connection check
			};
		}

		componentDidMount() {
			StatusBar.setBarStyle('dark-content');
		}

		render() {
			if (!this.state.ready) {
				return <ActivityIndicator />;
			}
			return (
				<Provider {...stores}>
					<App />
				</Provider>
			);
		}
	};
}

export default app
