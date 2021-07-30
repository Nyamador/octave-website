import React from 'react';

const Testimonials = () => {
	return (
		<section className="w-full text-purple p-4 md:p-6 md:pt-20">
			<h3 className="text-4xl md:text-6xl">Testimonials</h3>
			<p>Here's what our lovely customers have to say about us..</p>

			<div className="flex flex-col md:flex-row mt-10 ">
				{[1, 2, 3].map(test => (<section key={test} className="rounded-md bg-purple p-6 w-full md:w-4/12 text-white cursor-pointer mb-4 md:mb-0 md:mr-2 hover:shadow-md transform hover:scale-95">
					<div>
						<div className="rounded-full w-12 h-12 bg-lightPurple p-2 text-purple text-6xl flex flex-row justify-center content-center mb-4">
							“
						</div>
					</div>
					<p className="text-xl mb-2">Desmond Nyamador</p>
					<p className="text-sm">
					"I like web design more and more each day because it makes my life a lot easier. Your company is truly upstanding and is behind its product 100%. Web design is awesome!"
					</p>
				</section>))}
			</div>
		</section>
	);
};

export default Testimonials;
