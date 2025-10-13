export interface PostProps {
  id: number;
  username: string;
  date: string;
  image: string;
  likeCount: number;
  text: string;
}

export default function Post({
  id,
  username,
  date,
  image,
  likeCount,
  text,
}: PostProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div
      key={id}
      className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4 max-w-md w-full hover:shadow-md transition-shadow duration-200"
    >
      {/* Header */}
      <div className="flex flex-col">
        <span className="font-semibold text-gray-900 text-base">
          {username}
          <div className="bg-red-200">TEST</div>
        </span>
        <span className="text-xs text-gray-500">{formattedDate}</span>
      </div>

      {/* Image */}
      {image && (
        <div className="w-full flex justify-center">
          <img
            src={image}
            alt="Post image"
            className="w-full max-h-64 object-cover rounded-md"
          />
        </div>
      )}

      {/* Text */}
      <p className="text-gray-800 text-sm leading-relaxed">{text}</p>

      {/* Footer */}
      <div className="text-sm text-gray-600">❤️ {likeCount} likes</div>
    </div>
  );
}
