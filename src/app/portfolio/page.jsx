import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Joy-Touch : AI driven image editor",
    desc: "AI-powered image transformation platform built using Cloudinary to provide advanced image processing capabilities with ease of use.",
    img: "/joytouch.png",
    link: "https://joy-touch-ai.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Gym Website",
    desc: "A dynamic gym website with Next.js, leveraging TypeScript for type safety, Tailwind CSS for effortless styling, and Aeternity UI for sleek interfaces. Providing a seamless digital experience for fitness enthusiasts.",
    img: "/ana-gym.png",
    link: "https://ana-gym.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "NextJS Blog Web Application",
    desc: "This project is a blog website built using Next.js, TypeScript, Tailwind CSS, and React Portable Text Components for rendering rich text content. The CMS used is Sanity.io.",
    img: "/ana-blog.png",
    link: "https://ana-blog.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Explore my Github",
    desc: "Check out my GitHub for a glimpse into my coding journey. It's where I share projects, experiments, and learnings as I navigate the world of technology.",
    img: "/github-wallpaper.jpg",
    link: "https://github.com/anafariya",
  },
];

const PortfolioPage = () => {
  return (
    <div className="h-full overflow-y-auto">
      {items.map((item) => (
        <div
          key={item.id}
          className={`w-full h-full flex flex-col bg-gradient-to-r ${item.color} p-4 rounded-lg shadow-md mb-4`}
        >
          <div className="flex flex-row">
            <div className="w-2/3 mr-4">
              <div className="relative mt-5 w-full h-96 md:h-64 lg:h-96 xl:h-96">
                <Image src={item.img} alt={item.title} layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
            </div>
            <div className="w-1/3 flex flex-col justify-between">
              <div>
                <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2">
                  {item.title}
                </h1>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl mb-4">
                  {item.desc}
                </p>
              </div>
              <Link href={item.link} passHref className="block w-full py-2 text-center bg-white text-gray-800 text-sm md:text-base lg:text-lg xl:text-xl font-semibold rounded-md transition duration-300 hover:bg-gray-100">
                
                  See Demo
                
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioPage;
