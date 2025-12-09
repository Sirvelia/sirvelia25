import Link from "next/link";

interface SocialButtonProps {
    url: string;
    network: "x" | "youtube" | "linkedin";
}

function XIcon() {
    return (
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.66667 0H0L5.50724 7.343L0.299967 13.3333H2.06665L6.32553 8.434L10 13.3333H14.6667L8.9278 5.68153L13.8667 0H12.1001L8.10953 4.59052L4.66667 0ZM10.6667 12L2.66667 1.33333H4L12 12H10.6667Z" fill="#05DAFF" />
        </svg>
    );
}

function YouTubeIcon() {
    return (
        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0287 1.66533C13.3333 2.85333 13.3333 5.33333 13.3333 5.33333C13.3333 5.33333 13.3333 7.81333 13.0287 9.00133C12.8593 9.658 12.364 10.1747 11.7367 10.3493C10.5973 10.6667 6.66667 10.6667 6.66667 10.6667C6.66667 10.6667 2.738 10.6667 1.59667 10.3493C0.966667 10.172 0.472 9.656 0.304667 9.00133C1.98682e-08 7.81333 0 5.33333 0 5.33333C0 5.33333 1.98682e-08 2.85333 0.304667 1.66533C0.474 1.00867 0.969333 0.492 1.59667 0.317333C2.738 -1.19209e-07 6.66667 0 6.66667 0C6.66667 0 10.5973 -1.19209e-07 11.7367 0.317333C12.3667 0.494667 12.8613 1.01067 13.0287 1.66533ZM5.33333 7.66667L9.33333 5.33333L5.33333 3V7.66667Z" fill="#05DAFF" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.66667 1.334C2.66649 1.68762 2.52584 2.02669 2.27567 2.27661C2.0255 2.52654 1.68629 2.66684 1.33267 2.66667C0.979045 2.66649 0.639976 2.52584 0.390053 2.27567C0.140129 2.0255 -0.000176644 1.68629 1.66908e-07 1.33267C0.000176978 0.979045 0.140822 0.639976 0.390996 0.390053C0.641169 0.140129 0.980378 -0.000176644 1.334 1.66908e-07C1.68762 0.000176978 2.02669 0.140822 2.27661 0.390996C2.52654 0.641169 2.66684 0.980378 2.66667 1.334ZM2.70667 3.654H0.0400001V12.0007H2.70667V3.654ZM6.92 3.654H4.26667V12.0007H6.89333V7.62067C6.89333 5.18067 10.0733 4.954 10.0733 7.62067V12.0007H12.7067V6.714C12.7067 2.60067 8 2.754 6.89333 4.774L6.92 3.654Z" fill="#05DAFF" />
        </svg>
    );
}

export default function SocialButton({ url, network }: SocialButtonProps) {
    return (
        <Link className="bg-website-background-dark text-accent border border-website-background-dark hover:border-accent rounded-lg h-8 w-8 flex items-center justify-center" href={url} target="_blank">
            {network === "x" ? <XIcon /> : network === "youtube" ? <YouTubeIcon /> : <LinkedInIcon />}
        </Link>
    );
}