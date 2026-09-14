export default function Footer() {
  return (
    <footer className="container mx-auto my-20 px-6 text-slate-500">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
        <div className="md:col-span-4 space-y-4">
          <img src="/assets/logo-text.png" alt="Dev Stack logo" className="h-7" />
          <p className="text-sm">
            Curated tools, technologies and resources for developers building
            modern software.
          </p>
          <ul className="flex gap-4 font-semibold text-sm">
            <li className="cursor-pointer hover:text-pink-600">GitHub</li>
            <li className="cursor-pointer hover:text-pink-600">Twitter</li>
            <li className="cursor-pointer hover:text-pink-600">LinkedIn</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <ul className="space-y-3 text-sm">
            <li className="font-semibold text-slate-900">PRODUCT</li>
            <li className="cursor-pointer hover:text-pink-600">Home</li>
            <li className="cursor-pointer hover:text-pink-600">Technologies</li>
            <li className="cursor-pointer hover:text-pink-600">Projects</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <ul className="space-y-3 text-sm">
            <li className="font-semibold text-slate-900">COMPANY</li>
            <li className="cursor-pointer hover:text-pink-600">About</li>
            <li className="cursor-pointer hover:text-pink-600">Contact</li>
            <li className="cursor-pointer hover:text-pink-600">Careers</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <ul className="space-y-3 text-sm">
            <li className="font-semibold text-slate-900">LEGAL</li>
            <li className="cursor-pointer hover:text-pink-600">Privacy Policy</li>
            <li className="cursor-pointer hover:text-pink-600">Terms of Service</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-slate-100 pt-6 text-sm flex flex-col md:flex-row justify-between gap-2">
        <p>&copy; 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-4">
          <span className="cursor-pointer hover:text-pink-600">Privacy</span>
          <span className="cursor-pointer hover:text-pink-600">Terms</span>
        </div>
      </div>
    </footer>
  )
}
