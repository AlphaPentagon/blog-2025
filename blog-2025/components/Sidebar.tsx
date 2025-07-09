import Image from 'next/image';

export default function Sidebar() {
  return (
    <aside className="sticky top-0 self-start h-fit p-4 grid grid-cols-1 gap-8">
      <div className="bg-white flex flex-col gap-4 p-4">
        <h2 className="text-2xl font-bold">About Me</h2>
        <Image
          src="/about-me-photo.png"
          width={150}
          height={150}
          alt="Picture of me."
          className="rounded-full box-content shadow-lg"
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis facilisis diam, quis tincidunt enim sagittis sed. Aenean non ipsum sed felis porttitor auctor placerat vitae nisl.</p>
      </div>
      <div className="bg-white flex flex-col gap-4 p-4">
        <h2 className="text-2xl font-bold">Popular posts</h2>
        <Image
          src=""
          width={260}
          height={80}
          alt=""
          className="rounded-md box-content shadow-md"
        />
        <Image
          src=""
          width={260}
          height={80}
          alt=""
          className="rounded-md box-content shadow-md"
        />
        <Image
          src=""
          width={260}
          height={80}
          alt=""
          className="rounded-md box-content shadow-md"
        />
      </div>
      <div className="bg-white flex flex-col gap-4 p-4">
        <h2 className="text-2xl font-bold">Follow me</h2>
        <div className="flex justify-between gap-4">
          <Image
            src=""
            width={50}
            height={50}
            alt=""
            className="rounded-full box-content shadow-md"
          />
          <Image
            src=""
            width={50}
            height={50}
            alt=""
            className="rounded-full box-content shadow-md"
          />
          <Image
            src=""
            width={50}
            height={50}
            alt=""
            className="rounded-full box-content shadow-md"
          />
        </div>
      </div>
    </aside>
  );
}