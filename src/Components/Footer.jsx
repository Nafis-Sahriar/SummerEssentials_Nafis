import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative mt-24">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

   
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
         
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="pixgen logo"
                width={100}
                height={100}
                className="dark:brightness-200"
              />
              <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
                Summer<br></br>
                Essentials
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
              Shop the best summer essentials for your beach days, pool parties, and sunny adventures. From stylish swimwear to must-have accessories, we have everything you need to make the most of your summer fun.
            </p>
          </div>

        
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
           <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Social Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-black dark:hover:text-white transition"
                >
                 Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-black dark:hover:text-white transition"
                >
                 Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>

         
        </div>

        
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Nafis Sahriar. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-black dark:hover:text-white transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-black dark:hover:text-white transition"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;