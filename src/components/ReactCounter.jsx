import { useState } from 'react';

export default function ReactCounter() {
	const [count, setCount] = useState(0);
	const add = () => setCount((i) => i + 1);
	const subtract = () => setCount((i) => i - 1);

	return (
		<div className='container'>
			<div className='counter'>
				<button className='counter-button' onClick={subtract}>
					-
				</button>
				<pre>{count}</pre>
				<button className='counter-button' onClick={add}>
					+
				</button>
			</div>
		</div>
	);
}
