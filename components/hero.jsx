/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Z4GcE9UMXlN
 */
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Hero() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center space-y-4 text-center">
					<div className="space-y-2">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
							Welcome to Our Website
						</h1>
						<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
							Register for the event from this link.
						</p>
					</div>
					{/* <div className="w-full max-w-sm space-y-2">
						<form className="flex space-x-2">
							<Input
								className="max-w-lg flex-1"
								placeholder="Enter your email"
								type="email"
							/>
							<Button type="submit">Subscribe</Button>
						</form>
					</div> */}
				</div>
			</div>
		</section>
	);
}
