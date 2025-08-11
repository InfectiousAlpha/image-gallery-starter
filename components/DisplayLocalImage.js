import Image from 'next/image';

/**
 * A component to display an image stored locally in the /public folder.
 *
 * How to use:
 * 1. Make sure your image (e.g., 'my-photo.png') is in the `public/images/` directory.
 * 2. Import this component into any page, like `pages/index.js`.
 * import DisplayLocalImage from '../components/DisplayLocalImage';
 * 3. Add the component to your page's JSX:
 * <DisplayLocalImage />
 */
export default function DisplayLocalImage() {
  return (
    <div className="m-4 p-4 border rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Displaying a Local Image</h2>
      <div className="relative w-full max-w-md mx-auto h-64">
        {/*
          The `src` path starts with a forward slash '/' and does NOT include 'public'.
          Next.js automatically serves files from the 'public' directory at the root level.
        */}
        <Image
          src="/images/my-photo.jpg" // IMPORTANT: Change 'your-image.png' to your actual file name!
          alt="A descriptive caption for your image"
          layout="fill"
          objectFit="contain" // Or "cover", "contain", etc., depending on what you need
          className="rounded-md"
          // Add an onError handler for a fallback placeholder
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src='https://placehold.co/600x400/1e293b/ffffff?text=Image+Not+Found';
          }}
        />
      </div>
      <p className="mt-2 text-gray-500">
        This image is served from the <code>/public/images</code> folder.
      </p>
    </div>
  );
}
