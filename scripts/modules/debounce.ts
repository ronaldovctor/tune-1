function debounce(callback: Function, timer: number) {
	let interval: any
	return function () {
		interval && clearTimeout(interval)
		interval = setTimeout(() => {
			callback()
		}, timer)
	}
}

export default debounce
