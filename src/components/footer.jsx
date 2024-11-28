import Link
    from "next/link";
export default function Footer() {
    return (
        <div className="flex items-center justify-between text-[#90A4AE] text-sm py-4 bg-slate-50">
            <span className="text-sm ml-4">Screen ID :</span>
            <span className="text-sm mr-4">Copyright © {new Date().getFullYear()}  Department of Foreign Trade | <Link className="text-sm text-text hover:text-link-hover" href="privacy.php">Privacy Policy</Link></span>
        </div >
    );
}