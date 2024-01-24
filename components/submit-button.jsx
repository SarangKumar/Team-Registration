'use client';
import React from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { useToast } from './ui/use-toast';

const SubmitButton = ({ children, className, ...props }) => {
	const { pending } = useFormStatus();
	// const { toast } = useToast();

    // const showToast = () => {
    //     toast({
    //         title: 'Scheduled: Catch up',
    //         description: 'Friday, February 10, 2023 at 5:57 PM',
    //     });
    // }
	return (
		<Button
			{...props}
			type="submit"
			// type="button"
			// onClick={showToast}
			disabled={pending}
			className={className}
		>
			{children}{' '}
			{pending && (
				<Loader2
					className="animate-spin ml-2"
					size={16}
				/>
			)}
		</Button>
	);
};

export default SubmitButton;
