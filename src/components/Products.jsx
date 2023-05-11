// import { Link } from "react-router-dom";
// import ProductsItems from "./ProductsItems";

// const Products = () => {
// 	return (
// 		<div className="container">
// 			{ProductsItems.map((item) => (
// 				<div className="ProductsItems" key={item.id} onClick={() => handleClick(item.kategori)}>
// 					{item.kategori}
// 				</div>
// 			))}
// 		</div>
// 	);
// };

// export default Products;

import ProductsItems from "./ProductsItems";
import { useState } from "react";

const Products = () => {
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [selectedName, setSelectedName] = useState(null);

	const handleNameClick = (name) => {
		setSelectedName(name);
	};

	const handleBackClick = () => {
		if (selectedName !== null) {
			setSelectedName(null);
			return;
		} else if (selectedCategory !== null) {
			setSelectedCategory(null);
		}
	};

	return (
		<div className="home">
			{selectedCategory !== null && (
				<div className="cursor" onClick={() => handleBackClick()}>
					<svg viewBox="0 0 24 24">
						<path d="M18 7.41L16.59 6 12 10.59 7.41 6 6 7.41 10.59 12 6 16.59 7.41 18 12 13.41 16.59 18 18 16.59 13.41 12 18 7.41z" />
					</svg>
				</div>
			)}
			<div className="container">
				{selectedCategory === null && (
					<div className="categories">
						{ProductsItems.map((category) => (
							<div
								key={category.id}
								className="ProductsItems"
								onClick={() => setSelectedCategory(category.kategori)}
							>
								{category.kategori}
							</div>
						))}
					</div>
				)}

				{selectedCategory !== null && selectedName === null && (
					<div className="names">
						{ProductsItems.find(
							(category) => category.kategori === selectedCategory
						).list.map((nameObj) => (
							<div
								key={nameObj.name}
								className="ProductsItems"
								onClick={() => handleNameClick(nameObj.name)}
							>
								{nameObj.name}
							</div>
						))}
					</div>
				)}

				{selectedName !== null && (
					<div className="items">
						{ProductsItems.find(
							(category) => category.kategori === selectedCategory
						)
							.list.find((nameObj) => nameObj.name === selectedName)
							.items.map((item) => (
								<div key={item} className="item">
									<div className="left-column">
										<img src="./kahvederyasi.jpg" alt="ürün resmi" />
									</div>
									<div className="right-column">
										<div className="product-name">{item}</div>
										<div className="product-content">İçerik</div>
										<div className="price">10 TL</div>
									</div>
								</div>
							))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Products;
