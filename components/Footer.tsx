export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-lg py-8 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Designed & Developed by Prachi Shivale
        </p>
        <p className="text-gray-400 text-sm font-medium">
          Powered by Next.js + AI
        </p>
      </div>
    </footer>
  )
}
