import React from 'react'

function Home() {
  return (
    <>
 
 <section id="summer-collection">
		<div className="container">
			<div className="sc-content">
				<h1>summer collection</h1>
				<p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
					has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
				<a href="#">discover now</a> </div>
			<div className="sc-media">
				<div className="sc-media-bg"> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412556/E-commerce%20landing%20page/summer-collection/cold-fashion-man-women_3x.jpg" alt="sc-image" /> </div>
			</div>
		</div>
	</section>
	<section id="products">
		<div className="container">
			<div className="products-header">
				<h2>popular products</h2>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
			</div>
			<div className="product product-1">
				<figure> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412551/E-commerce%20landing%20page/products-showcase/product-1-img_3x.jpg" alt="product-image"/>
					<figcaption>cold fashion</figcaption>
					<figcaption>$ 56.00</figcaption>
				</figure>
			</div>
			<div className="product product-2">
				<figure> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412546/E-commerce%20landing%20page/products-showcase/product-2-img_3x.jpg" alt="product-image"/>
					<figcaption>women fashion</figcaption>
					<figcaption>$ 84.00</figcaption>
				</figure>
			</div>
			<div className="product product-3">
				<figure> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412550/E-commerce%20landing%20page/products-showcase/product-3-img_3x.jpg" alt="product-image"/>
					<figcaption>women fashion</figcaption>
					<figcaption>$ 48.00</figcaption>
				</figure>
			</div>
			<div className="product product-4">
				<figure> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412550/E-commerce%20landing%20page/products-showcase/product-4-img_3x.jpg" alt="product-image"/>
					<figcaption>men fashion</figcaption>
					<figcaption>$ 89.00</figcaption>
				</figure>
			</div>
		</div>
	</section>
	<section id="collections">
		<div className="container">
			<div className="c-1">
				<div className="c-1-image-holder"> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412550/E-commerce%20landing%20page/suit-collections/suit-collection-img_3x.jpg" alt="image"/> </div>
			</div>
			<div className="c-2">
				<h2>featured collection</h2>
				<hr />
				<div className="c-2-image-holder"> <img className="left" src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412552/E-commerce%20landing%20page/suit-collections/collection-2-img_3x.jpg" alt=""/><img className="right" src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412552/E-commerce%20landing%20page/suit-collections/collection-1-img_3x.jpg"
					 alt=""/></div>
				<p className="button">view all collections</p>
			</div>
		</div>
	</section>
	<section id="blog">
		<div className="container">
			<div className="blog-header">
				<h2>latest from blog</h2>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
			</div>
			<div className="blog-content">
				<div className="blog-1">
					<div className="blog-1-image-holder"> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412548/E-commerce%20landing%20page/blog/blog-2-img_3x.jpg" alt="image"/> </div>
					<div className="blog-1-content">
						<h4>Lorem Ipsum</h4>
						<h3>Lorem ipsum dolor sit amet.</h3>
						<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
						<p className="button">view post</p>
					</div>
				</div>
				<div className="blog-2">
					<div className="blog-2-image-holder"> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412543/E-commerce%20landing%20page/blog/blog-1-img_3x.jpg" alt="image"/> </div>
					<div className="blog-2-content">
						<h4>Lorem Ipsum</h4>
						<h3>Lorem ipsum dolor sit amet.</h3>
						<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
						<p className="button">view post</p>
					</div>
				</div>
			</div>
		</div>
	</section>

    </>
  )
}

export default Home