export function AgentCard({ name, company, avatar, phone, email }) {
  return (
    <div className="rounded-xl drop-shadow-xl bg-white p-4 mt-6">
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="h-24 w-24 rounded object-cover"
        />
        <div>
          <div className="text-sm font-semibold text-neutral-900">{name}</div>
          <div className=" font-semibold text-blue-500">
            View All Properties
          </div>
          <div className="text-xs text-neutral-500">{company}</div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <a
          href={`mailto:${email}`}
          className="rounded-md  bg-blue-100 px-3 py-2 text-center text-sm font-semibold text-blue-600"
        >
          Email
        </a>
        <a
          href={`tel:${phone}`}
          className="rounded-md  bg-red-100 px-3 py-2 text-center text-sm font-semibold text-red-600"
        >
          Call
        </a>
        <a
          href={`tel:${phone}`}
          className="rounded-md  bg-green-100 px-3 py-2 text-center text-sm font-semibold text-green-600"
        >
          text{" "}
        </a>
      </div>
    </div>
  );
}