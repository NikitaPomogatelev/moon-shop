export default function fetchData(): Promise<void> & { cancel: () => void } {
	let timer: ReturnType<typeof setTimeout>;

	const promise = new Promise<void>((resolve, reject) => {
		console.log('API start');
		timer = setTimeout(() => {
			console.log('API ready');
			resolve();
		}, 1000);
	}) as Promise<void> & { cancel: () => void };

	promise.cancel = () => clearTimeout(timer);

	return promise;
}
