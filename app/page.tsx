import FormComponent from '#/components/FormComponent';

export default function Page() {
	return (
		<section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
			<h1 className="text-center text-3xl font-extrabold !leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
				Using Ant-Desigh 5 with Next.js 13 and Tailwind CSS
			</h1>
      <FormComponent />
		</section>
	);
}
