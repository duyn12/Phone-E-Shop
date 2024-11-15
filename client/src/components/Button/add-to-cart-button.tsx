"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Loader2Icon } from "lucide-react";
import { Button } from "../ui/button";


export const AddToCartButton = ({
	productId,
	disabled,
}: {
	productId: string;
	disabled?: boolean;
}) => {
	const router = useRouter();
	const [pending, startTransition] = useTransition();

	return (
		<Button
			size="lg"
			type="submit"
			className="w-full rounded-full text-lg"
			onClick={async () => {
				startTransition(() => router.push(`/cart-overlay?add=${productId}`));
			}}
			aria-disabled={pending}
			disabled={pending || disabled}
		>
			{pending ? (
				<Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
			) : disabled ? (
				'ss'
			) : (
				't("actionButton")'
			)}
		</Button>
	);
};