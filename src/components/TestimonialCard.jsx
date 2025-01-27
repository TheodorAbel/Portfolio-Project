function TestimonialCard({ name, photo, quote, role }) {
  return (
    <div className="card h-full">
      <div className="flex flex-col items-center">
        <img
          src={photo}
          alt={name}
          className="w-20 h-20 rounded-full object-cover mb-4"
        />
        <p className="text-gray-600 dark:text-gray-300 italic mb-4">"{quote}"</p>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;