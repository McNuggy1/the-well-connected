'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/src/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { createPortal } from 'react-dom';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	const links = [
		{ label: 'About', href: '#about' },
		{ label: 'Core Pillars', href: '#pillars' },
		{ label: 'Services', href: '#services' },
		{ label: 'Pricing', href: '#pricing' },
		{ label: 'Contact', href: '#contact' },
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn('sticky top-0 z-50 w-full border-b border-transparent', {
				'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg':
					scrolled,
			})}
		>
			<nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
				<a href="#" className="hover:bg-accent rounded-md p-2 flex items-center gap-2">
					<WellConnectedLogo className="h-6 w-auto" />
				</a>
				<div className="hidden items-center gap-2 md:flex">
					{links.map((link) => (
						<a key={link.label} className={buttonVariants({ variant: 'ghost' })} href={link.href}>
							{link.label}
						</a>
					))}
					<Button variant="outline" asChild>
						<a href="#contact">Get in Touch</a>
					</Button>
					<Button asChild>
						<a href="#contact">Book a Call</a>
					</Button>
				</div>
				<Button
					size="icon"
					variant="outline"
					onClick={() => setOpen(!open)}
					className="md:hidden"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label="Toggle menu"
				>
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>
			<MobileMenu open={open} className="flex flex-col justify-between gap-2">
				<div className="grid gap-y-2">
					{links.map((link) => (
						<a
							key={link.label}
							className={buttonVariants({
								variant: 'ghost',
								className: 'justify-start',
							})}
							href={link.href}
							onClick={() => setOpen(false)}
						>
							{link.label}
						</a>
					))}
				</div>
				<div className="flex flex-col gap-2">
					<Button variant="outline" className="w-full bg-transparent" asChild>
						<a href="#contact">Get in Touch</a>
					</Button>
					<Button className="w-full" asChild>
						<a href="#contact">Book a Call</a>
					</Button>
				</div>
			</MobileMenu>
		</header>
	);
}

type MobileMenuProps = React.ComponentProps<'div'> & {
	open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
	if (!open || typeof window === 'undefined') return null;

	return createPortal(
		<div
			id="mobile-menu"
			className={cn(
				'bg-background/95 supports-[backdrop-filter]:bg-background/50 backdrop-blur-lg',
				'fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden',
			)}
		>
			<div
				data-slot={open ? 'open' : 'closed'}
				className={cn(
					'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
					'size-full p-4',
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</div>,
		document.body,
	);
}

export function WellConnectedLogo(props: React.ComponentProps<"svg">) {
	return (
		<svg viewBox="0 0 120 32" fill="currentColor" className="text-foreground" {...props}>
			<path d="M20 8h-4v16h4V8zm-8 0H4v8h4v4H4v4h8v-8H8v-4h4V8zm16 0h-4v6h4v2h-4v8h4v-2h4v-6h-4v-2h4V8zm12-2c-2.2 0-4 1.8-4 4v12c0 2.2 1.8 4 4 4s4-1.8 4-4V10c0-2.2-1.8-4-4-4zm0 6v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8c0-1.1.9-2 2-2s2 .9 2 2zm16-6h-4v16h8v-4h-4V8zm12 0h-4v16h4v-6h4v-4h-4V8zm8 0h-4v16h4v-6h2c2.2 0 4-1.8 4-4v-2c0-2.2-1.8-4-4-4h-2V8zm0 6v2c0 1.1.9 2 2 2h-2v-4z" />
			<circle cx="98" cy="16" r="4" fill="currentColor" />
		</svg>
	);
}
