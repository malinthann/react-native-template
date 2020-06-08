import config from "./config.store";
import app from "./setup.store";

function boot() {
	const stores = config();
	return app(stores);
}
export default boot

