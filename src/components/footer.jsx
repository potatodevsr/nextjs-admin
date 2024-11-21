export default function Footer() {
    return (
        <div className="flex items-center justify-between mt-8 text-gray-500 text-sm py-4 bg-slate-50">
            <div className="font-bold ml-4">Copyright © {new Date().getFullYear()} Department of Foreign Trade</div>
            <div className="text-xs mr-4">© All rights reserved.</div>
        </div>
    );
}