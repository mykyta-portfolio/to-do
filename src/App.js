import './App.css';
import React from 'react';
import videobg from "./videobg.mp4"


function App() {
	//localStorage.removeItem("data")
	let data = JSON.parse(localStorage.getItem("data"))
	if (data === null) data = []
	const [items, setItems] = React.useState(data)
	const inputEl = React.useRef(null);

	const handleOnAdd = () => {
		console.log("add done")
		setItems([...items, inputEl.current.value])
		localStorage.setItem("data", JSON.stringify(items))
	}

	const remove = (index) => {
		console.log("remove done")
		const tempItems = [...items];
		tempItems.splice(index, 1);
		setItems(tempItems)

	}

	React.useEffect(() => {
		console.log("use effect")
		const temp = JSON.stringify(items)
		localStorage.setItem("data", temp)
	}, [items])


	return (
		<>

			<video autoPlay muted loop id="myVideo">
				<source src={videobg} type="video/mp4" />
			</video>
			<div className="todo">
				<h1>Список важливих завдань</h1>
				<div className="form">
					<input ref={inputEl} type="text" />
					<button onClick={handleOnAdd}>Додати</button>
				</div>
				<ul>
					{items.map((item, index) => (
						<li>
							<span>
								{item}
							</span>
							<span class="delete" onClick={() => { remove(index) }}>
								<i class="fa fa-trash"></i>
							</span>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default App;
